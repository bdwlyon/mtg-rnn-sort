import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Promise<boolean> {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http.post('/api/authenticate', {username: username, password: password}, options)
            .map(response => {
                console.log(response);
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if(token) {
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between pages
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
                    return true;
                }
                else {
                    return false;
                }
        }).toPromise()
            .catch(AuthService.handleError);
    }

    logout(): void {
        // clear token and remove user from local storage
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    static handleError(error: any): Promise<any> {
        console.error('Error: ', error);
        if(error.status === 401) {
            return Promise.resolve(false);
        }
        else {
            return Promise.reject(error.message || error);
        }
    }

}