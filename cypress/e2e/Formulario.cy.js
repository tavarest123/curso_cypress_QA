describe('Cadastro usuario', () => {
  it('preencher e enviar formulario completo', () => {
    cy.visit('https://demoqa.com/automation-practice-form')

    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('zinha')
    cy.get('#userEmail').type('maria.zinha@example.com')

    cy.get('#gender-radio-2').click()

    cy.get('#userNumber').type('1512312312')

   cy.get('#subjectsInput').type('Maths{enter}')

   cy.get('#hobbies-checkbox-1').click()
   cy.get('#submit').click()

   cy.get('.modal-content').should('be.visible')
   cy.contains('Thanks for submitting the form').should('be.visible')

  })
})