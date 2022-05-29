const request = require('supertest');
const assert = require('assert');

var app = require('./../index').app;

// GET tests 
/*console.log( "Тест на получение конкретной школы:")
  it('should return young biology school', function (done) {
    request(app)
      .get('/api/school/1')
      .expect(function (response) {
        assert.deepEqual(response.body, {
            id: 1,
            school_name: "Школа юного биолога",
            school_description: "При биологическом факультете работает «Школа юного биолога». Слушателями школы могут стать учащиеся 8–11 классов общеобразовательных школ, лицеев и гимназий. Цель школы — углубленное изучение биологии, подготовка к участию в олимпиадах. Программа обучения включает теоретические занятия и выполнение практических работ. Занятия проводятся еженедельно на биологическом факультете (ул. Курчатова, 10). Обучение бесплатное.",
            phone: " (+375-17) 209-59-00",
            link: " www.bio.bsu.by",
            img: "dae80ffa-c60f-4ee0-9263-bbc9e1e8e693.jpg",
            createdAt: "2022-05-21T16:53:39.796Z",
            updatedAt: "2022-05-21T16:53:39.796Z"
        });
      })
      .end(done);
  });

  it('should return event - YPT', function (done) {
    request(app)
      .get('/api/event/1')
      .expect(function (response) {
        assert.deepEqual(response.body, {
            id: 1,
            event_name: "Турнир Юных Физиков",
            event_description: "Турнир юных физиков (ТЮФ) родился в 1979 г.ТЮФ — это лично-командное состязание школьников старших классов в умении решать сложные исследовательские и научные проблемы, убедительно представлять свои решения, отстаивать их в научных дискуссиях — физических боях",
            is_registrated: true,
            img: "a1ad097f-ec90-41c0-a31e-0e8f1b0dfa43.jpg",
            createdAt: "2022-05-21T18:40:49.962Z",
            updatedAt: "2022-05-21T18:40:49.962Z"
        });
      })
      .end(done);
  });*/

  // POST tests
  /* describe('POST /record', function () {
    let data = {
        "id": 3,
        "UserId":1, 
        "CourseId":1, 
        "is_actived": process.env.NEW_ENTRY
    }
  it('should create record', function (done) {
    request(app)
    .post('/api/record')
    .set('Content-Type', 'application/json')
    .send(data)
    .expect('Content-Type', /json/)
    .end((err) => {
        if (err) return done(err);
        done();
    });
  });
});*/



  // PUT tests
 /*describe('PUT /record', function () {
    let data = {
        "UserId":1, 
        "CourseId":1
    }
  it('should update status of record to `В процессе` ', function (done) {
    request(app)
    .put('/api/record/process')
    .set('Content-Type', 'application/json')
    .send(data)
    .expect('Content-Type', /json/)
    .end((err) => {
        if (err) return done(err);
        done();
    });
  });
});*/

 // DELETE tests
 describe('DELETE /record', function () {

  it('should delete record with id = 3 ', function (done) {
    request(app)
    .delete('/api/record/3')
    .set('Content-Type', 'application/json')
    .expect('Content-Type', /json/)
    .end((err) => {
        if (err) return done(err);
        done();
    });
  });
});

