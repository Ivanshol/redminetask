/// <reference types="cypress" />

const { should } = require("chai")
import RedminePage from './page/RedminePage';
import RedmineLoginPage from './page/RedmineLoginPage';
import RedmineOverviewPage from './page/RedmineOverviewPage';
import RedmineProjectsPage from './page/RedmineProjectsPage';
import RedmineRepositoryPage from './page/RedmineRepositoryPage';
import RedmineSignUpPage from './page/RedmineSignUpPage';
import RedmineWikiPage from './page/RedmineWikiPage';

context('Redmine', () => {

    beforeEach(() => {
      cy.visit('https://www.redmine.org/')
    })
  
    describe('Redmine website', () => {

      it('Should test upper navigation menu tabs', () => {
      RedminePage.clickUpperHomeButton();
      RedminePage.verifyHomePageURL();
      RedminePage.clickUpperProjectsButton();
      RedmineProjectsPage.verifyProjectsPageURL();
      })

      it('Should negative test login function with incorrect data', () => {
      RedminePage.clickSignInButton();
      RedmineLoginPage.verifyLoginPageURL();
      RedmineLoginPage.typeIncorrectDataToUsernameField();
      RedmineLoginPage.typeIncorrectDataToPasswordField();
      RedmineLoginPage.clickSignInSubmitButton();
      RedmineLoginPage.verifyThatTheErrorIsVisible();
        })
  
      it('Should negative test account creation function with empty inputs', () => {
      RedminePage.clickSignUpButton();
      RedmineSignUpPage.verifySignUpPageURL();
      RedmineSignUpPage.clickSubmitButton();
      RedmineSignUpPage.verifyThatErrorIsVisibleWhenSigningUpWithEmptyInputs();
      RedmineSignUpPage.verifyErrorMessages();
        })

      it('Should test the wiki tab on-page navigation menu', () => {
      RedmineWikiPage.clickOnFeaturesNavTab();
      RedmineWikiPage.verifyFeaturesNavTab();

      RedmineWikiPage.clickOnDocumentationNavTab();
      RedmineWikiPage.verifyDocumentationNavTab();

      RedmineWikiPage.clickOnOnlineDemoNavTab();
      RedmineWikiPage.verifyOnlineDemoNavTab();

      RedmineWikiPage.clickOnSupportNavTab();
      RedmineWikiPage.verifySupportNavTab();

      RedmineWikiPage.clickOnContributingNavTab();
      RedmineWikiPage.verifyContributingNavTab();

      RedmineWikiPage.clickOnWhoUsesNavTab();
      RedmineWikiPage.verifyWhoUsesNavTab();

      RedmineWikiPage.clickOnRedmineBooksNavTab();
      RedmineWikiPage.verifyRedmineBooksNavTab();
        })

      it('Should test the search function', () => {
      RedminePage.inputSearchText();
      RedminePage.verifySearchFunction();
        })

      it('Should test filtering issues by overwiev tab ', () => {
      RedminePage.goToOverviewTab();
      RedmineOverviewPage.filterIssuesByDefect();
      RedmineOverviewPage.verifyFilteringByDefect();

      RedminePage.goToOverviewTab();
      RedmineOverviewPage.filterIssuesByFeature();
      RedmineOverviewPage.verifyFilteringByFeature();

      RedminePage.goToOverviewTab();
      RedmineOverviewPage.filterIssuesByPatch();
      RedmineOverviewPage.verifyFilteringByPatch();

      RedminePage.goToOverviewTab();
      RedmineOverviewPage.filterIssuesByAllQuestions();
      RedmineOverviewPage.verifyFilteringByAllQuestions();
        })

      it('Should test the resources navigation menu ', () => {
      RedminePage.clickResourcesNavGuideTab()
      RedminePage.verifyResourcesNavGuideTab();

      RedminePage.clickResourcesNavDevGuideTab();
      RedminePage.verifyResourcesNavDevGuideTab();

      RedminePage.clickResourcesNavChangelogTab();
      RedminePage.verifyResourcesNavChangelogTab();

      RedminePage.clickResourcesNavSecurityTab();
      RedminePage.verifyResourcesNavSecurityTab();

      RedminePage.clickResourcesNavHowToTab();
      RedminePage.verifyResourcesNavHowToTab();

      RedminePage.clickResourcesNavThemeListTab();
      RedminePage.verifyResourcesNavThemeListTab();

      RedminePage.clickResourcesNavPrivacyPolicyTab();
      RedminePage.verifyResourcesNavPrivacyPolicyTab();

      RedminePage.clickResourcesNavPluginsTab();
      RedminePage.verifyResourcesNavPluginsTab();
        })
    
      it('Should test the wiki navigation menu ', () => {
      RedmineWikiPage.clickBottomRightNavMenuHomeTab();
      RedmineWikiPage.verifyBottomRightMenuHomeTab();

      RedmineWikiPage.clickBottomRightNavMenuIndexByNameTab();
      RedmineWikiPage.verifyBottomRightNavMenuIndexByNameTab();

      RedmineWikiPage.clickBottomRightNavMenuIndexByDateTab();
      RedmineWikiPage.verifyBottomRightNavMenuIndexByDateTab();

        })

      it('Should test the wiki repository menu ', () => {
      RedminePage.goToRepository();
      RedmineRepositoryPage.goToBranchFolder();
      RedmineRepositoryPage.verifyOpeningOfTheBranchFolder();

      RedmineRepositoryPage.goToRepositoryFromFolder();
      RedmineRepositoryPage.goToSandboxFolder();
      RedmineRepositoryPage.verifyOpeningOfTheSandboxFolder();

      RedmineRepositoryPage.goToRepositoryFromFolder();
      RedmineRepositoryPage.goToTagsFolder();
      RedmineRepositoryPage.verifyOpeningOfTheTagsFolder();

      RedmineRepositoryPage.goToRepositoryFromFolder();
      RedmineRepositoryPage.goToTrunkFolder();
      RedmineRepositoryPage.verifyOpeningOfTheTrunkFolder();
        })

      it('Should test the overiview navigation tab ', () => {
      RedminePage.clickMainNavOverviewTab();
      RedminePage.checkMainNavOverviewTab();
        })

      it('Should test the download navigation tab ', () => {
      RedminePage.clickMainNavDownloadTab();
      RedminePage.checkMainNavDownloadTab();
        })

      it('Should test the activity navigation tab ', () => {
      RedminePage.clickMainNavActivityTab();
      RedminePage.checkMainNavActivityTab();
        })

      it('Should test the roadmap navigation tab ', () => {
      RedminePage.clickMainNavRoadmapTab();  
      RedminePage.checkMainNavRoadmapTab();
        })

      it('Should test the issues navigation tab ', () => {
      RedminePage.clickMainNavIssuesTab();
      RedminePage.checkMainNavIssuesTab();
        })

      it('Should test the news navigation tab ', () => {
      RedminePage.clickMainNavNewsTab();
      RedminePage.checkMainNavNewsTab();
        })

      it('Should test the wiki navigation tab ', () => {
      RedminePage.clickMainNavWikiTab();
      RedminePage.checkMainNavWikiTab();
        })

      it('Should test the forums navigation tab ', () => {
      RedminePage.clickMainNavForumsTab();
      RedminePage.checkMainNavForumsTab();
        })

      it('Should test the repository navigation tab ', () => {
      RedminePage.clickMainNavRepositoryTab();
      RedminePage.checkMainNavRepositoryTab();
        })

      it('Should test the all revisions tab in repository ', () => {
      RedminePage.goToRepository();
      RedmineRepositoryPage.goToAllRevisions();
      RedmineRepositoryPage.verifyAllRevisionsPage();
        })

      it('Should test the statistics page ', () => {
      RedminePage.goToRepository();
      RedmineRepositoryPage.goToStatistics();
      RedmineRepositoryPage.verifyStatisticsPage();
        })

    })
})