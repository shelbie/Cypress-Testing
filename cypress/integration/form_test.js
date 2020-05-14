describe('Type Email Address', () => {
    beforeEach(function() {
        //runs before each test in this block
        //arrange - loading website up
        cy.visit("http://localhost:3001")
    })
    it('Email must be typed', () => {
        cy.get('[for="name"] > input')
.type("Shelbie Taylor")

    })
})

describe('Type Email Address', () => {
    beforeEach(function() {
        //runs before each test in this block
        //arrange - loading website up
        cy.visit("http://localhost:3001")
    })
    it('Email must be typed', () => {
cy.get('[for="email"] > input')
.type("shelbieltaylor@gmail.com")

    })
})


describe('Type Password', () => {
    beforeEach(function() {
        //runs before each test in this block
        //arrange - loading website up
        cy.visit("http://localhost:3001")
    })
    it('Password must be typed', () => {
        cy.get('[for="password"] > input')
.type("password1234")

    })
})

describe("if user can check terms checkbox", () => {
    cy.visit("http://localhost:3001")
})
it("Checkbox must work", () => {
    cy.get('.terms > input')
    .expect(true).should(true || false)
})