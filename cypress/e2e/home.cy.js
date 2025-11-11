//fazer testes da página home, como login, home, ações como consultar produto e ver produtos
//Padrão page ougts, cada página vira um objeto (atributos e comportamentos)
// Mapeia e reutiliza isso nos testes

import { HomePage } from "../support/pages/HomePage"
import { LoginPage } from "../support/pages/loginPage"

describe('Página Home da Aplicação MiniShop', () => {
    
    const home = new HomePage()
    const loginPage = new LoginPage()
    
    beforeEach(() => {
        cy.fixture('usuario').as('usuarios') // busca firture usuarios

        cy.get('@usuarios').then(() => {
            const usuario = usuarios.usuarioValido
            home.visitar(
                LoginPage.login(usuario.usuario, usuario.senha)
            )
        })

        home.visitar()
        loginPage.login('admin', '12345')
    })

    it('Deve exibir o titulo correto', () =>{
        home.verificarTitulo
    })
})