Cypress.on('uncaught:exception', (err, runnable) => {
   return false;
 });
var custname="boss"+Math.floor(Math.random() * 10000);
var URL="https://bezzy-ms-web-stage.bezzy.com/";


before( {
   viewportHeight: 768,
   viewportWidth: 1366,
 },() => {
   cy.visit(URL);
   cy.title().should('eq', 'Bezzy MS');
   cy.wait(2000);

 })

 beforeEach(() => {
   cy.restoreLocalStorage();
   Cypress.Cookies.defaults({
    preserve: (cookie) => {
      return true;
    }
  })
 });
 
 afterEach(() => {
   cy.saveLocalStorage();
 });

 describe('Accept the cookie banner',  {
  viewportHeight: 768,
  viewportWidth: 1366,
}, () => {

it('Verify title', () => {
   
   cy
   .get('.Bezzy_light')
   .find('*[class^="BezzyPrivacy_root"]')
   .find('*[class^="BezzyPrivacy_header"]')
   .contains('Please accept our privacy terms');

   cy.wait(2000);
   
});  

it('Verify description', () => {
  
  cy
     .get('.Bezzy_light')
     .find('*[class^="BezzyPrivacy_root"]')
     .find('*[class^="BezzyPrivacy_message"]')
     .contains('BezzyMS.com uses cookies to improve your site experience and to show you personalized advertising.');
     
 cy.wait(2000);
     
});  

it('Verify Privacy Policy link', () => {
  
  cy
     .get('.Bezzy_light')
     .find('*[class^="BezzyPrivacy_root"]')
     .find('*[class^="BezzyPrivacy_message"]')
     .find('*[class^="BezzyHighlightText_root"]')
     .contains('Privacy Policy')

  cy
     .get('.Bezzy_light')
     .find('*[class^="BezzyPrivacy_root"]')
     .find('*[class^="BezzyPrivacy_message"]')
     .find('a')
     .invoke('removeAttr', 'target')
     .click({force: true});

  cy.wait(1000);

  cy.url().should('eq', 'https://www.healthline.com/about/privacy-policy');

  cy.wait(3000);

  cy.go(-1);

  cy.wait(2000);
     
}); 

it('Verify More information', () => {
  
  cy
     .get('.Bezzy_light')
     .find('*[class^="BezzyPrivacy_root"]')
     .find('*[class^="BezzyPrivacy_buttonContainer"]')
     .find('*[class^="BezzyPrivacy_moreInfo"]')
     .find('*[class^="BezzyHighlightText_root"]')
     .contains('More information')

     cy
        .get('.Bezzy_light')
        .find('*[class^="BezzyPrivacy_root"]')
        .find('*[class^="BezzyPrivacy_buttonContainer"]')
        .find('*[class^="BezzyPrivacy_moreInfo"]')
        .find('a')
        .invoke('removeAttr', 'target')
        .click({force: true});
  
     cy.wait(2000);
  
     cy.url().should('eq', 'https://www.healthline.com/privacy-settings');

     cy.wait(3000);

     cy.go(-1);
   
     cy.wait(2000);
     
});  

it('Accept the cookie banner', () => {
  
  cy
     .get('.Bezzy_light')
     .find('*[class^="BezzyPrivacy_root"]')
     .find('*[class^="BezzyPrivacy_buttonContainer"]')
     .find('button')
     .contains('ACCEPT')
     .click({force: true});

 cy.wait(2000);
     
});  

});


describe('Signup flow in MS-Bezzy_WEB',  {
   viewportHeight: 768,
   viewportWidth: 1366,
 }, () => {

 it('Navigate to Sign up page', () => {
    
  cy
  .get('.Bezzy_light')
  .find('*[class^="BezzyTopNav_root"]')
  .find('*[class^="BezzyTopNav_auth"]')
  .find('a').eq(0)
  .contains('Join Bezzy').click({force: true});

  cy.wait(1000);
     
});  

it('Enter email-address and click on Continue buttom', () => {
  
   cy
   .get('.Bezzy_light')
   .find('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_form__"]')
   .find('*[class^="BezzyRegistration_registration__"]') 
   .find('*[class^="BezzyInput_container__"]') 
   .find('*[class^="BezzyInput_field__"]') 
   .find('*[class^="BezzyInput_wrapper__"]') 
   .find('input')
   .invoke('attr', 'placeholder').should('contain', 'Enter your email address')
   
   cy.wait(1000);

   cy
   .get('.Bezzy_light')
   .find('*[class^="BezzyTopNav_root"]')
  .find('*[class^="BezzyTopNav_auth"]')
  .find('a').eq(0)
  .contains('Join Bezzy').click({force: true});

  cy.wait(1000);
     
});  

it('Enter email-address and click on Continue buttom', () => {
  
   cy
   .get('.Bezzy_light')
   .find('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_form__"]')
   .find('*[class^="BezzyRegistration_registration__"]') 
   .find('*[class^="BezzyInput_container__"]') 
   .find('*[class^="BezzyInput_field__"]') 
   .find('*[class^="BezzyInput_wrapper__"]') 
   .find('input')
   .click({force: true});
   
   cy.wait(1000);

   cy
   .get('.Bezzy_light')
   .find('*[class^="BezzyTopNav_root"]')
  .find('*[class^="BezzyTopNav_auth"]')
  .find('a').eq(0)
  .contains('Join Bezzy').click({force: true});

  cy.wait(1000);
     
});  

it('Enter email-address and click on Continue buttom', () => {
  
   cy
   .get('.Bezzy_light')
   .find('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_form__"]')
   .find('*[class^="BezzyRegistration_registration__"]') 
   .find('*[class^="BezzyInput_container__"]') 
   .find('*[class^="BezzyInput_field__"]') 
   .find('*[class^="BezzyInput_wrapper__"]') 
   .find('*[class^="BezzyInput_input__"]') 
   .type(custname+'@healthline.com');

   cy.wait(1000);
   
   cy
   .get('.Bezzy_light')
   .find('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_form__"]')
   .find('*[class^="BezzyRegistration_registration__"]') 
   .find('*[class^="BezzyInput_container__"]') 
   .find('*[class^="BezzyInput_button__"]') .find('*[class^="BezzyRegistration_signupEmailContinueDesktop__"]')
   .contains('Continue').click({force: true});

   cy.wait(1000);
   
   });

});  

describe('Complete the registration flow',  {
   viewportHeight: 768,
   viewportWidth: 1366,
 }, () => {

 it('Enter all details on 2nd page of signup', () => {

   cy.wait(3000);
   cy
   .get('.Bezzy_light')
   .find('*[class^="BezzyBackButton_root__"]')
   .contains('Back');

   cy.wait(1000);
   
   cy
   .get('.Bezzy_light')
   .find('*[class^="BezzyRegistration_prompt__"]')
   .contains('Like what you see?');

   cy
   .get('.Bezzy_light')
   .find('*[class^="BezzyRegistration_prompt__"]')
   .contains('Join Bezzy for unlimited advice, meaningful connection, Q&A,');

   cy
   .get('.Bezzy_light')
   .find('*[class^="BezzyRegistration_prompt__"]')
   .contains('inspirational knowledge, and more community perks.');

   cy.wait(1000);
   
   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_input__"]').eq(0)
   .find('*[class^="BezzyInput_wrapper__"]')
   .find('input')
   .invoke('attr', 'value').should('contain', custname+'@healthline.com')
  
   cy.wait(1000);

   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_input__"]').eq(1)
   .find('*[class^="BezzyInput_wrapper__"]')
   .find('input')
   .invoke('attr', 'placeholder').should('contain', 'Create a password (8+ characters)')
  
   cy.wait(1000);

   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_input__"]').eq(1)
   .find('*[class^="BezzyInput_wrapper__"]')
   .find('input')
   .click({force: true});
  
   cy.wait(1000);

   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_input__"]').eq(1)
   .find('*[class^="BezzyInput_wrapper__"]')
   .find('input')
   .type('12345678');

   cy.wait(1000);
   
   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_input__"]').eq(1)
   .find('*[class^="BezzyInput_rightIcon__"]');
     
   cy.wait(1000);

   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_input__"]').eq(2)
   .find('*[class^="BezzyInput_wrapper__"]')
   .find('input')
   .invoke('attr', 'placeholder').should('contain', 'Create a username')
     
   cy.wait(1000);

   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_input__"]').eq(2)
   .find('*[class^="BezzyInput_wrapper__"]')
   .find('input')
   .click({force: true});

   cy.wait(1000);

   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_input__"]').eq(2)
   .find('*[class^="BezzyInput_wrapper__"]')
   .find('input')
   .type(custname);
   
   cy.wait(1000);

   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('form').find('div')
   .contains('Your username will be public to the community so choose something as unique as you.');
   
   cy.wait(1000);
   
   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyDropdown_root__"]')
   .find('*[class^="BezzyDropdown_dropdown__"]')
   .find('input')
   .invoke('attr', 'placeholder').should('contain', 'Where do you call home?')
     
   cy.wait(1000);

   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyDropdown_root__"]')
   .find('*[class^="BezzyDropdown_dropdown__"]')
   .find('input')
   .click({force: true});

   cy.wait(1000);
   
   cy
   .get('.ReactModal__Content')
   .find('*[class^="BezzySingleSelectMenu_header__"]')
   .contains('Locations');

   cy.wait(1000);
   
   cy
   .get('.ReactModal__Content')
   .find('*[class^="BezzySingleSelectMenu_list__"]')
   .find('*[class^="BezzyRadioButton_root__"]').eq(0)
   .click({force: true});

   cy.wait(1000);
   
   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_checkbox__"]')
   .find('label')
   .contains('Are you 18 or older?');

   cy.wait(1000);

   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="BezzyRegistration_checkbox__"]')
   .find('label')
   .click({force: true});

   cy.wait(1000);

   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('button')
   .contains('Complete Sign up');

   cy.wait(1000);

   cy
   .get('*[class^="BezzyRegistration_root__"]')
   .find('*[class^="util_Util_flex__"]')
   .click({force: true});

   cy.wait(5000);
 

});  

});

describe('Logout user flow',  {
  viewportHeight: 768,
  viewportWidth: 1366,
}, () => {

it('Logout user', () => {

  cy.wait(5000);
  cy
  .get('.Bezzy_light')
  .find('*[class^="BezzyNotificationsContainer_notificationBell__"]')
  .click({force: true});

  cy.wait(3000);
  
  cy
  .get('.Bezzy_light')
  .find('*[class^="BezzyNotificationsContainer_account__"]')
  .find('*[class^="BezzyHighlightText_root__"]').eq(0)
  .click({force: true});

  cy.wait(3000);

});  

});

describe('Signin Flow',  {
  viewportHeight: 768,
  viewportWidth: 1366,
}, () => {

it('Navigate to Log in page', () => {
   
  cy
  .get('.Bezzy_light')
  .find('*[class^="BezzyTopNav_root"]')
  .find('*[class^="BezzyTopNav_auth"]')
  .find('a').eq(1)
  .contains('Log in').click({force: true});
  cy.wait(1000);    
});  

it('Enter correct credentials and login the user', () => {
  
  cy
    .get('.Bezzy_light')
    .find('*[class^="LayoutRow100Row5050_secondRow__"]')
    .find('*[class^="PageSignin_form__"]')
    .find('*[class^="PageSignin_container__"]')
    .find('*[class^="PageSignin_input__"]').eq(0)
    .find('input')
    .invoke('attr', 'placeholder').should('contain', 'Enter your email address')
   
    cy.wait(1000);

    cy
    .get('.Bezzy_light')
    .find('*[class^="LayoutRow100Row5050_secondRow__"]')
    .find('*[class^="PageSignin_form__"]')
    .find('*[class^="PageSignin_container__"]')
    .find('*[class^="PageSignin_input__"]').eq(0)
    .find('input')
    .click({force: true});
 
    cy.wait(1000);

    cy
    .get('.Bezzy_light')
    .find('*[class^="LayoutRow100Row5050_secondRow__"]')
    .find('*[class^="PageSignin_form__"]')
    .find('*[class^="PageSignin_container__"]')
    .find('*[class^="PageSignin_input__"]').eq(0)
    .find('input')
    .type(custname+'@healthline.com');
 
    cy.wait(1000);
 
    cy
    .get('.Bezzy_light')
    .find('*[class^="LayoutRow100Row5050_secondRow__"]')
    .find('*[class^="PageSignin_form__"]')
    .find('*[class^="PageSignin_container__"]')
    .find('*[class^="PageSignin_input__"]').eq(1)
    .find('input')
    .invoke('attr', 'placeholder').should('contain', 'Enter your password')
   
    cy.wait(1000);

    cy
    .get('.Bezzy_light')
    .find('*[class^="LayoutRow100Row5050_secondRow__"]')
    .find('*[class^="PageSignin_form__"]')
    .find('*[class^="PageSignin_container__"]')
    .find('*[class^="PageSignin_input__"]').eq(1)
    .find('input')
    .click({force: true});
   
    cy.wait(1000);

    cy
    .get('.Bezzy_light')
    .find('*[class^="LayoutRow100Row5050_secondRow__"]')
    .find('*[class^="PageSignin_form__"]')
    .find('*[class^="PageSignin_container__"]')
    .find('*[class^="PageSignin_input__"]').eq(1)
    .find('input')
    .type('12345678');
   
    cy.wait(1000);

    cy
    .get('.Bezzy_light')
    .find('*[class^="LayoutRow100Row5050_secondRow__"]')
    .find('*[class^="PageSignin_form__"]')
    .find('*[class^="PageSignin_container__"]')
    .find('button')
    .contains('Log in').click({force: true});
   
    cy.wait(1000);
         
 });  
 

});

describe('Delete user flow',  {
  viewportHeight: 768,
  viewportWidth: 1366,
}, () => {

it('Logout user', () => {

  cy.wait(5000);
  cy
  .get('.Bezzy_light')
  .find('*[class^="BezzyNotificationsContainer_notificationBell__"]')
  .click({force: true});

  cy.wait(3000);
  
  cy
  .get('.Bezzy_light')
  .find('*[class^="BezzyNotificationsContainer_account__"]')
  .find('*[class^="BezzyHighlightText_root__"]').eq(1)
  .click({force: true});

  cy.wait(3000);

  
  cy
  .get('.Bezzy_light')
  .find('*[class^="BezzyConfirmation_root__"]')
  .find('*[class^="BezzyConfirmation_confirmationTitle__"]')
  .should('contain', 'Delete account');

  cy
  .get('.Bezzy_light')
  .find('*[class^="BezzyConfirmation_root__"]')
  .find('*[class^="BezzyConfirmation_confirmationContent__"]')
  .should('contain', 'Are you sure you want to delete your account? This is permanent and cannot be undone.');

  cy
  .get('.Bezzy_light')
  .find('*[class^="BezzyConfirmation_root__"]')
  .find('*[class^="BezzyConfirmation_confirmationFooter__"]')
  .find('div').eq(1)
  .click({force: true});

  cy.wait(3000);


});  

});