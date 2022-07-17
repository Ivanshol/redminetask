/// <reference types="cypress" />

const { should } = require("chai")
import RedminePage from './page/RedminePage';
import RedmineProjectsPage from './page/RedmineProjectsPage';

context('Redmine', () => {

    beforeEach(() => {
      cy.visit('https://www.redmine.org/')
    })

    it('Should test upper navigation menu tabs', () => {

        RedminePage.clickUpperHomeButton();
        RedminePage.verifyHomePageURL().should('eq', 'https://www.redmine.org/');
        RedminePage.clickUpperProjectsButton();
        RedmineProjectsPage.verifyProjectsPageURL().should('eq', 'https://www.redmine.org/projects');

        })

    it('Should test the main navigation tabs ', () => {

        RedminePage.clickMainNavOverviewTab();
        cy.get('[id="content"] h2').should('have.text', 'Overview');

        RedminePage.clickMainNavDownloadTab();
        cy.get('[class="wiki wiki-page"] h1').should('have.text', 'Download¶');

        RedminePage.clickMainNavActivityTab();
        cy.get('[id="content"] h2').should('have.text', 'Activity');

        RedminePage.clickMainNavRoadmapTab();
        cy.get('[id="content"] h2').should('have.text', 'Roadmap');
        
        RedminePage.clickMainNavIssuesTab();
        cy.get('[id="content"] h2').should('have.text', 'Issues');

        RedminePage.clickMainNavNewsTab();
        cy.get('[id="content"] h2').eq(1).should('have.text', 'News');

        RedminePage.clickMainNavWikiTab();
        cy.get('[id="content"] h2').eq(0).should('have.text', 'Features¶');

        RedminePage.clickMainNavForumsTab();
        cy.get('[id="content"] h2').should('have.text', 'Forums');

        RedminePage.clickMainNavRepositoryTab();
        cy.get('[id="content"] h3').should('have.text', 'Latest revisions');

        })
})