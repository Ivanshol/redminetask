
class RedminePage{

    clickUpperHomeButton(){
        cy.get('[class="home"]').click();
    }

    verifyHomePageURL(){
        return cy.url().should('eq', 'https://www.redmine.org/');
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
        return cy.url();
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

    goToRepository(){
    cy.get('[href="/projects/redmine/repository"]').click();
    }

    clickMainNavOverviewTab(){
    cy.get('[href="/projects/redmine"]').click();
    }

    clickMainNavDownloadTab(){  
    cy.get('[href="/projects/redmine/wiki/Download"]').eq(0).click();
    }

    clickMainNavActivityTab(){   
    cy.get('[href="/projects/redmine/activity"]').click();
    }

    clickMainNavRoadmapTab(){
    cy.get('[href="/projects/redmine/roadmap"]').click();   
    }

    clickMainNavIssuesTab(){
    cy.get('[href="/projects/redmine/issues"]').click();
    }

    clickMainNavNewsTab(){
    cy.get('[href="/projects/redmine/news"]').click();
    }

    clickMainNavWikiTab(){
    cy.get('[href="/projects/redmine/wiki"]').click();
    }

    clickMainNavForumsTab(){
    cy.get('[href="/projects/redmine/boards"]').click();
    }

    clickMainNavRepositoryTab(){
    cy.get('[href="/projects/redmine/repository"]').click();
    }
    

}

export default new RedminePage()