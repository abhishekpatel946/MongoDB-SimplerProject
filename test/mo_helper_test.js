const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //ES-6 promises;


before( (done) => {

    mongoose.connect("mongodb://localhost/mongotube", {useNewUrlParser: true});
    mongoose.connection
        .once("open", () =>  {
            console.log("MongoDB Connected...!")
            done();
        })
        .on("error", error => {
            console.log('ERROR :- ', error);
        });    

});

beforeEach((done) => {
    mongoose.connection.collections.students.drop(() => {
        // console.log("students collection droped...!");  
        done();
    });
})