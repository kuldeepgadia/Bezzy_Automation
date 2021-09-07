Cypress.on('uncaught:exception', (err, runnable) => {
   return false;
 });
var custname="boss"+Math.floor(Math.random() * 10000);
var URL="https://bezzy-ms-web-stage.bezzy.com/";

let title = null;
//['Come say "hello!"', 'Live Discussions', 'Clinical Trials', 'Coping With COVID-19', 'Escape From MS', 'Symptoms', 'Personal Community', 'Wellness', 'Treatments', 'Daily Living', 'MS and Career'];
let subtitle = null;
let stageImgURL= null;
//const stageImgURL=['https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/welcome.png?ts=1614631727382','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/general.png?ts=1614631727362','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/clinical-trials.png?ts=1614631727372','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/covid.png?ts=1614631727371','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/inspiration.png?ts=1614631727392','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/symptoms.png?ts=1614631727372','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/personal-community.png?ts=1614631727397','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/wellness.png?ts=1614631727369','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/treatments.png?ts=1614631727369','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/daily-living.png?ts=1614631727363','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/ms-and-career.png?ts=1614631727396']
if(Cypress.config('baseUrl').indexOf("stage")>0){
title = ['Come say "hello!"', 'Live Discussions', 'Clinical Trials', 'Coping With COVID-19', 'Escape From MS', 'Symptoms', 'Personal Community', 'Wellness', 'Treatments', 'Daily Living', 'MS and Career'];
  subtitle=['Introduce yourself and share your story.', 'Nightly live chats and general discussion', 'Demystifying through shared experiences', 'Expert-led chats, updates, discussion', 'An MS-free zone', 'Cog fog, fatigue, spasticity, etc.', 'Family, friends, coworkers', 'Nutrition, fitness, alternative therapies', 'DMDs, stem cell therapy, etc.', 'Home services, transportation, hacks, aids', 'Working from home, insurance, disclosure'];
  stageImgURL=['https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/welcome.png?ts=1614631727382','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/general.png?ts=1614631727362','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/clinical-trials.png?ts=1614631727372','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/covid.png?ts=1614631727371','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/inspiration.png?ts=1614631727392','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/symptoms.png?ts=1614631727372','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/personal-community.png?ts=1614631727397','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/wellness.png?ts=1614631727369','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/treatments.png?ts=1614631727369','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/daily-living.png?ts=1614631727363','https://s3-us-west-2.amazonaws.com/together-admin-stage/stage/Group/msb/ms-and-career.png?ts=1614631727396'];
}else{
 title = ['Come say "hello!"', 'Live Discussions', 'Clinical Trials', 'Coping with COVID-19', 'Escape from MS', 'Symptoms', 'Personal Community', 'Wellness', 'Treatments', 'Daily Living', 'MS and Career'];
 
  subtitle=['Introduce yourself and share your story.', 'Sundays at 4pm PT and Mon-Thurs at 1pm PT', 'Demystifying through sharing', 'Expert-led chats, updates, discussion', 'An MS-free zone', 'Cog fog, fatigue, spasticity, etc.', 'Family, friends, coworkers', 'Nutrition, fitness, alternative therapies', 'DMDs, stem cell therapy, etc.', 'Home services, transportation, hacks, aids', 'Working from home, insurance, disclosure'];
   stageImgURL=['https://s3-us-west-2.amazonaws.com/together-admin-prod/prod/Group/msb/welcome.png?ts=1616647134146','https://s3-us-west-2.amazonaws.com/together-admin-prod/prod/Group/msb/general.png?ts=1616647134147','https://s3-us-west-2.amazonaws.com/together-admin-prod/prod/Group/msb/clinical-trials.png?ts=1616647134147','https://s3-us-west-2.amazonaws.com/together-admin-prod/prod/Group/msb/covid.png?ts=1616647134147','https://s3-us-west-2.amazonaws.com/together-admin-prod/prod/Group/msb/inspiration.png?ts=1616647134147','https://s3-us-west-2.amazonaws.com/together-admin-prod/prod/Group/msb/symptoms.png?ts=1616647134147','https://s3-us-west-2.amazonaws.com/together-admin-prod/prod/Group/msb/personal-community.png?ts=1616647134147','https://s3-us-west-2.amazonaws.com/together-admin-prod/prod/Group/msb/wellness.png?ts=1616647134147','https://s3-us-west-2.amazonaws.com/together-admin-prod/prod/Group/msb/treatments.png?ts=1616647134147','https://s3-us-west-2.amazonaws.com/together-admin-prod/prod/Group/msb/daily-living.png?ts=1616647134147','https://s3-us-west-2.amazonaws.com/together-admin-prod/prod/Group/msb/ms-and-career.png?ts=1616647134147'];
}



before( {
   viewportHeight: 768,
   viewportWidth: 1366,
 },() => {
   cy.visit(URL);
   cy.title().should('eq', 'MS Healthline');
   cy.wait(5000);

 })

 beforeEach(() => {
   cy.restoreLocalStorage();
 });
 
 afterEach(() => {
   cy.saveLocalStorage();
 });

describe.skip('Check for Sorry bout that',  {
   viewportHeight: 768,
   viewportWidth: 1366,
 }, () => {

it('Check for Sorry bout that', () => {
   cy.get('body').then(($body) => {
      // synchronously ask for the body's text
      // and do something based on whether it includes
      // another string
      if ($body.text().includes("Sorry 'bout that")) {
       console.log("found");
       cy.get('button > .alert-button-inner', { includeShadowDom: true }).click();
      } else {
         console.log("not found");
      }
    })
});

});

describe('Check top navigation bar',  {
   viewportHeight: 768,
   viewportWidth: 1366,
 }, () => {

   it('Check existance of community logo on top nav bar', () => {
    
      cy
      .get('.Bezzy_light')
      .find('.BezzyTopNav_BezzyTopNav__1Z7YQ')
      .find('.BezzyTopNav_BezzyTopNav_container__2lX_d')
      .find('.BezzyTopNav_BezzyTopNav_logo__2UXfN').find('img')
      .invoke('attr', 'src').should('contain', '/assets/msb/logo.svg'); 
     cy.request('https://bezzy-ms-web-stage.bezzy.com/assets/msb/logo.svg').then((resp) => {
      //  status code is 200
     expect(resp.status).to.eq(200);
   
     })

      cy.wait(5000);
     
   });  

   
it('Check existance of Home tab on tab bar', () => {
    
   cy
   .get('.Bezzy_light')
   .find('.BezzyTopNav_BezzyTopNav__1Z7YQ')
   .find('.BezzyTopNav_BezzyTopNav_container__2lX_d')
   .find('.BezzyTopNav_BezzyTopNav_main__1NCpa')
   .find('.BezzyTopNavLink_BezzyTopNavLink__1xhkw').eq(0)
   .contains('Home').click({force: true});

   cy.wait(5000);
  
});  

it('Check existance of Chat rooms tab on tab bar', () => {
    
   cy
   .get('.Bezzy_light')
   .find('.BezzyTopNav_BezzyTopNav__1Z7YQ')
   .find('.BezzyTopNav_BezzyTopNav_container__2lX_d')
   .find('.BezzyTopNav_BezzyTopNav_main__1NCpa')
   .find('.BezzyTopNavLink_BezzyTopNavLink__1xhkw').eq(1)
   .contains('Chat rooms').click({force: true});

   cy.wait(5000);
  
   cy
   .get('.Bezzy_light')
   .find('.BezzyTopNav_BezzyTopNav__1Z7YQ')
   .find('.BezzyTopNav_BezzyTopNav_container__2lX_d')
   .find('.BezzyTopNav_BezzyTopNav_main__1NCpa')
   .find('.BezzyTopNavLink_BezzyTopNavLink__1xhkw').eq(1)
   .contains('Chat rooms').click({force: true});

   cy.wait(5000);

});  

it('Check existance of Post tab on tab bar', () => {
    
   cy
   .get('.Bezzy_light')
   .find('.BezzyTopNav_BezzyTopNav__1Z7YQ')
   .find('.BezzyTopNav_BezzyTopNav_container__2lX_d')
   .find('.BezzyTopNav_BezzyTopNav_main__1NCpa')
   .find('.BezzyTopNavLink_BezzyTopNavLink__1xhkw').eq(2)
   .contains('Post').click({force: true});

   cy.wait(5000);
  
   cy
   .get('.Bezzy_light')
   .find('.RegistrationLayout_RegistrationLayout_backButton__1zEcn')
   .contains('Back').click({force: true});

   cy.wait(5000);

});  

it('Check existance of Sign up button on top nav bar', () => {
    
   cy
   .get('.Bezzy_light')
   .find('.BezzyTopNav_BezzyTopNav__1Z7YQ')
   .find('.BezzyTopNav_BezzyTopNav_auth__32HVX')
   .find('.BezzyTopNav_BezzyTopNav_signUp__2aYdE')
   .contains('Sign up').click({force: true});

   cy.wait(5000);
  
   cy
   .get('.Bezzy_light')
   .find('.RegistrationLayout_RegistrationLayout_backButton__1zEcn')
   .contains('Back').click({force: true});

   cy.wait(5000);
   
});  

it('Check existance of Log in button on top nav bar', () => {
    
   cy
   .get('.Bezzy_light')
   .find('.BezzyTopNav_BezzyTopNav__1Z7YQ')
   .find('.BezzyTopNav_BezzyTopNav_auth__32HVX')
   .find('.BezzyTopNav_BezzyTopNav_logIn__zdytb')
   .contains('Log in').click({force: true});

   cy.wait(5000);
  
   cy
   .get('.Bezzy_light')
   .find('.BezzyTopNav_BezzyTopNav__1Z7YQ')
   .find('.BezzyTopNav_BezzyTopNav_container__2lX_d')
   .find('.BezzyTopNav_BezzyTopNav_logo__2UXfN')
   .click({force: true});
   cy.wait(5000);
   
});  

});

describe('Verify chatroom-order, title and sub-title in unregistered flow',  {
   viewportHeight: 768,
   viewportWidth: 1366,
  }, () => {
  
  
  it('Check title for all Chat rooms', () => {
    cy.wait(5000);
  
    cy
    .get('.Bezzy_light')
    .find('.BezzyTopNav_BezzyTopNav__1Z7YQ')
    .find('.BezzyTopNav_BezzyTopNav_container__2lX_d')
    .find('.BezzyTopNav_BezzyTopNav_main__1NCpa')
    .find('.BezzyTopNavLink_BezzyTopNavLink__1xhkw').eq(1)
    .contains('Chat rooms').click({force: true});
   
    cy.wait(5000);
  
   //iterate through each group items and checking title, desc
    cy
    .get('.ReactModalPortal')
    .find('.ReactModal__Overlay')
    .find('.ReactModal__Content')
    .find('.BezzySubNav_BezzySubNav_content__twwlb')
    .find('.BezzySubNavLink_BezzySubNavLink__-NiRo')
    .each(($el, index) => {
     cy.wrap($el).find('.BezzySubNavLink_BezzySubNavLink_title__3PdF-')
     .contains(title[index]);
  
    })
  
    cy.wait(3000);
  
   
  });
  
  it('Check desc for all Chat rooms', () => {
      cy.wait(3000);
  
      cy
      .get('.ReactModalPortal')
      .find('.ReactModal__Overlay')
      .find('.ReactModal__Content')
      .find('.BezzySubNav_BezzySubNav_content__twwlb')
      .find('.BezzySubNavLink_BezzySubNavLink__-NiRo')
      .each(($el, index) => {
      cy.wrap($el).find('.BezzySubNavLink_BezzySubNavLink_text__3iBbr')
      .contains(subtitle[index]);
  
    })
  
  });
  
  it('Check image for all Chat rooms', () => {
  cy.wait(3000);
  
  cy
  .get('.ReactModalPortal')
  .find('.ReactModal__Overlay')
  .find('.ReactModal__Content')
  .find('.BezzySubNav_BezzySubNav_content__twwlb')
  .find('.BezzySubNavLink_BezzySubNavLink__-NiRo')
  .each(($el, index) => {
  cy.wrap($el).find('img')
  .invoke('attr', 'src').should('contain', stageImgURL[index]); 

   });

   cy.wait(5000);

});

it('Check 200 code in each link of assets in all Chat rooms', () => {
   cy.wait(3000);
   
   cy
   .get('.ReactModalPortal')
   .find('.ReactModal__Overlay')
   .find('.ReactModal__Content')
   .find('.BezzySubNav_BezzySubNav_content__twwlb')
   .find('.BezzySubNavLink_BezzySubNavLink__-NiRo')
   .each(($el, index) => {
   cy.wrap($el).find('img')
   .invoke('attr', 'src').should('contain', stageImgURL[index]); 
   cy.request(stageImgURL[index]).then((resp) => {
      //  status code is 200
     expect(resp.status).to.eq(200);
   
     })
   });
 
    cy.wait(5000);
 
 });

 it('Collapsed chat rooms menu & go back to the home screen', () => {
   cy.wait(5000);
 
   cy
   .get('.Bezzy_light')
   .find('.BezzyTopNav_BezzyTopNav__1Z7YQ')
   .find('.BezzyTopNav_BezzyTopNav_container__2lX_d')
   .find('.BezzyTopNav_BezzyTopNav_main__1NCpa')
   .find('.BezzyTopNavLink_BezzyTopNavLink__1xhkw').eq(1)
   .contains('Chat rooms').click({force: true});
  
   cy.wait(5000);

 });

 it('Verify that chat rooms menu is collapsed', () => {
   cy.wait(5000);
 
   cy
   .get('.Bezzy_light')
   .find('.BezzySubNav_BezzySubNav_open__32Whk').should('not.exist');

  
   cy.wait(5000);

 });

});