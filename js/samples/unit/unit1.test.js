import { sayHello } from "./unit1";

describe('SayHello Unit Test Suites', () => {
    it("it should return 'Hello, World'", () => {
        expect(sayHello()).toBe("Hello, World")
    })
    it('should return "Hello, Benoit"', () => {
        expect(sayHello("Benoit")).toBe("Hello, Benoit")
    })
})