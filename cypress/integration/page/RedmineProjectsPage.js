class RedmineProjectsPage{
    verifyProjectsPageURL(){
        return cy.url();
    }
}

export default new RedmineProjectsPage()