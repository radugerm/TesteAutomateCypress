describe('Testare opensource', () => {

    //it('I can login', () => {
    //    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
    //   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
    //    cy.get('.oxd-button').click();

    // Log out
    it('I can login and logout', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
        cy.get('.oxd-button').click();
        cy.get('.oxd-userdropdown-tab').click();
        // Here down I present present 2 ways to Logout
        cy.contains("Logout").click()
        //cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    })


})

    // Invalid Credentials
    //it("Invalid credentials", () => {
    //    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("dmin");
    //    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin1");
    //    cy.get('.oxd-button').click();
    //})
//})
