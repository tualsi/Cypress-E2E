export class registerPage{
    weblocators={
        firstName: 'input#input-firstname',
        lastName: 'input#input-lastname',
        email: '#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
         passwordConfirm:'#input-confirm',
         policyCheckBox:'input[type="checkbox"]',
         continue:'.btn.btn-primary'
    }
    enterFirstName(Fname){
        cy.get(this.weblocators.firstName).type(Fname)
    }
    enterLastName(Lname){
         cy.get(this.weblocators.lastName).type(Lname)

    }
    enterEmail(Email){
         cy.get(this.weblocators.email).type(Email)

    }
     enterTelephone(Phone){
         cy.get(this.weblocators.telephone).type(Phone)

    }
     enterpassword(Password){
         cy.get(this.weblocators.password).type(Password)
        cy.get(this.weblocators.passwordConfirm).type(Password)

    }
    selectCheckBox(){
        cy.get(this.weblocators.policyCheckBox).check()
    }
    clickOnContinue(){
        cy.get(this.weblocators.continue).click()
    }

    //config the url in cypress config js

    OpenURL(){
        cy.visit(Cypress.env('URL'))
    }
}

