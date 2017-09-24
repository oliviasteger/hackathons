//
//  Issue.swift
//  My Actions
//
//  Created by Kiera Cawley on 20/11/2016.
//  Copyright © 2016 Kiera Cawley. All rights reserved.
//

import UIKit
class Issue{
    let name:String
    let details:String
    let searchTerm:String
    init(name:String, details:String, searchTerm:String){
        self.name = name
        self.details = details
        self.searchTerm = searchTerm
    }
}