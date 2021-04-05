/// <reference types="cypress" />
// http://wcaquino.me/cypress/componentes.html

describe('Cypress basic', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')


        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        //TODO imprimir o log no console
        //TODO escrever o title em um campo de texto

    })

    it.only('Should find and interact with an element', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
    })

})