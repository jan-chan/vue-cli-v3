// https://docs.cypress.io/api/introduction/api.html

describe('Home page title Test', () => {
  it('Visits on Home page', () => {
    cy.visit('/')
    cy.title().should('eq', 'v3')
  })
})

describe('Home page MessageBox Test', () => {
  it('Visits on Home page', () => {
    cy.visit('/')
    cy.contains('h1', "I'm a message box")
  })
})
