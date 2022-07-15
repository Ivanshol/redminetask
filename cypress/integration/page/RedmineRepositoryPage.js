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

    goToAllRevisions(){
        cy.get('[href="/projects/redmine/repository/revisions"]').click();
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