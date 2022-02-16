const Employee = require('../lib/Employee');

describe('Testing',() => {
    it('can instantiate employee instance', () => {
        const employee = new Employee("John",14,"john@john.com");

        expect(employee).toBeInstanceOf(Employee);
    });

    it('can set name via constructor arguments', () => {
        const employee = new Employee("John",14,"john@john.com");
        const {name} = employee;

        expect(employee.name).toEqual(name);
        
    });

    it('can set id via constructor argument', () => {
        const employee = new Employee("John",14,"john@john.com");
        const {id} = employee;

        expect(employee.id).toEqual(id);
    });

    it('can set email via constructor argument', () => {
        const employee = new Employee("John",14,"john@john.com");
        const {email} = employee;

        expect(employee.email).toEqual(email);
    });

    it('can get name via getName()', () => {
        const employee = new Employee("John",14,"john@john.com");
        const {name} = employee;

        response = employee.getName();

        expect(response).toEqual(name);
    });

    it('can get id via getId()', () => {
        const employee = new Employee("John",14,"john@john.com");
        const {id} = employee;

        response = employee.getId();

        expect(response).toEqual(id);
    });

    it('can get email via getEmail()', () => {
        const employee = new Employee("John",14,"john@john.com");
        const {email} = employee;

        response = employee.getEmail();

        expect(response).toEqual(email);
    });

    it('getRole should return employee', () => {
        const employee = new Employee("John",14,"john@john.com");

        response = employee.getRole();

        expect(response).toEqual("Employee");
    });
    
    
})