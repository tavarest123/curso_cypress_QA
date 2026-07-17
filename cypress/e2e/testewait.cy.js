

  it('wait sucesso', () => {
    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.intercept('GET', '**/comments/*').as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment') // só continua quando a API responder
    cy.get('.network-post').should('be.visible')

})
