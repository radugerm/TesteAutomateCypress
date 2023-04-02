//Test verifica segment din URL

describe('Example where', () => {

    it('I can verify segment', () => {
        cy.visit("https://www.digi24.ro/stiri/externe/ue");
        cy.url().should("include", '/stiri/')

    })

    it('wait 10 secunds', () => {
        cy.visit("https://google.com");
        cy.get('#L2AGLb').click();

        cy.wait(10000);
        cy.get(".gLFyf").type("Has past 10 seconds");
    })

    it('Selecting using a atribut', () => {
        cy.visit("https://google.com");
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').click();
        cy.get('[alt="Google"]').should('be.visible');
    })

    it("Make a Screenshot", () => {
        cy.visit("https://www.google.com");
        cy.screenshot();
    })

    it('Verify a value at input', () => {
        cy.visit('https://google.com');

        cy.get('#L2AGLb').click();

        const googleSearch = cy.get('.gLFyf');


        googleSearch.type('123');
        googleSearch.should('have.value', '123');


    })

    it("Verify clas from button", () => {
        cy.visit('https://libris.ro');
        cy.get("#autoCompleteButton").should("have.class", 'onSearchClick');

    })

})


