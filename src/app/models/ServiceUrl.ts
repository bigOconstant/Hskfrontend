export class ServiceUrl{
    url:string;
    constructor() {
        this.url = "http://"+window.location.hostname+":8000";
    }
}