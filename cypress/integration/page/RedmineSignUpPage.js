class RedmineSignUpPage{
    verifySignUpPageURL(){
        cy.url().should('eq', 'https://www.redmine.org/account/register');
    }

    clickSubmitButton(){
        cy.get('[type="submit"]').click();
    }

    verifyThatErrorIsVisibleWhenSigningUpWithEmptyInputs(){
        cy.get('#errorExplanation').should('be.visible');
    }

    verifyErrorMessages(){
        cy.get('[id="errorExplanation"] ul li').eq(0).should('have.text', 'Пользователь не может быть пустым');
        cy.get('[id="errorExplanation"] ul li').eq(1).should('have.text', 'Имя не может быть пустым');
        cy.get('[id="errorExplanation"] ul li').eq(2).should('have.text', 'Фамилия не может быть пустым');
        cy.get('[id="errorExplanation"] ul li').eq(3).should('have.text', 'Email не может быть пустым');
        cy.get('[id="errorExplanation"] ul li').eq(4).should('have.text', 'Пароль недостаточной длины (не может быть меньше 4 символа)');
    }
}

export default new RedmineSignUpPage()