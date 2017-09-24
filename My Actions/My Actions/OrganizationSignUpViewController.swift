//
//  OrganizationSignUpViewController.swift
//  My Actions
//
//  Created by Kiera Cawley on 19/11/2016.
//  Copyright © 2016 Kiera Cawley. All rights reserved.
//

import UIKit
import CloudBoost

class OrganizationSignUpViewController: UIViewController {
    
    var tags:[String] = []
    
    var signedInUser:User = User()
    var signedInOrganization:Organization = Organization()
    
    @IBOutlet weak var firstNameInput: UITextField!
    @IBOutlet weak var lastNameInput: UITextField!
    @IBOutlet weak var usernameInput: UITextField!
    @IBOutlet weak var emailAddressInput: UITextField!
    @IBOutlet weak var passwordInput: UITextField!
    @IBOutlet weak var organizationNameInput: UITextField!
    @IBOutlet weak var organizationWebsite: UITextField!
    @IBOutlet weak var organizationDescription: UITextField!

    @IBOutlet weak var abortionCheckBox: UIButton!
    @IBOutlet weak var cyberSecurityCheckBox: UIButton!
    @IBOutlet weak var domesticAbuseCheckBox: UIButton!
    @IBOutlet weak var womensRightsCheckBox: UIButton!
    @IBOutlet weak var criminalJusticeCheckBox: UIButton!
    @IBOutlet weak var homelessnessCheckBox: UIButton!
  
    override func viewDidLoad() {
        super.viewDidLoad()
        abortionCheckBox.layer.borderWidth = 2
        cyberSecurityCheckBox.layer.borderWidth = 2
        domesticAbuseCheckBox.layer.borderWidth = 2
        womensRightsCheckBox.layer.borderWidth = 2
        criminalJusticeCheckBox.layer.borderWidth = 2
        homelessnessCheckBox.layer.borderWidth = 2
    }
    @IBAction func signUp(sender: AnyObject) {
        let userAuthenticator = UserAuthenticator()        
        userAuthenticator.signUpOrganization(usernameInput.text!, firstName: firstNameInput.text!, lastName: lastNameInput.text!, email: emailAddressInput.text!, password: passwordInput.text!, tags: tags, organizationName: organizationNameInput.text!, organizationWebsiteUrl: organizationWebsite.text!, organizationDescription: organizationDescription.text!, completion: {(user:User, organization:Organization) -> Void in
                self.signedInUser = user
                self.signedInOrganization = organization
                dispatch_async(dispatch_get_main_queue()) {
                [unowned self] in
                    self.performSegueWithIdentifier("organizationSignedIn", sender: self)
                }
            })
    }
    @IBAction func abortionChecked(sender: AnyObject) {
        if(tags.contains("abortion")){
            tags.removeAtIndex(tags.indexOf("abortion")!)
            abortionCheckBox.backgroundColor = UIColor.whiteColor()
        }
        else{
            tags.append("abortion")
            abortionCheckBox.backgroundColor = UIColor.init(red: 56/255, green: 159/255, blue: 222/255, alpha: 1)
        }
    }
    @IBAction func cyberSecurityChecked(sender: AnyObject) {
        if(tags.contains("cyberSecurity")){
            tags.removeAtIndex(tags.indexOf("cyberSecurity")!)
            cyberSecurityCheckBox.backgroundColor = UIColor.whiteColor()
        }
        else{
            tags.append("cyberSecurity")
            cyberSecurityCheckBox.backgroundColor = UIColor.init(red: 56/255, green: 159/255, blue: 222/255, alpha: 1)
        }
    }
    @IBAction func domesticAbuseChecked(sender: AnyObject) {
        if(tags.contains("domesticAbuse")){
            tags.removeAtIndex(tags.indexOf("domesticAbuse")!)
            domesticAbuseCheckBox.backgroundColor = UIColor.whiteColor()
        }
        else{
            tags.append("domesticAbuse")
            domesticAbuseCheckBox.backgroundColor = UIColor.init(red: 56/255, green: 159/255, blue: 222/255, alpha: 1)
        }
    }
    @IBAction func womensRightsChecked(sender: AnyObject) {
        if(tags.contains("womensRights")){
            tags.removeAtIndex(tags.indexOf("womensRights")!)
            womensRightsCheckBox.backgroundColor = UIColor.whiteColor()
        }
        else{
            tags.append("womensRights")
            womensRightsCheckBox.backgroundColor = UIColor.init(red: 56/255, green: 159/255, blue: 222/255, alpha: 1)
        }
    }
    @IBAction func criminalJusticeChecked(sender: AnyObject) {
        if(tags.contains("criminalJustice")){
            tags.removeAtIndex(tags.indexOf("criminalJustice")!)
            criminalJusticeCheckBox.backgroundColor = UIColor.whiteColor()
        }
        else{
            tags.append("criminalJustice")
            criminalJusticeCheckBox.backgroundColor = UIColor.init(red: 56/255, green: 159/255, blue: 222/255, alpha: 1)
        }
    }
    @IBAction func homelessnessChecked(sender: AnyObject) {
        if(tags.contains("homelessness")){
            tags.removeAtIndex(tags.indexOf("homelessness")!)
            homelessnessCheckBox.backgroundColor = UIColor.whiteColor()
        }
        else{
            tags.append("homelessness")
            homelessnessCheckBox.backgroundColor = UIColor.init(red: 56/255, green: 159/255, blue: 222/255, alpha: 1)
        }
    }
    
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject!) {
        if (segue.identifier == "organizationSignedIn") {
            let destinationVC:OrganizationViewController = segue.destinationViewController as! OrganizationViewController
            print(signedInUser.username)
            destinationVC.user = signedInUser
            destinationVC.organization = signedInOrganization
        }
    }

}
