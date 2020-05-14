describe('This is our first test!', () => {
    it("Should return true", () => {
        expect(true).to.equal(true);
    })
})

describe('Testing our form inputs', () => {
    beforeEach(function() {
        //runs before each test in this block
        //arrange - loading website up
        cy.visit("http://localhost:3000")
    })
    it('Input Name into the Name input', () => {
//=========for every test we do follow the below 3 steps: ===========
    //Arrange - get the element - get
    //Act -mimic user interaction -type
    //Assert - test/verify  -should

    //====get = arrange | type = act | should = assert!====
    cy.get('[for="name"] > input')
    .type('Shelbie Taylor')
    .should('have.value', "Shelbie Taylor")
  

    //[] = check or select by attributes
    //get() = arrange
    //check() = act
    //should() = assert
    cy.get('input[type="checkbox"]').check().should("be.checked")
    })
})


describe('Type Email Address', () => {
    beforeEach(function() {
        //runs before each test in this block
        //arrange - loading website up
        cy.visit("http://localhost:3000")
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
        cy.visit("http://localhost:3000")
    })
    it('Password must be typed', () => {
cy.get('[for="email"] > input')
.type("shelbieltaylor@gmail.com")

    })
})