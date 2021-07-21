const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Engineer = require("../library/Engineer");

describe("Engineer", () => {
    describe('engineerName', () => {
        it('testEngineerName',() =>{
            const testEngineerName = new Engineer('Joe','1','JoeDanger@whatever.com','Joed');
            expect(testEngineerName.getName()).toBe('Joe')
            
        });
    });
    describe('engineerId', () => {
        it('testEngineerId', () =>{
            const testEngineerId = new Engineer('Joe','1','JoeDanger@whatever.com','Joed');
            expect(testEngineerId.getID()).toBe('1');
        });
    });
    describe('engineerEmail', () => {
        it('testEngineerEmail', () =>{
            const testEngineerEmail = new Engineer('Joe','1','JoeDanger@Whatever.com','Joed');
            expect(testEngineerEmail.getEmail()).toBe('JoeDanger@whatever.com');
        });
    });
    describe('engineerGithub',() => {
        it('testEngineerGithub', () =>{
            const testEngineerGithub = new Engineer('Joe','1','JoeDanger@whatever.com','Joed');
            expect(testEngineerGithub.getGitHub()).toBe('Joed')
        })
    })
    describe('engineerRole', () => {
        it('testEngineerRole', () =>{
            const testEngineerRole = new Engineer('Joe','1','JoeDanger@whatever.com','Joed');
            expect(testEngineerRole.getRole()).toBe('Engineer')
        })
    })
});