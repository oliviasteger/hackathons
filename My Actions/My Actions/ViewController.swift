//
//  ViewController.swift
//  My Actions
//
//  Created by Kiera Cawley on 19/11/2016.
//  Copyright © 2016 Kiera Cawley. All rights reserved.
//

import UIKit
import CloudBoost

class ViewController: UIViewController {

    @IBOutlet weak var userSignUpButton: UIButton!
    
    @IBOutlet weak var organizationSignUpButton: UIButton!
    
    @IBOutlet weak var logInButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        userSignUpButton.layer.borderWidth = 2;
        userSignUpButton.layer.cornerRadius = 20;
        userSignUpButton.layer.borderColor = UIColor.init(red: 56/255, green: 159/255, blue: 222/255, alpha: 1).CGColor
        
        organizationSignUpButton.layer.borderWidth = 2;
        organizationSignUpButton.layer.cornerRadius = 20;
        organizationSignUpButton.layer.borderColor = UIColor.init(red: 56/255, green: 159/255, blue: 222/255, alpha: 1).CGColor
        
        logInButton.layer.borderWidth = 2;
        logInButton.layer.cornerRadius = 20;
        logInButton.layer.borderColor = UIColor.init(red: 56/255, green: 159/255, blue: 222/255, alpha: 1).CGColor
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

