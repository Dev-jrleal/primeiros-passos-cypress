import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'  
import myInfoPager from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new myInfoPager()

describe('Orange HRM Tests', () => {


  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.checkDashaPage()
    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('Pedro','Matheus','Andre')
    myInfoPage.fillEmployeeDetails('1111','2222','3333','2025-07-29','12345','98765')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()   
  })

  
})
