const Student = require('../app/student');
const assert = require('assert');

describe('Create Test', () => {
    it('create a user in DB', () => {
        assert(true);

        const abhiObject = new Student({name: "Abhishek", age: 20});
        abhiObject.save()
            .then(() => {
                assert(!abhiObject.isNew);
            })
            .catch(() => {
                console.log("error");
                
            })
    });
});
