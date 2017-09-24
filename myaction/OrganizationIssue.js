class OrganizationIssue{
  constructor(organization_id,issue_id,cloudObj){
        this._cloudObj=cloudObj;
    this.issue_id=issue_id;
    this.organization_id=organization_id;

  }
  set issue_id(issue_id){
    this._issue_id=issue_id;
    this._cloudObj.set("issue_id",issue_id);
  }
  get issue_id(){
    return this._cloudObj.get("issue_id");
  }
  set organization_id(organization_id){
    this._organization_id=organization_id;
    this._cloudObj.set("organization_id",organization_id);
  }
  get organization_id(){
    return this._cloudObj.get("organization_id");
  }
  save() {
   this._cloudObj.save({
     success: (obj) => {},
     error: (err) => {
       console.log(err);
     }
   });
 }
 delete() {
   this._cloudObj.delete({
     success: (obj) => {},
     error: (err) => {
       console.log(err);
       $(".error").html(err);
     }
   });
 }
}
