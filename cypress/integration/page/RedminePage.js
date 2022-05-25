import cypress from "cypress";

class RedminePage{

    clickUpperHomeButton(){
        cy.get('[class="home"]').click();
        cy.url().should('eq', 'https://www.redmine.org/');
    }

    clickUpperProjectsButton(){
        cy.get('[class="projects"]').click();
        cy.url().should('eq', 'https://www.redmine.org/projects');
    }

    clickUpperHelpButton(){
    cy.get('[class="help"]').click();
    cy.url().should('eq', 'https://www.redmine.org/guide');
    }

    negativeCheckLoginFunction(){ 
        cy.get('[class="login"]').click();
        cy.url().should('eq', 'https://www.redmine.org/login');
        cy.get('#username').click().type('Incorrect input');
        cy.get('#password').click().type('Incorrect input');
        cy.get('[type="submit"]').click();
        cy.get('[class="flash error"]').should('be.visible');
    }

    checkSignUpFunctionWithEmptyInputs(){
        cy.get('[class="register"]').click();
        cy.url().should('eq', 'https://www.redmine.org/account/register');
        cy.get('[type="submit"]').click();
        cy.get('#errorExplanation').should('be.visible');
        cy.get('[id="errorExplanation"] ul li').eq(0).should('have.text', 'Пользователь не может быть пустым');
        cy.get('[id="errorExplanation"] ul li').eq(1).should('have.text', 'Имя не может быть пустым');
        cy.get('[id="errorExplanation"] ul li').eq(2).should('have.text', 'Фамилия не может быть пустым');
        cy.get('[id="errorExplanation"] ul li').eq(3).should('have.text', 'Email не может быть пустым');
        cy.get('[id="errorExplanation"] ul li').eq(4).should('have.text', 'Пароль недостаточной длины (не может быть меньше 4 символа)');
    }

    checkFeaturesWikiNavTab(){
        cy.get('ul [href="#Features"]').click();
        cy.get('[id="content"] h2').eq(0).should('be.visible');
    }

    checkDocumentationWikiNavTab(){
        cy.get('div ul [href="#Documentation"]').scrollIntoView().click();
        cy.get('[id="content"] h2').eq(1).should('be.visible');
    }

    checkOnlineDemoWikiNavTab(){
        cy.get('div ul [href="#Online-demo"]').scrollIntoView().click();
        cy.get('[id="content"] h2').eq(2).should('be.visible');
    }
    
    checkSupportWikiNavTab(){
        cy.get('div ul [href="#Support-38-getting-help"]').scrollIntoView().click();
        cy.get('[id="content"] h2').eq(3).should('be.visible');
    }

    checkContributingWikiNavTab(){
        cy.get('div ul [href="#Contributing-and-helping-out"]').scrollIntoView().click();
        cy.get('[id="content"] h2').eq(4).should('be.visible');
    }

    checkWhoUsesWikiNavTab(){
        cy.get('div ul [href="#Who-uses-Redmine"]').scrollIntoView().click();
        cy.get('[id="content"] h2').eq(5).should('be.visible');
    }

    checkRedmineBooksWikiNavTab(){
        cy.get('div ul [href="#Redmine-books"]').scrollIntoView().click();
        cy.get('[id="content"] h2').eq(6).should('be.visible');
    }

    testSearchFunction(){
        cy.get('#q').click().type('Redmine').type('{enter}');
        cy.url().should('include', 'q=Redmine');
        cy.get('[class="description"]').eq(0).should('include', 'Redmine')
    }


    checkFilteringByDefect(){  
    cy.get('[href="/projects/redmine"]').click();
    cy.get('[href="/projects/redmine/issues?set_filter=1&tracker_id=1"]').click();
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/issues?set_filter=1&tracker_id=1');
    }

    checkFilteringByFeature(){
    cy.get('[href="/projects/redmine"]').click();
    cy.get('[href="/projects/redmine/issues?set_filter=1&tracker_id=2"]').click();
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/issues?set_filter=1&tracker_id=2');
    }

    checkFilteringByPatch(){  
    cy.get('[href="/projects/redmine"]').click();
    cy.get('[href="/projects/redmine/issues?set_filter=1&tracker_id=3"]').click();
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/issues?set_filter=1&tracker_id=3');
    }

    checkFilteringByAllQuestions(){
    cy.get('[href="/projects/redmine"]').click();
    cy.get('[href="/projects/redmine/issues?set_filter=1"]').click();
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/issues?set_filter=1');
    }

    checkResourcesNavGuideTab(){
    cy.get('[href="/projects/redmine/wiki/Guide"]').eq(0).click();
    cy.get('div h1').eq(1).should('have.text', 'Redmine guide¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/Guide');
    }

    checkResourcesNavDevGuideTab(){
    cy.get('[href="/projects/redmine/wiki/Developer_Guide"]').click();
    cy.get('div h2').should('have.text', 'Developer guide¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/Developer_Guide');
    }

    checkResourcesNavChangelogTab(){
    cy.get('[href="/projects/redmine/wiki/Changelog"]').click();
    cy.get('div h1').eq(1).should('have.text', 'Changelog¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/Changelog');
    }

    checkResourcesNavSecurityTab(){
    cy.get('[href="/projects/redmine/wiki/Security_Advisories"]').eq(0).click();
    cy.get('div h1').eq(1).should('have.text', 'Redmine Security Advisories¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/Security_Advisories');
    }

    checkResourcesNavHowToTab(){
    cy.get('[href="/projects/redmine/wiki/HowTos"]').click();
    cy.get('div h1').eq(1).should('have.text', 'HowTos¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/HowTos');
    }

    checkResourcesNavThemeListTab(){
    cy.get('[href="/projects/redmine/wiki/Theme_List"]').click();
    cy.get('div h1').eq(1).should('have.text', 'Redmine theme list¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/Theme_List');
    }

    checkResourcesNavPrivacyPolicyTab(){
    cy.get('[href="/projects/redmine/wiki/PrivacyPolicy"]').click();
    cy.get('div h1').eq(1).should('have.text', 'redmine.org privacy policy¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/PrivacyPolicy');
    }

    checkResourcesNavPluginsTab(){
    cy.get('[href="/plugins"]').click();
    cy.get('div h2').eq(0).should('have.text', 'Plugins Directory');
    cy.url().should('eq', 'https://www.redmine.org/plugins');
    }

    checkWikiPageNavHome(){
    cy.get('[href="/"]').eq(1).click();
    cy.url().should('eq', 'https://www.redmine.org/');
    cy.get('div h1').eq(1).should('have.text', 'Redmine¶');
    }

    checkWikiPageNavIndexByName(){
    cy.get('[href="/projects/redmine/wiki/index"]').click();
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/index');
    cy.get('div h2').should('have.text', 'Оглавление');
    }

    checkWikiPageNavIndexByDate(){
    cy.get('[href="/projects/redmine/wiki/date_index"]').click();
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/date_index');
    cy.get('div h2').should('have.text', 'История страниц');
    }

    checkRepositoryBranchFolder(){
    cy.get('[href="/projects/redmine/repository"]').click();
    cy.get('[href="/projects/redmine/repository/show/branches"]').click();
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/repository/show/branches');
    }

    checkRepositorySandboxFolder(){
    cy.get('[href="/projects/redmine/repository"]').eq(1).click();
    cy.get('[href="/projects/redmine/repository/show/sandbox"]').click();
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/repository/show/sandbox');
    }

    checkRepositoryTagsFolder(){
    cy.get('[href="/projects/redmine/repository"]').eq(1).click();
    cy.get('[href="/projects/redmine/repository/show/tags"]').click();
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/repository/show/tags');
    }

    checkRepositoryTrunkFolder(){
    cy.get('[href="/projects/redmine/repository"]').eq(1).click();
    cy.get('[href="/projects/redmine/repository/show/trunk"]').click();
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/repository/show/trunk');
    }

    checkMainNavOverviewTab(){
    cy.get('[href="/projects/redmine"]').click();
    cy.get('[id="content"] h2').should('have.text', 'Обзор');
    }

    checkMainNavDownloadTab(){  
    cy.get('[href="/projects/redmine/wiki/Download"]').eq(0).click();
    cy.get('[class="wiki wiki-page"] h1').should('have.text', 'Download¶');
    }

    checkMainNavActivityTab(){   
    cy.get('[href="/projects/redmine/activity"]').click();
    cy.get('[id="content"] h2').should('have.text', 'Действия');
    }

    checkMainNavRoadmapTab(){
    cy.get('[href="/projects/redmine/roadmap"]').click();
    cy.get('[id="content"] h2').should('have.text', 'Оперативный план');    
    }

    checkMainNavIssuesTab(){
    cy.get('[href="/projects/redmine/issues"]').click();
    cy.get('[id="content"] h2').should('have.text', 'Задачи');
    }

    checkMainNavNewsTab(){
    cy.get('[href="/projects/redmine/news"]').click();
    cy.get('[id="content"] h2').eq(1).should('have.text', 'Новости');
    }

    checkMainNavWikiTab(){
    cy.get('[href="/projects/redmine/wiki"]').click();
    cy.get('[id="content"] h2').eq(0).should('have.text', 'Features¶');
    }

    checkMainNavForumsTab(){
    cy.get('[href="/projects/redmine/boards"]').click();
    cy.get('[id="content"] h2').should('have.text', 'Форумы');
    }

    checkMainNavRepositoryTab(){
    cy.get('[href="/projects/redmine/repository"]').click();
    cy.get('[id="content"] h3').should('have.text', 'Последние редакции');
    }

    checkAllRevisionsTab(){
    cy.get('[href="/projects/redmine/repository"]').click();
    cy.get('[href="/projects/redmine/repository/revisions"]').click();
    cy.get('tr th').eq(0).should('have.text', '#');
    cy.get('tr th').eq(3).should('have.text', 'Дата');
    cy.get('tr th').eq(4).should('have.text', 'Автор');
    }

    checkStatisticsInRepository(){
    cy.get('[href="/projects/redmine/repository"]').click();
    cy.get('[href="/projects/redmine/repository/statistics"]').click();
    cy.get('[class="mainTitle"]').eq(0).should('have.text', 'Подань на місяць');
    cy.get('[class="mainTitle"]').eq(1).should('have.text', 'Подань на користувача');
    }
}

export default new RedminePage()