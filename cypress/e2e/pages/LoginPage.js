class LoginPage{
    UserNameEle="#mat-input-0";
    PasswordEle="#mat-input-1";
    LoginButtonEle=".mat-button-wrapper";
    HomePageHeading = ".page-heading";
    
setUserName(username){
    cy.get(this.UserNameEle).type(username);
}
setPassword(password){
    cy.get(this.PasswordEle).type(password);
}
ClickLoginBtn(){
    cy.get(this.LoginButtonEle).click();
}
verifyLogin() {
    cy.get(this.HomePageHeading).should('have.text', "Recommendations");
}

}
export default LoginPage;