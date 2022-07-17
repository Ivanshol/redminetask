/// <reference types="cypress" />

const { should } = require("chai")
import RedminePage from './page/RedminePage';
import RedmineWikiPage from './page/RedmineWikiPage';

context('Redmine navigation', () => {

    beforeEach(() => {
      cy.visit('https://www.redmine.org/')
    })

    describe('Redmine on-page navigation', () => {
      it('Should test the wiki navigation menu ', () => {

        RedmineWikiPage.clickBottomRightNavMenuHomeTab();
        cy.get('div h1').eq(1).should('have.text', 'Redmine¶');
      
        RedmineWikiPage.clickBottomRightNavMenuIndexByNameTab();
        cy.get('div h2').should('have.text', 'Index by title');
      
        RedmineWikiPage.clickBottomRightNavMenuIndexByDateTab();
        cy.get('div h2').should('have.text', 'Index by date');
      
        })

      it('Should test the wiki tab on-page navigation menu', () => {

        RedmineWikiPage.clickOnFeaturesNavTab();
        RedmineWikiPage.verifyTheNavTab(0).should('be.visible');
      
        RedmineWikiPage.clickOnDocumentationNavTab();
        RedmineWikiPage.verifyTheNavTab(1).should('be.visible');
      
        RedmineWikiPage.clickOnOnlineDemoNavTab();
        RedmineWikiPage.verifyTheNavTab(2).should('be.visible');
      
        RedmineWikiPage.clickOnSupportNavTab();
        RedmineWikiPage.verifyTheNavTab(3).should('be.visible');
      
        RedmineWikiPage.clickOnContributingNavTab();
        RedmineWikiPage.verifyTheNavTab(4).should('be.visible');
      
        RedmineWikiPage.clickOnWhoUsesNavTab();
        RedmineWikiPage.verifyTheNavTab(5).should('be.visible');
      
        RedmineWikiPage.clickOnRedmineBooksNavTab();
        RedmineWikiPage.verifyTheNavTab(6).should('be.visible');
      
        })

      it('Should test the resources navigation menu ', () => {
        
        RedminePage.clickResourcesNavGuideTab()
        cy.get('div h1').eq(1).should('have.text', 'Redmine guide¶');
      
        RedminePage.clickResourcesNavDevGuideTab();
        cy.get('div h2').should('have.text', 'Developer guide¶');
      
        RedminePage.clickResourcesNavChangelogTab();
        cy.get('div h1').eq(1).should('have.text', 'Changelog¶');
      
        RedminePage.clickResourcesNavSecurityTab();
        cy.get('div h1').eq(1).should('have.text', 'Redmine Security Advisories¶');
      
        RedminePage.clickResourcesNavHowToTab();
        cy.get('div h1').eq(1).should('have.text', 'HowTos¶');
      
        RedminePage.clickResourcesNavThemeListTab();
        cy.get('div h1').eq(1).should('have.text', 'Redmine theme list¶');
      
        RedminePage.clickResourcesNavPrivacyPolicyTab();
        cy.get('div h1').eq(1).should('have.text', 'redmine.org privacy policy¶');
      
        RedminePage.clickResourcesNavPluginsTab();
        cy.get('div h2').eq(0).should('have.text', 'Plugins Directory');
        })
      
      })
})
