describe('Meu primeiro teste', () => {
 it('Visita a página e verifica o título', () => {
   cy.visit('https://example.cypress.io')
   cy.contains('type').click()
 })
})

describe('Teste de login', () => {
  it('Faz login com sucesso',() =>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.contains('You logged into a secure area!')
    cy.url().should('include', '/secure')
    cy.get('.flash').should('be.visible')
  })
})
