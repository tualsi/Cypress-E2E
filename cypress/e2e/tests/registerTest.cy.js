import {registerPage} from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"
   const regpage=new registerPage();
  
describe('test Automation',()=>{

    it('register flow',()=>{
        regpage.OpenURL();
        regpage.enterFirstName(registerData.firstName);
         regpage.enterLastName(registerData.lastName);
          regpage.enterEmail(registerData.email);
           regpage.enterTelephone(registerData.telephone);
            regpage.enterpassword(registerData.password);
             regpage.selectCheckBox();
             regpage.clickOnContinue();
     



    })

})