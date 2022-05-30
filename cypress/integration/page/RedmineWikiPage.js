class RedmineWikiPage{
    clickOnFeaturesNavTab(){
        cy.get('ul [href="#Features"]').click();
    }

    clickOnDocumentationNavTab(){
        cy.get('div ul [href="#Documentation"]').scrollIntoView().click();
    }

    clickOnOnlineDemoNavTab(){
        cy.get('div ul [href="#Online-demo"]').scrollIntoView().click();
    }

    clickOnSupportNavTab(){
        cy.get('div ul [href="#Support-38-getting-help"]').scrollIntoView().click();
    }

    clickOnContributingNavTab(){
        cy.get('div ul [href="#Contributing-and-helping-out"]').scrollIntoView().click();
    }

    clickOnWhoUsesNavTab(){
        cy.get('div ul [href="#Who-uses-Redmine"]').scrollIntoView().click();
    }

    clickOnRedmineBooksNavTab(){
        cy.get('div ul [href="#Redmine-books"]').scrollIntoView().click();
    }


    verifyFeaturesNavTab(){
        cy.get('[id="content"] h2').eq(0).should('be.visible');
    }

    verifyDocumentationNavTab(){
        cy.get('[id="content"] h2').eq(1).should('be.visible');
    }

    verifyOnlineDemoNavTab(){
        cy.get('[id="content"] h2').eq(2).should('be.visible');
    }

    verifySupportNavTab(){
        cy.get('[id="content"] h2').eq(3).should('be.visible');
    }

    verifyContributingNavTab(){
        cy.get('[id="content"] h2').eq(4).should('be.visible');
    }

    verifyWhoUsesNavTab(){
        cy.get('[id="content"] h2').eq(5).should('be.visible');
    }

    verifyRedmineBooksNavTab(){
        cy.get('[id="content"] h2').eq(6).should('be.visible');
    }

    clickBottomRightNavMenuHomeTab(){
        cy.get('[href="/"]').eq(1).click();
    }

    clickBottomRightNavMenuIndexByNameTab(){
        cy.get('[href="/projects/redmine/wiki/index"]').click();
    }

    clickBottomRightNavMenuIndexByDateTab(){
        cy.get('[href="/projects/redmine/wiki/date_index"]').click();
    }

    verifyBottomRightMenuHomeTab(){
        cy.get('div h1').eq(1).should('have.text', 'Redmine¶');
    }

    verifyBottomRightNavMenuIndexByNameTab(){
        cy.get('div h2').should('have.text', 'Оглавление');
    }

    verifyBottomRightNavMenuIndexByDateTab(){
        cy.get('div h2').should('have.text', 'История страниц');
    }
}

export default new RedmineWikiPage()