class OrganizationOwner{
  constructor(user_id,organization_id,cloudObj){
        this._cloudObj=cloudObj;
    this.user_id=user_id;
    this.organization_id=organization_id;

  }
  set user_id(user_id){
    this._user_id=user_id;
    this._cloudObj.set("user_id",user_id);
  }
  get user_id(){
    return this._cloudObj.get("user_id");
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
