const { Given, When,Then } = require("@badeball/cypress-cucumber-preprocessor")

Given('I visit web app security', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include','index.html')

})

When('I type query online into searchbox and I enter it', () => {
    cy.get('#searchTerm').type('online{enter}')
    
})

Then('I see search result (Zero - Free Access to Online Banking and Zero - Online Statement)', () => {
    cy.get('h2').should('contain.text', 'Search Results')
    cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
    cy.get('a').should('contain.text', 'Zero - Online Statements')
})