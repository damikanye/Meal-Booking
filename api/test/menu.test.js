import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const should = chai.should();

// Test /Get route
describe('/Get menu', () => {
  it('get menus', (done) => {
    chai.request(app)
      .get('/api/v1/menu')
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});

// Test /Post route
describe('/POST menu', () => {
  it('post menus', (done) => {
    const menu = {
      name: 'Stew',
      size: 'Medium',
      description: 'lorem lorem lorem',
      price: '450',
      caterer_id: 23
    };
    chai.request(app)
      .post('/api/v1/menu')
      .send(menu)
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});