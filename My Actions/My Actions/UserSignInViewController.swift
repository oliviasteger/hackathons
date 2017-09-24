//
//  UserSignInViewController.swift
//  My Actions
//
//  Created by Kiera Cawley on 19/11/2016.
//  Copyright © 2016 Kiera Cawley. All rights reserved.
//

import UIKit
import CloudBoost

class UserSignInViewController: UIViewController {
    
    var tags:[String] = []
    var userLoggedIn:User = User()
    
    @IBOutlet weak var firstNameTextField: UITextField!
    @IBOutlet weak var lastNameTextField: UITextField!
    @IBOutlet weak var usernameTextField: UITextField!
    @IBOutlet weak var emailAddressTextField: UITextField!
    @IBOutlet weak var passwordTextField: UITextField!
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
        userAuthenticator.signUpUser(usernameTextField.text!, firstName: firstNameTextField.text!, lastName: lastNameTextField.text!, email: emailAddressTextField.text!, password: passwordTextField.text!, tags: tags, completion: {(user:User) -> Void in
                self.userLoggedIn = user
            dispatch_async(dispatch_get_main_queue()) {
                [unowned self] in
                self.performSegueWithIdentifier("signUp", sender: self)
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
        if (segue.identifier == "signUp") {

            let destinationVC:HomeViewController = segue.destinationViewController as! HomeViewController

            destinationVC.user = userLoggedIn
        }
    }
}
