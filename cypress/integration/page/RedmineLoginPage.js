class RedmineLoginPage{
    verifyLoginPageURL(){
        cy.url().should('eq', 'https://www.redmine.org/login');
    }

    typeIncorrectDataToUsernameField(){
        cy.get('#username').click().type('Incorrect input');
    }

    typeIncorrectDataToPasswordField(){
        cy.get('#password').click().type('Incorrect input');
    }

    clickSignInSubmitButton(){
        cy.get('[type="submit"]').click();
    }

    verifyThatTheErrorIsVisible(){
        cy.get('[class="flash error"]').should('be.visible');
    }
}

export default new RedmineLoginPage()