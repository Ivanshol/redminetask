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
      RedminePage.verifyHomePageURL().should('eq', 'https://www.redmine.org/');
      RedminePage.clickUpperProjectsButton();
      RedmineProjectsPage.verifyProjectsPageURL().should('eq', 'https://www.redmine.org/projects');
      })

      it('Should negative test login function with incorrect data', () => {
      RedminePage.clickSignInButton();
      RedmineLoginPage.verifyLoginPageURL().should('eq', 'https://www.redmine.org/login');;
      RedmineLoginPage.typeIncorrectDataToUsernameField();
      RedmineLoginPage.typeIncorrectDataToPasswordField();
      RedmineLoginPage.clickSignInSubmitButton();
      RedmineLoginPage.verifyThatTheErrorIsVisible().should('be.visible');
        })
  
      it('Should negative test account creation function with empty inputs', () => {
      RedminePage.clickSignUpButton();
      RedmineSignUpPage.verifySignUpPageURL().should('eq', 'https://www.redmine.org/account/register');
      RedmineSignUpPage.clickSubmitButton();
      RedmineSignUpPage.verifyThatErrorIsVisibleWhenSigningUpWithEmptyInputs().should('be.visible');
      cy.get('[id="errorExplanation"] ul li').eq(0).should('have.text', 'Пользователь не может быть пустым');
      cy.get('[id="errorExplanation"] ul li').eq(1).should('have.text', 'Имя не может быть пустым');
      cy.get('[id="errorExplanation"] ul li').eq(2).should('have.text', 'Фамилия не может быть пустым');
      cy.get('[id="errorExplanation"] ul li').eq(3).should('have.text', 'Email не может быть пустым');
      cy.get('[id="errorExplanation"] ul li').eq(4).should('have.text', 'Пароль недостаточной длины (не может быть меньше 4 символа)');
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

      it('Should test the search function', () => {
      RedminePage.inputSearchText();
      RedminePage.verifySearchFunction().should('include', 'q=Redmine');
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
    
      it('Should test the wiki navigation menu ', () => {
      RedmineWikiPage.clickBottomRightNavMenuHomeTab();
      cy.get('div h1').eq(1).should('have.text', 'Redmine¶');

      RedmineWikiPage.clickBottomRightNavMenuIndexByNameTab();
      cy.get('div h2').should('have.text', 'Оглавление');

      RedmineWikiPage.clickBottomRightNavMenuIndexByDateTab();
      cy.get('div h2').should('have.text', 'История страниц');

      })

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

      it('Should test the overiview navigation tab ', () => {
      RedminePage.clickMainNavOverviewTab();
      cy.get('[id="content"] h2').should('have.text', 'Обзор');
        })

      it('Should test the download navigation tab ', () => {
      RedminePage.clickMainNavDownloadTab();
      cy.get('[class="wiki wiki-page"] h1').should('have.text', 'Download¶');
        })

      it('Should test the activity navigation tab ', () => {
      RedminePage.clickMainNavActivityTab();
      cy.get('[id="content"] h2').should('have.text', 'Действия');
        })

      it('Should test the roadmap navigation tab ', () => {
      RedminePage.clickMainNavRoadmapTab();
      cy.get('[id="content"] h2').should('have.text', 'Оперативный план');      
        })

      it('Should test the issues navigation tab ', () => {
      RedminePage.clickMainNavIssuesTab();
      cy.get('[id="content"] h2').should('have.text', 'Задачи');
        })

      it('Should test the news navigation tab ', () => {
      RedminePage.clickMainNavNewsTab();
      cy.get('[id="content"] h2').eq(1).should('have.text', 'Новости');
        })

      it('Should test the wiki navigation tab ', () => {
      RedminePage.clickMainNavWikiTab();
      cy.get('[id="content"] h2').eq(0).should('have.text', 'Features¶');
        })

      it('Should test the forums navigation tab ', () => {
      RedminePage.clickMainNavForumsTab();
      cy.get('[id="content"] h2').should('have.text', 'Форумы');
        })

      it('Should test the repository navigation tab ', () => {
      RedminePage.clickMainNavRepositoryTab();
      cy.get('[id="content"] h3').should('have.text', 'Последние редакции');
        })

      it('Should test the all revisions tab in repository ', () => {
      RedminePage.goToRepository();
      RedmineRepositoryPage.goToAllRevisions();
      cy.get('tr th').eq(0).should('have.text', '#');
      cy.get('tr th').eq(3).should('have.text', 'Дата');
      cy.get('tr th').eq(4).should('have.text', 'Автор');
        })

    })
})