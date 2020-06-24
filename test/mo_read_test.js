const Student = require('../app/student');
const assert = require('assert');

describe("Read Test", () => {
    let reader;
    beforeEach(() => {
        // console.log("user reading...!");
        readerName = new Student({name: "ReaderName"});
        readerName.save()
            .then((done) => {
                done();
            })
        // readerAge = new Student({age: "ReaderAge"});
        // readerAge.save()
        //     .then((done) => {
        //         done();
        //     })
    })

    // this it() block for read name only
    it("Read a username: ReaderName", () => {
        Student.find({name: "ReaderName"})
            .then((studentsObj) => {
                // id is a BSON value.
                assert(readerName._id.toString() === studentsObj[0]._id.toString());
                
                // done();
            })
    })

    // // this it() block for read age only
    // it("Read a userage: ", () => {
    //     Student.find({age: "ReaderAge"})
    //         .then((studentsObj) => {
    //             // read an int age
    //             assert(readerAge.age === studentsObj.age)
    //         })
    // })
})