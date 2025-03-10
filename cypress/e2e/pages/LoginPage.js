class LoginPage{
    userNameEle="#mat-input-0";
    passwordEle="#mat-input-1";
    loginButtonEle=".mat-button-wrapper";
    homePageHeading = ".page-heading";
    
setUserName(username){
    cy.get(this.userNameEle).type(username);
}
setPassword(password){
    cy.get(this.passwordEle).type(password);
}
clickLoginBtn(){
    cy.get(this.loginButtonEle).click();
}
verifyLogin() {
    cy.get(this.homePageHeading).should('have.text', "Recommendations");
}

}
export default LoginPage;