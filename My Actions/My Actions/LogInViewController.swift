//
//  LogInViewController.swift
//  My Actions
//
//  Created by Kiera Cawley on 20/11/2016.
//  Copyright © 2016 Kiera Cawley. All rights reserved.
//

import UIKit
import CloudBoost

class LogInViewController: UIViewController {
    @IBOutlet weak var usernameInput: UITextField!
    @IBOutlet weak var passwordInput: UITextField!
    
    var signedInUser:User = User()
    var signedInOrganisation:Organization = Organization()
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
   
    @IBAction func logIn(sender: AnyObject) {
        _ = CloudApp(appID: "fqsljkxpzrnk", appKey: "6df70624-7b47-488b-8d35-559631eb9687")
        let myUserAuthenticator = UserAuthenticator()
        myUserAuthenticator.logIn(usernameInput.text!, password: passwordInput.text!, completion: {(user:User, organization:Organization, isOrganization:Bool) -> Void in
            self.signedInUser = user
            if isOrganization{
                print("EWbwehbfehwjbf")
                self.signedInOrganisation = organization
                dispatch_async(dispatch_get_main_queue()) {
                    [unowned self] in
                    self.performSegueWithIdentifier("organizationLoggedIn", sender: self)
                }
            }
            else{
                print("eee")
                dispatch_async(dispatch_get_main_queue()) {
                    [unowned self] in
                    self.performSegueWithIdentifier("userLoggedIn", sender: self)
                }
            }
        })
    }
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject!) {
        if (segue.identifier == "userLoggedIn") {
            
            let destinationVC:HomeViewController = segue.destinationViewController as! HomeViewController
            
            destinationVC.user = signedInUser
        }
        if (segue.identifier == "organizationLoggedIn") {
            
            let destinationVC:OrganizationViewController = segue.destinationViewController as! OrganizationViewController
            
            destinationVC.user = signedInUser
            destinationVC.organization = signedInOrganisation
            
        }
        
    }
}
