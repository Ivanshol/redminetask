class RedmineOverviewPage{
    filterIssuesByDefect(){
        cy.get('[href="/projects/redmine/issues?set_filter=1&tracker_id=1"]').click();
    }

    filterIssuesByFeature(){
        cy.get('[href="/projects/redmine/issues?set_filter=1&tracker_id=2"]').click();
    }

    filterIssuesByPatch(){
        cy.get('[href="/projects/redmine/issues?set_filter=1&tracker_id=3"]').click();
    }

    filterIssuesByAllQuestions(){
        cy.get('[href="/projects/redmine/issues?set_filter=1"]').click();
    }

}

export default new RedmineOverviewPage()