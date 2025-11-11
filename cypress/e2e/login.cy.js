describe('Testes de login do MiniShop', () => {

  beforeEach(() => {
    cy.visit('./html/index.html')
  })

  it('Verifica o titulo da aba da página', () => {
    cy.visit('./html/index.html')
    cy.title().should('be.eq', 'MiniShop - Login')
  })

  it('Login com campos em branco', () => {
    

  })

})