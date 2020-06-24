const Student = require('../app/student');
const assert = require('assert');

describe('Update Test', () => {
    let updater;

    beforeEach((done) => {
        updater = new Student({name: 'Updater'})
        updater.save()
            .then(() => done());
    })
    // it("a update test for updater", () => {
    //     Student.findByIdAndUpdate(updater._id)
    //     // one line .then() block 
    //         .then(() => Student.updateOne({name: "Updater"}))
    //         .then((student) => {
    //             assert(student === null)
    //             // done();
    //         })
    // })
    it('Set n Save test', () => {
        updater.set('name', "UpUpdater");
        updater.save()
        .then( () => Student.find({}))
        .then(student => {
            assert(student[0].name != 'Updater');
            assert(student[0].name === 'UpUpdater');
        });
    });
});