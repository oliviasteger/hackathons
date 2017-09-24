class Protest{
  constructor(name,location,cloudObj){
    this._cloudObj=cloudObj;
    this.name=name;
    this.location=location;

  }
  set name(name){
  this._name=name;
 this._cloudObj.set("name",name);
  }
  get name(){
    return this._cloudObj.get("name");
  }
  set location(location){
    this._location=location;
    this._cloudObj.set("location",location);
  }
  get location(){
    return this._cloudObj.get("location");
  }

  save() {
   this._cloudObj.save({
     success: (obj) => {
       displayTags();
     },
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
