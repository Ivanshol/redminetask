class RedmineRepositoryPage{
    goToRepositoryFromFolder(){
        cy.get('[href="/projects/redmine/repository"]').eq(1).click();    
    }

    goToBranchFolder(){
        cy.get('[href="/projects/redmine/repository/show/branches"]').click();
    }

    goToSandboxFolder(){
        cy.get('[href="/projects/redmine/repository/show/sandbox"]').click();
    }

    goToTagsFolder(){
        cy.get('[href="/projects/redmine/repository/show/tags"]').click();
    }

    goToTrunkFolder(){
        cy.get('[href="/projects/redmine/repository/show/trunk"]').click();
    }

    verifyOpeningOfTheBranchFolder(){
        cy.url().should('eq', 'https://www.redmine.org/projects/redmine/repository/show/branches');
    }

    verifyOpeningOfTheSandboxFolder(){
        cy.url().should('eq', 'https://www.redmine.org/projects/redmine/repository/show/sandbox');
    }

    verifyOpeningOfTheTagsFolder(){
        cy.url().should('eq', 'https://www.redmine.org/projects/redmine/repository/show/tags');
    }

    verifyOpeningOfTheTrunkFolder(){
        cy.url().should('eq', 'https://www.redmine.org/projects/redmine/repository/show/trunk');
    }

    goToAllRevisions(){
        cy.get('[href="/projects/redmine/repository/revisions"]').click();
    }

    verifyAllRevisionsPage(){
        cy.get('tr th').eq(0).should('have.text', '#');
        cy.get('tr th').eq(3).should('have.text', 'Дата');
        cy.get('tr th').eq(4).should('have.text', 'Автор');
    }

    goToStatistics(){
        cy.get('[href="/projects/redmine/repository/statistics"]').click();
    }

    verifyStatisticsPage(){
        cy.get('[class="mainTitle"]').eq(0).should('have.text', 'Подань на місяць');
        cy.get('[class="mainTitle"]').eq(1).should('have.text', 'Подань на користувача');
    }

}

export default new RedmineRepositoryPage()