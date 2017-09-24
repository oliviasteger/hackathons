class Organization{
  constructor(name,description,url,cloudObj){
    this._cloudObj=cloudObj;
    this.name=name;
    this.description=description;
    this.url=url;

  }
  set name(name){
  this._name=name;
 this._cloudObj.set("name",name);
  }
  get name(){
    return this._cloudObj.get("name");
  }
  set description(description){
    this._description=description;
    this._cloudObj.set("description",description);
  }
  get description(){
    return this._cloudObj.get("description");
  }
  set url(url){
    this._url=url;
    this._cloudObj.set("websiteUrl",url);
  }
  get url(){
    return this._cloudObj.get("websiteUrl");
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
