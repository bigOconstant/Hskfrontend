import { environment } from '../../environments/environment';

export class ServiceUrl{
    url:string;
    constructor() {
        this.url = environment.host;;
    }
}