Cypress.on('uncaught:exception', (err, runnable) => {
   return false;
 });

var URL=Cypress.config().baseUrl;
let titleDisp="";
let brandColor="";
if(Cypress.config('baseUrl').indexOf("bezzy-ms-web-stage.bezzy.com")>0){
   titleDisp="MS Healthline";
   brandColor="rgb(240, 83, 58)";
}
if(Cypress.config('baseUrl').indexOf("bezzy-bc-web-stage.bezzy.com")>0){
   titleDisp="Breast Cancer Healthline";
   brandColor="rgb(224, 33, 142)";
}
if(Cypress.config('baseUrl').indexOf("bezzy-ibd-web-stage.bezzy.com")>0){
   titleDisp="IBD Healthline";
   brandColor="rgb(126, 89, 202)";
}
if(Cypress.config('baseUrl').indexOf("bezzy-mig-web-stage.bezzy.com")>0){
   titleDisp="Migraine Healthline";
   brandColor="rgb(86, 149, 156)";
}
if(Cypress.config('baseUrl').indexOf("bezzy-t2d-web-stage.bezzy.com")>0){
   titleDisp="Type 2 Diabetes Healthline";
   brandColor="rgb(1, 173, 185)";
}
if(Cypress.config('baseUrl').indexOf("bezzy-ra-web-stage.bezzy.com")>0){
   titleDisp="Rheumatoid Arthritis Healthline";
   brandColor="rgb(81, 38, 137)";
}
if(Cypress.config('baseUrl').indexOf("bezzy-psa-web-stage.bezzy.com")>0){
   titleDisp="Psoriatic Arthritis Healthline";
   brandColor="rgb(170, 49, 31)";
}

before( {
   viewportHeight: 768,
   viewportWidth: 1366,
 },() => {
   cy.visit(URL);
   cy.title().should('eq', titleDisp);
   cy.wait(5000);
 })

 beforeEach(() => {
   cy.restoreLocalStorage();
 });
 
 afterEach(() => {
   cy.saveLocalStorage();
 });

describe('Top Navigation Bar tests',  {
   viewportHeight: 768,
   viewportWidth: 1366,
 }, () => {

it('Check Default Selected TAB and it\'s color', () => {
   cy.get('.BezzyTopNav_BezzyTopNav_main__1NCpa')
   .find('.BezzyTopNavLink_BezzyTopNavLink__1xhkw').eq(0)
   .should('have.class', 'BezzyTopNavLink_BezzyTopNavLink_active__2qXUH');

   cy.get('.BezzyTopNav_BezzyTopNav_main__1NCpa')
   .find('.BezzyTopNavLink_BezzyTopNavLink_active__2qXUH').eq(0)
   .invoke('css', 'color', brandColor)
   .should('have.css', 'color', brandColor);
});

it('Check only one Nav TAB is active', () => {
   cy.get('.BezzyTopNav_BezzyTopNav_main__1NCpa')
   .find('.BezzyTopNavLink_BezzyTopNavLink_active__2qXUH')
   .should('have.length', 1);

   cy.get('.BezzyTopNav_BezzyTopNav_main__1NCpa')
   .find('.BezzyTopNavLink_BezzyTopNavLink__1xhkw').eq(1)
   .click({force: true});
   
   cy.get('.BezzyTopNav_BezzyTopNav_main__1NCpa')
   .find('.BezzyTopNavLink_BezzyTopNavLink_active__2qXUH')
   .should('have.length', 1);

});



});


