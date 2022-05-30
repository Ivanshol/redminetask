class RedmineProjectsPage{
    verifyProjectsPageURL(){
        cy.url().should('eq', 'https://www.redmine.org/projects');
    }
}

export default new RedmineProjectsPage()