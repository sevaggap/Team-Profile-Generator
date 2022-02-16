const Manager = require('../lib/Manager');

describe('Testing',() => {
    it('can set office number via constructor arguments', () => {
        const manager = new Manager("John",14,"john@john.com",14);
        const {officeNumber} = manager;

        expect(manager.officeNumber).toEqual(officeNumber);
    });

    it('getRole() should return "Manager"', () => {
        const manager = new Manager("John",14,"john@john.com",14);

        response = manager.getRole();
        expect(response).toEqual("Manager");
    });

    it('can get office number via getOffice()', () => {
        const manager = new Manager("John",14,"john@john.com",14);
        const {officeNumber} = manager;

        response = manager.getOffice();
        expect(response).toEqual(officeNumber);
    });
    
})
