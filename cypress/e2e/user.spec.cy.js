import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'  

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
   
    
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

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.checkDashaPage()
    menuPage.accessMyInfo()
          

    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.midName).clear().type('ola')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.employeeId).clear().type('EmployeId')
    cy.get(selectorsList.otherId).clear().type('OtherId')
    cy.get(selectorsList.drivLicNu).clear().type('DrivLicNu')
    cy.get(selectorsList.dataWrapper).clear().type('2025-03-10')   
    cy.get(selectorsList.dateCloseButton).click()        
    cy.get(selectorsList.submitButton).eq(0).click({force:true})
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')

    cy.get(selectorsList.genercComboBox).eq(0).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.genercComboBox).eq(1).click({force:true})
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passowordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert) 
  })
})
