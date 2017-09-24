//
//  Organization.swift
//  My Actions
//
//  Created by Kiera Cawley on 19/11/2016.
//  Copyright © 2016 Kiera Cawley. All rights reserved.
//

import Foundation
class Organization{
    let name:String
    let webstiteUrl:String
    let description:String
    var issues:[Issue]
    init(){
        self.name = ""
        self.description = ""
        self.webstiteUrl = ""
        self.issues = []
    }
    init(name:String, websiteUrl:String, description:String, issues:[Issue]){
        self.name = name
        self.description = description
        self.webstiteUrl = websiteUrl
        self.issues = issues
    }
}