import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';

chai.use(chaiHttp);
const should = chai.should();

// Test /Get route
describe('/Get menu', () => {
  it('get menu', (done) => {
    chai.request(app)
      .get('/api/v1/menus')
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
  it('post menu', (done) => {
    const menu = {
      name: 'fruit',
      size: 'large',
      price: 500,
    };
    chai.request(app)
      .post('/api/v1/menus')
      .send(menu)
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});