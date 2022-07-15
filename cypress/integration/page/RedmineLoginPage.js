class RedmineLoginPage{
    verifyLoginPageURL(){
        return cy.url();
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
        return cy.get('[class="flash error"]');
    }
}

export default new RedmineLoginPage()