const Student = require('../app/student');
const assert = require('assert');

describe("Delete Test", () => {
    let deleter;
    
    beforeEach((done) => {
        deleter = new Student({name: "Deleter"})
        deleter.save()
            .then(() => done());
    })
    it("a delete test for deleter", () => {
        Student.findByIdAndDelete(deleter._id)
            // one line .then() block after next .then() block easily run else hit error;
            .then(() => Student.findOne({name: "Deleter"}))
            .then((student) => {
                assert(student === null)
                // done()
            })
    })
})