class ProtestIssue{
  constructor(protest_id,issue_id,cloudObj){
        this._cloudObj=cloudObj;
    this.issue_id=issue_id;
    this.protest_id=protest_id;

  }
  set issue_id(issue_id){
    this._issue_id=issue_id;
    this._cloudObj.set("issue_id",issue_id);
  }
  get issue_id(){
    return this._cloudObj.get("issue_id");
  }
  set protest_id(protest_id){
    this._protest_id=protest_id;
    this._cloudObj.set("protest_id",protest_id);
  }
  get protest_id(){
    return this._cloudObj.get("protest_id");
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
