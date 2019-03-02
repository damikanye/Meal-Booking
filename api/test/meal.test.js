import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const should = chai.should();

// Test /Get route
describe('/Get meals', () => {
  it('get meals', (done) => {
    chai.request(app)
      .get('/api/v1/meals')
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done(err);
      });
  });
});

// Test /Post route
describe('/POST meal', () => {
  it('post meal', (done) => {
    const meal = [{
      name: 'Spag',
      size: 'Medium',
      description: 'lorem lorem lorem',
      price: '450',
      caterer_id: 23
    },
    {
      name: 'Soup',
      size: 'Medium',
      description: 'lorem lorem lorem',
      price: '450',
      caterer_id: 23
    },
    ];
    chai.request(app)
      .post('/api/v1/meals')
      .send(meal)
      .end((err, res) => {
        res.should.have.property('status', 400);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});

// Test /Get:id route
describe('/GET/:id meal', () => {
  it('get meal by id', (done) => {
    chai.request(app)
      .get(`/api/v1/meals/ ${2}`)
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});

// Update meal test
describe('/PUT/:id meal', () => {
  it('update meal by id', (done) => {
    const meal = {
      name: 'okro Soup',
      size: 'Medium',
      description: 'lorem lorem lorem',
      price: '450',
      caterer_id: 23
    };
    chai.request(app)
      .put(`/api/v1/meals/ ${2}`)
      .send(meal)
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});

// delete meal test
describe('/DELETE/:id meal', () => {
  it('delete meal by id', (done) => {
    chai.request(app)
      .delete(`/api/v1/meals/ ${2}`)
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});