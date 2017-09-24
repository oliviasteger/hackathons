//
//  User.swift
//  My Actions
//
//  Created by Kiera Cawley on 19/11/2016.
//  Copyright © 2016 Kiera Cawley. All rights reserved.
//

import Foundation

class User{
    let username:String
    let firstName:String
    let lastName:String
    let email:String
    let password:String
    var tags:[Issue]
    
    init(username:String, firstName:String, lastName:String, email:String, password:String, tags:[Issue]){
        self.username = username
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.password = password
        self.tags = tags
    }
    init(){
        self.username = "wesferwr34we"
        self.firstName = ""
        self.lastName = ""
        self.email = ""
        self.password = ""
        self.tags = []
    }
}