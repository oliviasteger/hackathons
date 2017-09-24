class UserIssue{
  constructor(user_id,issue_id,cloudObj){
        this._cloudObj=cloudObj;
    this.user_id=user_id;
    this.issue_id=issue_id;

  }
  set user_id(user_id){
    this._user_id=user_id;
    this._cloudObj.set("user_id",user_id);
  }
  get user_id(){
    return this._cloudObj.get("user_id");
  }
  set issue_id(issue_id){
    this._issue_id=issue_id;
    this._cloudObj.set("issue_id",issue_id);
  }
  get issue_id(){
    return this._cloudObj.get("issue_id");
  }
  save() {
   this._cloudObj.save({
     success: (obj) => {
       console.log(obj);
     },
     error: (err) => {
       console.log(err);
     }
   });
 }
 delete() {
   this._cloudObj.delete({
     success: (obj) => {
      console.log(obj);
     },
     error: (err) => {
       console.log(err);
       $(".error").html(err);
     }
   });
 }
}
