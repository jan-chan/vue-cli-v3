// https://docs.cypress.io/api/introduction/api.html

describe('Home page Test', () => {
  it('title', () => {
    cy.visit('/');
    cy.title().should('eq', 'v3');
  });
  it('h1', () => {
    cy.visit('/');
    cy.contains('h1', "I'm a message box");
  });
  it('debugId', () => {
    cy.visit('/');
    cy.contains('#debugId', '1234');
  });
});
