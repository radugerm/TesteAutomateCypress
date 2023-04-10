/// <reference types="Cypress" />
describe("Tests with Rahul", () => {
    it("Visit site", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca");
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);  //get only the visible ones
        cy.get('.products').find('.product').should('have.length', 4); //get elements from parent to child
        //cy.get('.products').find('.product').eq(1).contains("ADD TO CART").click() // chose with index and select the second product what is index 1
        cy.get(':nth-child(2) > .product-action > button').click() //chose from parent to child and select the second product
        // down here we iterate through the list to find the specific product
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find("h4.product-name").text();
            if (textVeg.includes("Cashews")) {

                cy.wrap($el).find('button').click();


            }

            cy.get('.brand').then(function (logoelement) {
                cy.log(logoelement.text())
            })

        })

    })

})

