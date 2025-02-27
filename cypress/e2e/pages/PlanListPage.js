class planListPage{
    WellcareSimple="#mat-checkbox-28 > .mat-checkbox-layout > .mat-checkbox-inner-container";
        done=".button-container > .mat-focus-indicator > .mat-button-wrapper";
        humanaGold="#mat-checkbox-53 > .mat-checkbox-layout > .mat-checkbox-inner-container"
     humanaGoldFirstplan="#mat-checkbox-25 > .mat-checkbox-layout > .mat-checkbox-inner-container"
        humanGoldPlus="#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container"
        pdp='.selected-container > :nth-child(1) > .mat-focus-indicator';
        wellcareValueScriptPdp="#mat-checkbox-17 > .mat-checkbox-layout > .mat-checkbox-inner-container";
        donePdp='.button-container > .mat-focus-indicator > .mat-button-wrapper';
        aetenaMedicarePremier="#mat-checkbox-25 > .mat-checkbox-layout > .mat-checkbox-inner-container";
        wellcaregiveback="#mat-checkbox-29 > .mat-checkbox-layout > .mat-checkbox-inner-container";
        planWellCaresimpleClick(){
            cy.get(this.WellcareSimple).click();
        }
        HumanaGoldPlanClick(){
            cy.get(this.humanaGold).click();
        }
        DoneplanSelectionClick(){
            cy.get(this.done).click();
        }
        HumanaGoldPlusPlanClick(){
            cy.get(this.humanGoldPlus).click();
        }
        pdpClick(){
            cy.get(this.pdp).click();
        }
        wellcareValuScriptClick(){
            cy.get(this.wellcareValueScriptPdp).click();
        }
        donePdpClick(){
            cy.get(this.donePdp).click();
        }
        aetenaMedicarePremierClick(){
            cy.get(this.aetenaMedicarePremier).click({ force: true });
        }
        wellcaregivebackclick(){
            cy.get(this.wellcaregiveback).scrollIntoView().click({ force: true });
        }
        
        }

export default planListPage;