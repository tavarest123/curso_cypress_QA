//Vai importar o nosso LoginPage da pasta pages
import LoginPage from '../pages/LoginPage'
describe('Fluxo de compra', () => {
  it('Fluxo de compra completo', () => {


    //Bloco 1 - login
    LoginPage.visit()
    LoginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')

    //Bloco 2 - adicionar produtos ao carrinho e checkout
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()
    cy.get('#first-name').type('João')
    cy.get('#last-name').type('zinho')
    cy.get('#postal-code').type('18000000')
    cy.get('#continue').click()
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.get('#finish').click()

    //Bloco 3 - validação do pedido
    cy.contains('Thank you for your order!').should('be.visible')
  })
})