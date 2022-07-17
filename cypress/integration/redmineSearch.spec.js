/// <reference types="cypress" />

const { should } = require("chai")
import RedminePage from './page/RedminePage';

context('Redmine', () => {

    beforeEach(() => {
      cy.visit('https://www.redmine.org/')
    })
  
    describe('Redmine website', () => {

      it('Should test the search function', () => {

      RedminePage.inputSearchText();
      RedminePage.verifySearchFunction().should('include', 'q=Redmine');
      
        })

    })
})