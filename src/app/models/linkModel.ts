export class HomeLink{
  title:string;
  url:string;
  description:string;
  params:string;

  constructor(title:string,url:string,description:string,params:string){
    this.title = title;
    this.url = url;
    this.description = description;
    this.params = params;
  }
}