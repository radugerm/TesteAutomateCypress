/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get(".mouse-hover-content").invoke("show")
        cy.contains("Top").click()
        cy.url().should('include', 'top')


    })



})