    class MenuPage{
        selectorsList(){
            const selectors ={
                myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            }
            return selectors
        }

        accessMyInfo() {
            cy.get(this.selectorsList().myInfoButton).click()
        }

        accessorPerformace() {
            cy.get(this.selectorsList().performaceButton).click()
        }

        


    }
    export default MenuPage