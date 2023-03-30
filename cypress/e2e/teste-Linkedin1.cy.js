
describe('On linkedin', () => {

    it('I can login', () => {
        cy.visit("https://linkedin.com");
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type("radugerm@gmail.com");
        cy.get('#password').type("123456");
        cy.get('.btn__primary--large').click();
        cy.get('#ember14').should('exist');



    })

})