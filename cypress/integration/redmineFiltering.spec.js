/// <reference types="cypress" />

const { should } = require("chai")
import RedminePage from './page/RedminePage';
import RedmineOverviewPage from './page/RedmineOverviewPage';

context('Redmine', () => {

    beforeEach(() => {
      cy.visit('https://www.redmine.org/')
    })
    
    it('Should test filtering issues by overwiev tab ', () => {

        RedminePage.goToOverviewTab();
        RedmineOverviewPage.filterIssuesByDefect();
        cy.url().should('eq', 'https://www.redmine.org/projects/redmine/issues?set_filter=1&tracker_id=1');
  
        RedminePage.goToOverviewTab();
        RedmineOverviewPage.filterIssuesByFeature();
        cy.url().should('eq', 'https://www.redmine.org/projects/redmine/issues?set_filter=1&tracker_id=2');
  
        RedminePage.goToOverviewTab();
        RedmineOverviewPage.filterIssuesByPatch();
        cy.url().should('eq', 'https://www.redmine.org/projects/redmine/issues?set_filter=1&tracker_id=3');
  
        RedminePage.goToOverviewTab();
        RedmineOverviewPage.filterIssuesByAllQuestions();
        cy.url().should('eq', 'https://www.redmine.org/projects/redmine/issues?set_filter=1');

    })
  
})