
class RedminePage{

    clickUpperHomeButton(){
        cy.get('[class="home"]').click();
    }

    verifyHomePageURL(){
        cy.url().should('eq', 'https://www.redmine.org/');
    }

    clickUpperProjectsButton(){
        cy.get('[class="projects"]').click();
    }


    clickSignInButton(){ 
        cy.get('[class="login"]').click();
    }

    clickSignUpButton(){
        cy.get('[class="register"]').click();
    }

    inputSearchText(){
        cy.get('#q').click().type('Redmine').type('{enter}');
    }
    verifySearchFunction(){
        cy.url().should('include', 'q=Redmine');
    }

    goToOverviewTab(){
    cy.get('[href="/projects/redmine"]').click(); 
    }

    clickResourcesNavGuideTab(){
    cy.get('[href="/projects/redmine/wiki/Guide"]').eq(0).click();  
    }
    
    clickResourcesNavDevGuideTab(){
    cy.get('[href="/projects/redmine/wiki/Developer_Guide"]').click();  
    }

    clickResourcesNavChangelogTab(){
    cy.get('[href="/projects/redmine/wiki/Changelog"]').click(); 
    }

    clickResourcesNavSecurityTab(){
    cy.get('[href="/projects/redmine/wiki/Security_Advisories"]').eq(0).click();  
    }

    clickResourcesNavHowToTab(){
    cy.get('[href="/projects/redmine/wiki/HowTos"]').click();  
    }
        
    clickResourcesNavThemeListTab(){
    cy.get('[href="/projects/redmine/wiki/Theme_List"]').click(); 
    }
    
    clickResourcesNavPrivacyPolicyTab(){
    cy.get('[href="/projects/redmine/wiki/PrivacyPolicy"]').click();  
    }
    
    clickResourcesNavPluginsTab(){
    cy.get('[href="/plugins"]').click();  
    }

    verifyResourcesNavGuideTab(){
    cy.get('div h1').eq(1).should('have.text', 'Redmine guide¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/Guide');
    }

    verifyResourcesNavDevGuideTab(){
    cy.get('div h2').should('have.text', 'Developer guide¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/Developer_Guide');
    }

    verifyResourcesNavChangelogTab(){
    cy.get('div h1').eq(1).should('have.text', 'Changelog¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/Changelog');
    }

    verifyResourcesNavSecurityTab(){
    cy.get('div h1').eq(1).should('have.text', 'Redmine Security Advisories¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/Security_Advisories');
    }

    verifyResourcesNavHowToTab(){
    cy.get('div h1').eq(1).should('have.text', 'HowTos¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/HowTos');
    }

    verifyResourcesNavThemeListTab(){
    cy.get('div h1').eq(1).should('have.text', 'Redmine theme list¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/Theme_List');
    }

    verifyResourcesNavPrivacyPolicyTab(){
    cy.get('div h1').eq(1).should('have.text', 'redmine.org privacy policy¶');
    cy.url().should('eq', 'https://www.redmine.org/projects/redmine/wiki/PrivacyPolicy');
    }

    verifyResourcesNavPluginsTab(){
    cy.get('div h2').eq(0).should('have.text', 'Plugins Directory');
    cy.url().should('eq', 'https://www.redmine.org/plugins');
    }

    goToRepository(){
    cy.get('[href="/projects/redmine/repository"]').click();
    }

    clickMainNavOverviewTab(){
    cy.get('[href="/projects/redmine"]').click();
    }

    checkMainNavOverviewTab(){
    cy.get('[id="content"] h2').should('have.text', 'Обзор');
    }

    clickMainNavDownloadTab(){  
    cy.get('[href="/projects/redmine/wiki/Download"]').eq(0).click();
    }

    checkMainNavDownloadTab(){  
    cy.get('[class="wiki wiki-page"] h1').should('have.text', 'Download¶');
    }

    clickMainNavActivityTab(){   
    cy.get('[href="/projects/redmine/activity"]').click();
    }

    checkMainNavActivityTab(){   
    cy.get('[id="content"] h2').should('have.text', 'Действия');
    }

    clickMainNavRoadmapTab(){
    cy.get('[href="/projects/redmine/roadmap"]').click();   
    }

    checkMainNavRoadmapTab(){
    cy.get('[id="content"] h2').should('have.text', 'Оперативный план');    
    }

    clickMainNavIssuesTab(){
    cy.get('[href="/projects/redmine/issues"]').click();
    }

    checkMainNavIssuesTab(){
    cy.get('[id="content"] h2').should('have.text', 'Задачи');
    }

    clickMainNavNewsTab(){
    cy.get('[href="/projects/redmine/news"]').click();
    }

    checkMainNavNewsTab(){
    cy.get('[id="content"] h2').eq(1).should('have.text', 'Новости');
    }

    clickMainNavWikiTab(){
    cy.get('[href="/projects/redmine/wiki"]').click();
    }

    checkMainNavWikiTab(){
    cy.get('[id="content"] h2').eq(0).should('have.text', 'Features¶');
    }

    clickMainNavForumsTab(){
    cy.get('[href="/projects/redmine/boards"]').click();
    }

    checkMainNavForumsTab(){
    cy.get('[id="content"] h2').should('have.text', 'Форумы');
    }

    clickMainNavRepositoryTab(){
    cy.get('[href="/projects/redmine/repository"]').click();
    }
    
    checkMainNavRepositoryTab(){
    cy.get('[id="content"] h3').should('have.text', 'Последние редакции');
    }

}

export default new RedminePage()