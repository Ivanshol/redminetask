/// <reference types="cypress" />

const { should } = require("chai")
import RedminePage from './page/RedminePage';

context('Redmine', () => {

    beforeEach(() => {
      cy.visit('https://www.redmine.org/')
    })
  
    describe('Redmine website', () => {

      it('Should test upper navigation menu tabs', () => {
      RedminePage.clickUpperHomeButton();
      RedminePage.clickUpperProjectsButton();
      RedminePage.clickUpperHelpButton();
        })

      it('Should negative test login function', () => {
      RedminePage.negativeCheckLoginFunction();
        })
  
      it('Should negative test account creation function with empty inputs', () => {
      RedminePage.checkSignUpFunctionWithEmptyInputs();
        })

      it('Should test the wiki tab on-page navigation menu', () => {
      RedminePage.checkFeaturesWikiNavTab();
      RedminePage.checkDocumentationWikiNavTab();
      RedminePage.checkOnlineDemoWikiNavTab();
      RedminePage.checkSupportWikiNavTab();
      RedminePage.checkContributingWikiNavTab();
      RedminePage.checkWhoUsesWikiNavTab();
      RedminePage.checkRedmineBooksWikiNavTab();
        })

      it('Should test the search function', () => {
      RedminePage.testSearchFunction();
        })

      it('Should test filtering issues by overwiev tab ', () => {
      RedminePage.checkFilteringByDefect();
      RedminePage.checkFilteringByFeature();
      RedminePage.checkFilteringByPatch();
      RedminePage.checkFilteringByAllQuestions();
        })

      it('Should test the resources navigation menu ', () => {
      RedminePage.checkResourcesNavGuideTab();
      RedminePage.checkResourcesNavDevGuideTab();
      RedminePage.checkResourcesNavChangelogTab();
      RedminePage.checkResourcesNavSecurityTab();
      RedminePage.checkResourcesNavHowToTab();
      RedminePage.checkResourcesNavThemeListTab();
      RedminePage.checkResourcesNavPrivacyPolicyTab();
      RedminePage.checkResourcesNavPluginsTab();
        })
    
      it('Should test the wiki navigation menu ', () => {
      RedminePage.checkWikiPageNavHome();
      RedminePage.checkWikiPageNavIndexByName();
      RedminePage.checkWikiPageNavIndexByDate();
        })

      it('Should test the wiki repository menu ', () => {
      RedminePage.checkRepositoryBranchFolder();
      RedminePage.checkRepositorySandboxFolder();
      RedminePage.checkRepositoryTagsFolder();
      RedminePage.checkRepositoryTrunkFolder();
        })

      it('Should test the overiview navigation tab ', () => {
      RedminePage.checkMainNavOverviewTab();
        })

      it('Should test the download navigation tab ', () => {
      RedminePage.checkMainNavDownloadTab();
        })

      it('Should test the activity navigation tab ', () => {
      RedminePage.checkMainNavActivityTab();
        })

      it('Should test the roadmap navigation tab ', () => {
      RedminePage.checkMainNavRoadmapTab();
        })

      it('Should test the issues navigation tab ', () => {
      RedminePage.checkMainNavIssuesTab();
        })

      it('Should test the news navigation tab ', () => {
      RedminePage.checkMainNavNewsTab();
        })

      it('Should test the wiki navigation tab ', () => {
      RedminePage.checkMainNavWikiTab();
        })

      it('Should test the forums navigation tab ', () => {
      RedminePage.checkMainNavForumsTab();
        })

      it('Should test the repository navigation tab ', () => {
      RedminePage.checkMainNavRepositoryTab();
        })

      it('Should test the all revisions tab in repository ', () => {
      RedminePage.checkAllRevisionsTab();
        })

      it('Should test the statistics page ', () => {
      RedminePage.checkStatisticsInRepository();
        })

    })
})