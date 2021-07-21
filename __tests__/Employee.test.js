const Employee = require("../library/Employee");

describe("Employee", () => {
    describe('employeeName', () => {
        it('testEmployeeName',() =>{
            const testEmployeeName = new Employee('Joe','1','JoeDanger@whatever.com');
            expect(testEmployeeName.getName()).toBe('Joe')
            
        });
    });
    describe('employeeId', () => {
        it('testEmployeeId', () =>{
            const testEmployeeId = new Employee('Joe','1','JoeDanger@whatever.com');
            expect(testEmployeeId.getID()).toBe('1');
        });
    });
    describe('employeeEmail', () => {
        it('testEmployeeEmail', () =>{
            const testEmployeeEmail = new Employee('Joe','1','JoeDanger@Whatever.com');
            expect(testEmployeeEmail.getEmail()).toBe('JoeDanger@whatever.com');
        });
    });
    describe('employeeRole', () => {
        it('testEmployeeRole', () =>{
            const testEmployeeRole = new Employee('Joe','1','JoeDanger@whatever.com');
            expect(testEmployeeRole.getRole()).toBe('Employee')
        })
    })
});