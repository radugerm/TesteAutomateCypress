//  Test verifica segment din URL
describe('Exemplu unde', () => {

    //it('I can verify segment', () => {
    //    cy.visit("https://www.digi24.ro/stiri/externe/ue");
    //    cy.url().should("include", '/stiri/')

    //})

    //it('asteapta 10 secunde', () => {
    //    cy.visit("https://google.com");
    //    cy.get('#L2AGLb').click();

    //   cy.wait(10000);
    //    cy.get(".gLFyf").type("Au trecut 10 secunde");
    //})

    //it('selectez folosind un atribut', () => {
    //    cy.visit("https://google.com");
    //    cy.get('#L2AGLb').click();
    //    cy.get('.gLFyf').click();
    //    cy.get('[alt="Google"]').should('be.visible');
    //})

    //it("Fac un screenshot la pagina", () => {
    //   cy.visit("https://www.google.com");
    //    cy.screenshot();
    //})

    //it('verific o valoare din input', () => {
    //    cy.visit('https://google.com');

    //    cy.get('#L2AGLb').click();

    //    const googleSearch = cy.get('.gLFyf');


    //    googleSearch.type('123');
    //    googleSearch.should('have.value', '123');


    //})

    it("Verific clasa de la buton", () => {
        cy.visit('https://libris.ro');
        cy.get("#autoCompleteButton").should("have.class", 'onSearchClick');

    })

})


