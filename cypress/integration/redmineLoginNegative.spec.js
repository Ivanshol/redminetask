/// <reference types="cypress" />

const { should } = require("chai")
import RedminePage from './page/RedminePage';
import RedmineLoginPage from './page/RedmineLoginPage';
import RedmineSignUpPage from './page/RedmineSignUpPage';

context('Redmine login', () => {

    beforeEach(() => {
      cy.visit('https://www.redmine.org/')
    })
  
    describe('Redmine website login negative tests', () => {

    it('Should negative test login function with incorrect data', () => {

      RedminePage.clickSignInButton();
      RedmineLoginPage.verifyLoginPageURL().should('eq', 'https://www.redmine.org/login');;
      RedmineLoginPage.typeIncorrectDataToUsernameField();
      RedmineLoginPage.typeIncorrectDataToPasswordField();
      RedmineLoginPage.clickSignInSubmitButton();
      RedmineLoginPage.verifyThatTheErrorIsVisible().should('be.visible');
      
        })

    it('Should negative test account creation function with empty inputs', () => {

      RedminePage.clickSignUpButton();
      RedmineSignUpPage.verifySignUpPageURL().should('eq', 'https://www.redmine.org/account/register');
      RedmineSignUpPage.clickSubmitButton();
      RedmineSignUpPage.verifyThatErrorIsVisibleWhenSigningUpWithEmptyInputs().should('be.visible');
      cy.get('[id="errorExplanation"] ul li').eq(0).should('have.text', 'Login can\'t be blank');
      
        })

    })

    
})