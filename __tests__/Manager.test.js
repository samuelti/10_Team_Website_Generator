const { describe, it, expect } = require("@jest/globals");
const Manager = require("../library/Manager");

describe("Manager", () => {
    describe('managerName', () => {
        it('testManagerName',() =>{
            const testManagerName = new Manager('Joe','1','JoeDanger@whatever.com','90');
            expect(testManagerName.getName()).toBe('Joe')
            
        });
    });
    describe('managerId', () => {
        it('testManagerId', () =>{
            const testManagerId = new Manager('Joe','1','JoeDanger@whatever.com','90');
            expect(testManagerId.getID()).toBe('1');
        });
    });
    describe('managerEmail', () => {
        it('testManagerEmail', () =>{
            const testManagerEmail = new Manager('Joe','1','JoeDanger@Whatever.com','90');
            expect(testManagerEmail.getEmail()).toBe('JoeDanger@whatever.com');
        });
    });
    describe('managerOfficeNum',() => {
        it('testManagerOfficeNum', () =>{
            const testManagerOfficeNum = new Manager('Joe','1','JoeDanger@whatever.com','90');
            expect(testManagerOfficeNum.getOfficeNum()).toBe('90')
        })
    })
    describe('managerRole', () => {
        it('testManagerRole', () =>{
            const testManagerRole = new Manager('Joe','1','JoeDanger@whatever.com','90');
            expect(testManagerRole.getRole()).toBe('Manager')
        })
    })
});