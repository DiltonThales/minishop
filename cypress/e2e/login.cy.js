describe('Testes de login do MiniShop', () => {

  beforeEach(() => { //elimina o visite de todas as partes
    cy.visit('./html/index.html')
  })

  it('Verifica o titulo da aba da página', () => {
    cy.visit('./html/index.html')
    cy.title().should('be.eq', 'MiniShop - Login')
  })

  it('Login com campos em branco', () => {
    cy.get('#username').clear()
    cy.get('#password').clear()  
    cy.get('#button[type=submit]').click
  })

})