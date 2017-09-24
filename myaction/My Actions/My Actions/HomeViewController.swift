//
//  HomeViewController.swift
//  My Actions
//
//  Created by Kiera Cawley on 19/11/2016.
//  Copyright © 2016 Kiera Cawley. All rights reserved.
//

import UIKit
import CloudBoost

class HomeViewController: UIViewController {
    
    @IBOutlet weak var usernameDisplay: UILabel!
    var user:User = User()
    

    @IBOutlet weak var organizationName: UILabel!
    @IBOutlet weak var organizationDescription: UITextView!
    @IBOutlet weak var organizationUrl: UILabel!
    @IBOutlet weak var stackView: UIStackView!
    override func viewDidLoad() {
        super.viewDidLoad()
        usernameDisplay.text = user.username

        for tag in user.tags{
            let findIssue = CloudQuery(tableName: "Issue")
            try! findIssue.equalTo("searchTerm", obj: tag.searchTerm)
            findIssue.find({ (issues) in
                let issuesParsed = issues.object! as! [AnyObject]
                if issuesParsed.count > 0{
                    let issue = issuesParsed[0] as! CloudObject
                    let findIssueOrganizations = CloudQuery(tableName: "OrganizationIssue")
                    try! findIssueOrganizations.equalTo("issue_id", obj: issue)
                    findIssueOrganizations.find({ (issueOrganizations) in
                        let issueOrganizationsParsed = issueOrganizations.object! as! [AnyObject]
                        for i in issueOrganizationsParsed{
                            let issueOrganization = i as! CloudObject
                            let findOrganization = CloudQuery(tableName: "Organization")
                            try! findOrganization.equalTo("id", obj: (issueOrganization.get("organization_id") as! CloudObject).get("_id"))
                            findOrganization.find({ (organizations) in
                                let parsedOrganizations = organizations.object as! [AnyObject]
                                let parsedOrganization = parsedOrganizations[0] as! CloudObject
                                self.organizationName.text = String(parsedOrganization.get("name"))
                                self.organizationName.text = String(parsedOrganization.get("description"))
                                self.organizationUrl.text = String(parsedOrganization.get("url"))
                            })
                        }
                    })
                }
            })
        }
        
    }
    
}
