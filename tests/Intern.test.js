const Intern = require('../lib/Intern');

describe('Testing',() => {
    it('can set school via constructor arguments', () => {
        const intern = new Intern("John",14,"john@john.com","University");
        const {school} = intern;

        expect(intern.school).toEqual(school);
        
    });

    it('getRole() should return "Intern"', () => {
        const intern = new Intern("John",14,"john@john.com","University");

        response = intern.getRole();
        expect(response).toEqual("Intern");
    });

    it('can get school via getSchool()', () => {
        const intern = new Intern("John",14,"john@john.com","University");
        const {school} = intern;

        response = intern.getSchool();
        expect(response).toEqual(school);
    });
    
})
