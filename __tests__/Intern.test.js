const { describe, it, expect } = require("@jest/globals");
const Intern = require("../library/Intern");

describe("Intern", () => {
    describe('internName', () => {
        it('testInternName',() =>{
            const testInternName = new Intern('Joe','1','JoeDanger@whatever.com','Joe Uni');
            expect(testInternName.getName()).toBe('Joe')
            
        });
    });
    describe('internId', () => {
        it('testInternId', () =>{
            const testInternId = new Intern('Joe','1','JoeDanger@whatever.com','Joe Uni');
            expect(testInternId.getID()).toBe('1');
        });
    });
    describe('internEmail', () => {
        it('testInternEmail', () =>{
            const testInternEmail = new Intern('Joe','1','JoeDanger@Whatever.com','Joe Uni');
            expect(testInternEmail.getEmail()).toBe('JoeDanger@whatever.com');
        });
    });
    describe('internSchool', () => {
        it('testInternSchool', () =>{
            const testInternSchool = new Intern('Joe','1','JoeDanger@whatever.com','Joe Uni');
            expect(testInternSchool.getSchool()).toBe('Joe Uni')
        })
    })
    describe('internRole', () => {
        it('testInternRole', () =>{
            const testInternRole = new Intern('Joe','1','JoeDanger@whatever.com','Joe Uni');
            expect(testInternRole.getRole()).toBe('Intern')
        })
    })
});