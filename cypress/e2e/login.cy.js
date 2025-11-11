describe('Testes de login do MiniShop', () => {

  
  beforeEach(() => { //elimina o visite de todas as partes
    cy.fixture('usuarios').its('usuarioValido').as('usuarioValido')
    cy.fixture('usuarios').its('usuarioInvalido').as('usuarioInvalido')
    cy.visit('./html/index.html')
  })

  it('Verifica o titulo da aba da página', () => {
    cy.visit('./html/index.html')
    cy.title().should('be.eq', 'MiniShop - Login')
  })

  it('Login com campos em branco', () => { // até aqui não temos um teste, verifica o resultado que tive com o resultado que estava esperando
    cy.get('#username').clear()
    cy.get('#password').clear()  
    cy.get('button[type=submit]').click()

    // Asserção
    cy.get('div[role=alert]').should('be.visible')
  })


  it('Login com dados incorretos', () => {  
    
    //Login por comandos
    cy.get('@usuarioInvalido').then((usuario) => {
      cy.login(usuario)
    })


    //Login por comandos
    //cy.login({usuario: 'teste', senha: '12345'})

    // Asserção
    cy.get('div[role=alert]').should('be.visible')
  })

  it('Login com dados corretos', () => {  
    
    //Login por comandos
    cy.get('@usuarioValido').then((usuario) => {
      cy.login(usuario)
    })

    // Asserção
    cy.contains('button', 'Sair').should('exist') // validar se mudou de página, como página home, ou por exemplo botão de sair que pode ser usado para validar
    cy.title().should('be.eq', 'MiniShop - Home') // segunda validação pelo home
  })

})