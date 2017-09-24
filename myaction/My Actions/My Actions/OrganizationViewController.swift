//
//  OrganizationViewController.swift
//  My Actions
//
//  Created by Kiera Cawley on 20/11/2016.
//  Copyright © 2016 Kiera Cawley. All rights reserved.
//

import UIKit
import CloudBoost

class OrganizationViewController: UIViewController {
    @IBOutlet weak var storeNameDisplay: UILabel!
    @IBOutlet weak var storeUrlDisplay: UILabel!
    @IBOutlet weak var storeDescriptionDisplay: UITextView!
    
    
    @IBOutlet weak var usernameDisplay: UILabel!
    var user:User = User()
    var organization:Organization = Organization()
    override func viewDidLoad() {
        super.viewDidLoad()
        usernameDisplay.text = String(user.username)
        storeNameDisplay.text = organization.name
        storeUrlDisplay.text = organization.webstiteUrl
        storeDescriptionDisplay.text = organization.description
        print(organization.issues)
    }
    
    @IBAction func logOut(sender: AnyObject) {
    }
}

