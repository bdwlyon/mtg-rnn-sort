import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;

    loading: boolean;
    error: string;

    constructor(private router: Router, private authService: AuthService){
    }

    ngOnInit() {
        // reset login status
        this.authService.logout();
    }

    login() {
        this.loading = true;
        this.authService.login(this.username, this.password)
            .then(result => {
                if(result === true) {
                    this.router.navigate(['/']);
                }
                else {
                    console.log("setting the error message because the promise returned false");
                   this.error = 'Invalid username and/or password';
                   this.loading = false;
                }
            }, error => {
                this.loading = false;
                console.log('Error: ', error);
                this.error = `Something went wrong: ${error}`;
            });
    }
}