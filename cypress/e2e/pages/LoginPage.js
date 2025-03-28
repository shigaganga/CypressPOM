class LoginPage{
    userNameEle="#mat-input-0";
    passwordEle="#mat-input-1";
    loginButtonEle=".mat-button-wrapper";
    homePageHeading = ".page-heading";
    
setUserName(username){
    cy.get(this.userNameEle)
    .should('be.visible')
    .and('not.be.disabled')
    .type(username);
}
setPassword(password){cy.get(this.passwordEle)
    .should('be.visible')
    .and('not.be.disabled')
    .type(password);}
    
clickLoginBtn(){
    cy.get(this.loginButtonEle)
    .should('be.visible')
    .and('not.be.disabled')
    .click();
}
verifyLogin() {
    cy.get(this.homePageHeading)
    .should('be.visible')
    .and('have.text', "Recommendations");
}

}
export default LoginPage;