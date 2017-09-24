//
//  UserAuthenticator.swift
//  My Actions
//
//  Created by Kiera Cawley on 19/11/2016.
//  Copyright © 2016 Kiera Cawley. All rights reserved.
//

import Foundation
import CloudBoost

class UserAuthenticator{
    init(){
        
    }
    
    func logIn(username:String, password:String, completion: (user: User, organization: Organization, isOrganization:Bool) -> Void){
        _ = CloudApp(appID: "fqsljkxpzrnk", appKey: "6df70624-7b47-488b-8d35-559631eb9687")
        let findUserObject = CloudQuery(tableName: "User")
        try! findUserObject.equalTo("username", obj: username)
        try! findUserObject.equalTo("password", obj: password)
        findUserObject.find { (userObjects) in
            let userObjectsParsed = userObjects.object! as! [AnyObject]
            let userObject = userObjectsParsed[0] as! CloudObject
            if(userObject.get("isOrganizationOwner") === true){
                let user = User(username: username, firstName: String(userObject.get("firstName")), lastName: String(userObject.get("lastName")), email: String(userObject.get("email")), password: password, tags: [])
                let findOrganizationUserRelation = CloudQuery(tableName: "OrganizationOwner")
                try! findOrganizationUserRelation.equalTo("user_id", obj: userObject)
                findOrganizationUserRelation.find({ (organizationUserRelations) in
                    let organizationUserRelationsParsed = organizationUserRelations.object! as! [AnyObject]
                    let organizationUserRelation = organizationUserRelationsParsed[0] as! CloudObject
                    let findOrganizationObject = CloudQuery(tableName: "Organization")
                    try! findOrganizationObject.equalTo("id", obj: (organizationUserRelation.get("organization_id") as! CloudObject).get("_id"))
                    findOrganizationObject.find({ (organizationObjects) in
                        let organizationObjectsParsed = organizationObjects.object! as! [AnyObject]
                        let organizationObject = organizationObjectsParsed[0] as! CloudObject
                        let organization = Organization(name: String(organizationObject.get("name")), websiteUrl: String(organizationObject.get("websiteUrl")), description: String(organizationObject.get("description")), issues: [])
                        let findOrganizationIssueRelation = CloudQuery(tableName: "OrganizationIssue")
                        try! findOrganizationIssueRelation.equalTo("organization_id", obj: organizationObject)
                        findOrganizationIssueRelation.find({ (organizationIssueRelations) in
                            let organizationIssueRelationsParsed = organizationIssueRelations.object! as! [AnyObject]
                            for x in organizationIssueRelationsParsed{
                                let organizationIssueRelation = x as! CloudObject
                                let findIssueObject = CloudQuery(tableName: "Issue")
                                try! findIssueObject.equalTo("id", obj: (organizationIssueRelation.get("issue_id") as! CloudObject).get("_id"))
                                findIssueObject.find({ (issueObjects) in
                                    let issueObjectsParsed = issueObjects.object! as! [AnyObject]
                                    let issueObject = issueObjectsParsed[0] as! CloudObject
                                    organization.issues.append(Issue(name: String(issueObject.get("name")), details: String(issueObject.get("details")), searchTerm: String(issueObject.get("searchTerm"))))
                                    if organization.issues.count == organizationIssueRelationsParsed.count{
                                        completion(user: user, organization: organization, isOrganization: true)
                                    }
                                })
                            }
                        })
                    })
                })
            }
            else{
                let user = User(username: username, firstName: String(userObject.get("firstName")), lastName: String(userObject.get("lastName")), email: String(userObject.get("email")), password: password, tags: [])
                let findUserIssueRelation = CloudQuery(tableName: "UserIssue")
                try! findUserIssueRelation.equalTo("user_id", obj: userObject)
                findUserIssueRelation.find({ (userIssueRelations) in
                    let userIssueRelationsParsed = userIssueRelations.object! as! [AnyObject]
                    for x in userIssueRelationsParsed{
                        let userIssueRelation = x as! CloudObject
                        let findIssue = CloudQuery(tableName: "Issue")
                        try! findIssue.equalTo("id", obj: (userIssueRelation.get("issue_id") as! CloudObject).get("_id"))
                        findIssue.find({ (issues) in
                            let issuesParsed = issues.object! as! [AnyObject]
                            let issue = issuesParsed[0] as! CloudObject
                            user.tags.append(Issue(name: String(issue.get("name")), details: String(issue.get("details")), searchTerm: String(issue.get("searchTerm")!)))
                            if user.tags.count == userIssueRelationsParsed.count{
                                completion(user: user, organization: Organization(), isOrganization: false)
                            }
                        })
                    }
                })
            }
        }
    }
    
    func signUpUser(username:String, firstName:String, lastName:String, email:String, password:String, tags:[String], completion: (user: User) -> Void){
        _ = CloudApp(appID: "fqsljkxpzrnk", appKey: "6df70624-7b47-488b-8d35-559631eb9687")
        
        let createUser = CloudObject(tableName: "User")
        
        createUser.set("username", value: username)
        createUser.set("firstName", value: firstName)
        createUser.set("lastName", value: lastName)
        createUser.set("email", value: email)
        createUser.set("password", value: password)
        createUser.set("verified", value: true)
        
        createUser.save({ response in
            if(response.success){
                let user = User(username: username, firstName: firstName, lastName: lastName, email: email, password: password, tags: [])
                for issue in tags{
                    let query = CloudQuery(tableName: "Issue")
                    try! query.equalTo("searchTerm", obj: issue)
                    query.find({ (response) in
                        let newUserIssueRelationship = CloudObject(tableName: "UserIssue")
                        newUserIssueRelationship.set("user_id", value: createUser)
                        let allResponses = response.object! as! [AnyObject]
                        let object = allResponses[0] as! CloudObject
                        newUserIssueRelationship.set("issue_id", value: object)
                        newUserIssueRelationship.save({ (saved) in
                            user.tags.append(Issue(name: String(object.get("name")), details: String(object.get("details")), searchTerm: String(object.get("searchTerm"))))
                            if user.tags.count == tags.count{
                                completion(user: user)
                            }
                        })
                    })
                }
                completion(user: user)
            }
            else{
                
            }
        })
    }
    func signUpOrganization(username:String, firstName:String, lastName:String, email:String, password:String, tags:[String], organizationName:String, organizationWebsiteUrl:String, organizationDescription:String, completion: (user: User, organization: Organization) -> Void){
        _ = CloudApp(appID: "fqsljkxpzrnk", appKey: "6df70624-7b47-488b-8d35-559631eb9687")
        let createUser = CloudObject(tableName: "User")
        createUser.set("username", value: username)
        createUser.set("firstName", value: firstName)
        createUser.set("lastName", value: lastName)
        createUser.set("email", value: email)
        createUser.set("password", value: password)
        createUser.set("isOrganizationOwner", value: true)
        createUser.set("verified", value: true)
        createUser.save { (createdUser) in
            if(createdUser.success){
                let createOrganization = CloudObject(tableName: "Organization")
                createOrganization.set("name", value: organizationName)
                createOrganization.set("description", value: organizationDescription)
                createOrganization.set("websiteUrl", value: organizationWebsiteUrl)
                createOrganization.save({ (createdOrganization) in
                    if(createdOrganization.success){
                       let createUserOrganizationRelation = CloudObject(tableName: "OrganizationOwner")
                        createUserOrganizationRelation.set("user_id", value: createUser)
                        createUserOrganizationRelation.set("organization_id", value: createOrganization)
                        createUserOrganizationRelation.save({ (createdUserOrganizationRelation) in
                            if(createdUserOrganizationRelation.success){
                                let user = User(username: username, firstName: firstName, lastName: lastName, email: email, password: password, tags: [])
                                let organization = Organization(name: organizationName, websiteUrl: organizationWebsiteUrl, description: organizationDescription, issues: [])
                                for issue in tags{
                                    let query = CloudQuery(tableName: "Issue")
                                    try! query.equalTo("searchTerm", obj: issue)
                                    query.find({ (response) in
                                        let createIssueOrganizationRelation = CloudObject(tableName: "OrganizationIssue")
                                        createIssueOrganizationRelation.set("organization_id", value: createOrganization)
                                        createIssueOrganizationRelation.set("issue_id", value: response.object![0])
                                        createIssueOrganizationRelation.save({ (result) in
                                            let allResponses = response.object! as! [AnyObject]
                                            let object = allResponses[0] as! CloudObject
                                            organization.issues.append(Issue(name: String(object.get("name")), details: String(object.get("details")), searchTerm: String(object.get("searchTerm"))))
                                            if organization.issues.count == tags.count{
                                                completion(user: user, organization: organization)
                                            }
                                        })
                                    })
                                }
                            }
                        })
                    }
                })
            }
            
        }
    }
}