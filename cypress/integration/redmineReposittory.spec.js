/// <reference types="cypress" />

const { should } = require("chai")
import RedminePage from './page/RedminePage';
import RedmineRepositoryPage from './page/RedmineRepositoryPage';

context('Redmine repository', () => {

    beforeEach(() => {
      cy.visit('https://www.redmine.org/')
    })

    describe('Redmine repository wiki menu', () => {

    it('Should test the wiki repository menu ', () => {

        RedminePage.goToRepository();
        RedmineRepositoryPage.goToBranchFolder();
        cy.url().should('include', 'branches');
  
        RedmineRepositoryPage.goToRepositoryFromFolder();
        RedmineRepositoryPage.goToSandboxFolder();
        cy.url().should('include', 'sandbox');
  
        RedmineRepositoryPage.goToRepositoryFromFolder();
        RedmineRepositoryPage.goToTagsFolder();
        cy.url().should('include', 'tags');
  
        RedmineRepositoryPage.goToRepositoryFromFolder();
        RedmineRepositoryPage.goToTrunkFolder();
        cy.url().should('include', 'trunk');
        
        })
          
      it('Should test the revisions tab in repository ', () => {

        RedminePage.goToRepository();
        RedmineRepositoryPage.goToAllRevisions();
        cy.get('tr th').eq(0).should('have.text', '#');
        cy.get('tr th').eq(3).should('have.text', 'Date');
        cy.get('tr th').eq(4).should('have.text', 'Author');
            
        })
    })
  
})
