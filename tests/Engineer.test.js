const Engineer = require('../lib/Engineer');

describe('Testing',() => {
    it('can set GitHub via constructor arguments', () => {
        const engineer = new Engineer("John",14,"john@john.com","john.doe");
        const {github} = engineer;

        expect(engineer.github).toEqual(github);
        
    });

    it('getRole() should return "Engineer"', () => {
        const engineer = new Engineer("John",14,"john@john.com","john.doe");

        response = engineer.getRole();
        expect(response).toEqual("Engineer");
    });

    it('can get GitHub username via getGithub()', () => {
        const engineer = new Engineer("John",14,"john@john.com","john.doe");
        const {github} = engineer;

        response = engineer.getGithub();
        expect(response).toEqual(github);
    });
    
})
