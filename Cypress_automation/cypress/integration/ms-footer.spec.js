Cypress.on('uncaught:exception', (err, runnable) => {
   return false;
 });
var custname="boss"+Math.floor(Math.random() * 10000);
var URL="https://bezzy-ms-web-stage.bezzy.com/";

let linkname = null;
//['About', 'Contact Us', 'Terms of Use', 'Advertising Policy', 'Privacy Policy', 'Do Not Sell My Info', 'Privacy Settings'];
let linkURL= null;
//const linkURL=['https://www.healthline.com/about', 'https://www.healthline.com/program/about-us#contact-us', 'https://www.healthline.com/terms-of-use', 'https://www.healthline.com/advertising-policy', 'https://www.healthline.com/about/privacy-policy', 'https://privacyportal-cdn.onetrust.com/dsarwebform/79ba7c84-ebc2-4740-8d11-bf1cc4501e59/6bfe1af7-9a77-4c12-900e-3b808accdb22.html', 'https://www.healthline.com/privacy-settings']

linkname = ['About', 'Contact Us', 'Terms of Use', 'Advertising Policy', 'Privacy Policy', 'Do Not Sell My Info', 'Privacy Settings'];
linkURL=['https://www.healthline.com/program/about-us', 'https://www.healthline.com/program/about-us#contact-us', 'https://www.healthline.com/terms-of-use', 'https://www.healthline.com/advertising-policy', 'https://www.healthline.com/about/privacy-policy', 'https://privacyportal-cdn.onetrust.com/dsarwebform/79ba7c84-ebc2-4740-8d11-bf1cc4501e59/6bfe1af7-9a77-4c12-900e-3b808accdb22.html', 'https://www.healthline.com/privacy-settings'];



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

describe('Footer of Bezzy-WEB',  {
   viewportHeight: 768,
   viewportWidth: 1366,
 }, () => {

 it('Navigate to Sign up page', () => {
    
 cy
 .get('.Bezzy_light')
 .find('.BezzyTopNav_BezzyTopNav__1Z7YQ')
 .find('.BezzyTopNav_BezzyTopNav_auth__32HVX')
 .find('.BezzyTopNav_BezzyTopNav_logIn__zdytb')
 .contains('Log in').click({force: true});

   cy.wait(5000);

     
});  

it('Check existance of community logo on footer & verified repsonse code 200', () => {
    
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_logoSocialContainer__yS9y2').find('img')
   .invoke('attr', 'src').should('contain', '/assets/msb/logo.svg');

   cy.request('https://bezzy-ms-web-stage.bezzy.com/assets/msb/logo.svg').then((resp) => {
      //  status code is 200
     expect(resp.status).to.eq(200);
   })

   cy.wait(5000);
  
});  

it('Check existance of Facebook link on footer & clicked on it', () => {
    
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_logoSocialContainer__yS9y2')
   .find('.BezzySocial_BezzySocial_link__1qanB').eq(0)
   .invoke('removeAttr', 'target')
   .click({force: true});

   cy.wait(5000);

   cy.url().should('include', 'facebook');

   cy.wait(3000);

   cy.go(-1);

});  

it('Check existance of Twitter link on footer & clicked on it', () => {
    
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_logoSocialContainer__yS9y2')
   .find('.BezzySocial_BezzySocial_link__1qanB').eq(1)
   .invoke('removeAttr', 'target')
   .click({force: true});

   cy.wait(5000);

   cy.url().should('eq', 'https://twitter.com/healthline');

   cy.wait(3000);

   cy.go(-1);


});  

it('Check existance of About link on footer & clicked on it', () => {
    
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_linksCopyrightContainer__1_es5')
   .find('.BezzyFooter_BezzyFooter_links__tbJW9')
   .find('.BezzyFooter_BezzyFooter_link__36NzT').eq(0)
   .contains('About').click({force: true});

   cy.wait(5000);
  
   cy.url().should('eq', 'https://www.healthline.com/program/about-us'); // => true

   cy.go(-1);

});  

it('Check existance of Contact Us link on footer & clicked on it', () => {
    
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_linksCopyrightContainer__1_es5')
   .find('.BezzyFooter_BezzyFooter_links__tbJW9')
   .find('.BezzyFooter_BezzyFooter_link__36NzT').eq(1)
   .contains('Contact Us').click({force: true});

   cy.wait(5000);
  
   cy.url().should('eq', 'https://www.healthline.com/program/about-us#contact-us'); // => true

   cy.go(-1);

});  

it('Check existance of Terms of Use link on footer & clicked on it', () => {
    
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_linksCopyrightContainer__1_es5')
   .find('.BezzyFooter_BezzyFooter_links__tbJW9')
   .find('.BezzyFooter_BezzyFooter_link__36NzT').eq(2)
   .contains('Terms of Use').click({force: true});

   cy.wait(5000);
  
   cy.url().should('eq', 'https://www.healthline.com/terms-of-use'); // => true

   cy.go(-1);
   
});  

it('Check existance of Advertising Policy link on footer & clicked on it', () => {
    
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_linksCopyrightContainer__1_es5')
   .find('.BezzyFooter_BezzyFooter_links__tbJW9')
   .find('.BezzyFooter_BezzyFooter_link__36NzT').eq(3)
   .contains('Advertising Policy').click({force: true});

   cy.wait(5000);
  
   cy.url().should('eq', 'https://www.healthline.com/advertising-policy'); // => true

   cy.go(-1);
   
});  

it('Check existance of Privacy Policy link on footer & clicked on it', () => {
    
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_linksCopyrightContainer__1_es5')
   .find('.BezzyFooter_BezzyFooter_links__tbJW9')
   .find('.BezzyFooter_BezzyFooter_link__36NzT').eq(4)
   .contains('Privacy Policy').click({force: true});

   cy.wait(5000);
  
   cy.url().should('eq', 'https://www.healthline.com/about/privacy-policy'); // => true

   cy.go(-1);
   
}); 

it('Check existance of Do Not Sell My Info link on footer & clicked on it', () => {
    
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_linksCopyrightContainer__1_es5')
   .find('.BezzyFooter_BezzyFooter_links__tbJW9')
   .find('.BezzyFooter_BezzyFooter_link__36NzT').eq(5)
   .contains('Do Not Sell My Info').click({force: true});

   cy.wait(5000);
  
   cy.url().should('eq', 'https://privacyportal-cdn.onetrust.com/dsarwebform/79ba7c84-ebc2-4740-8d11-bf1cc4501e59/6bfe1af7-9a77-4c12-900e-3b808accdb22.html'); // => true

   cy.go(-1);
   
}); 

it('Check existance of Privacy Settings link on footer & clicked on it', () => {
    
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_linksCopyrightContainer__1_es5')
   .find('.BezzyFooter_BezzyFooter_links__tbJW9')
   .find('.BezzyFooter_BezzyFooter_link__36NzT').eq(6)
   .contains('Privacy Settings').click({force: true});

   cy.wait(5000);
  
   cy.url().should('eq', 'https://www.healthline.com/privacy-settings'); // => true

   cy.go(-1);

   cy.wait(5000);
   
}); 

it('Check existance of Copyright text link on footer', () => {
    
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_linksCopyrightContainer__1_es5')
   .find('.BezzyFooter_BezzyFooter_copyright__2iMOz')
   .contains('© 2005-');
   
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_linksCopyrightContainer__1_es5')
   .find('.BezzyFooter_BezzyFooter_copyright__2iMOz')
   .contains('2021');

   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_linksCopyrightContainer__1_es5')
   .find('.BezzyFooter_BezzyFooter_copyright__2iMOz')
   .contains('Healthline Media a Red Ventures Company. All rights reserved. Our website services, content, and products are for informational purposes only. Healthline Media does not provide medical advice, diagnosis, or treatment. See');


   cy.wait(5000);
   
}); 

it('Check existance of additional information link on footer', () => {
    
   cy
   .get('.BezzyFooter_BezzyFooter__13bZ1')
   .find('.BezzyFooter_BezzyFooter_container__LNa5A')
   .find('.BezzyFooter_BezzyFooter_linksCopyrightContainer__1_es5')
   .find('.BezzyFooter_BezzyFooter_copyright__2iMOz')
   .find('.BezzyFooter_BezzyFooter_link__36NzT')
   .invoke('removeAttr', 'target')
   .click({force: true});

   cy.wait(5000);

   cy.url().should('eq', 'https://www.healthline.com/about/additional-information');

   cy.wait(3000);

   cy.go(-1);


});

});