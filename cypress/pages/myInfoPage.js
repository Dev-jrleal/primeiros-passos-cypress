class myInfoPager{
    selectorsList(){
        const selectors ={
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genercComboBox:".oxd-select-text--after",
            midName: ".--name-grouped-field",
            employeeId:':nth-child(1)>:nth-child(1)>.oxd-input-group>:nth-child(2)>.oxd-input',
            otherId:':nth-child(3)>:nth-child(1)>:nth-child(2)>.oxd-input-group>:nth-child(2)>.oxd-input',
            drivLicNu:':nth-child(2)>:nth-child(1)>.oxd-input-group>:nth-child(2)>.oxd-input',
            dataWrapper:':nth-child(2)>.oxd-input-group>:nth-child(2)>.oxd-date-wrapper>.oxd-date-input>.oxd-input',
        }
        return selectors
    }

    fillPersonalDetails(firstName,lastName,nickName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().midName).clear().type(lastName)
        cy.get(this.selectorsList().lastNameField).clear().type(nickName)
    }

    fillEmployeeDetails(employeeId,otherId,drivLicNu,userData){
        cy.get(this.selectorsList().employeeId).clear().type(employeeId)
        cy.get(this.selectorsList().otherId).clear().type(otherId)
        cy.get(this.selectorsList().drivLicNu).clear().type(drivLicNu)
        cy.get(this.selectorsList().dataWrapper).clear().type(userData)   
        cy.get(this.selectorsList().dateCloseButton).click() 
    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({force:true})
        cy.get('body').should('contain', 'Successfully Update')
        cy.get('.oxd-toast-close')
       
    }

    fillStatus(){
        cy.get(this.selectorsList().genercComboBox).eq(0).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get(this.selectorsList().genercComboBox).eq(1).click({force:true})
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    }



}
export default myInfoPager