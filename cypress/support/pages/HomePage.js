export class HomePage{
    // Separa Seletores (atributos)
    botaoSair = () => cy.contains('button', 'Sair').should("exist")
    listaProdutos = () => cy.get('#product-list')
    title = 'MiniShop - Home'

    //Ações (metodos)
    visitar(){
        cy.visit('./html/home.html')
    }

    verificarTitulo(){
        cy.title().should('be.aq', this.title)
    }
}