import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    // automatically redirect to the login page if the user is not logged in
    if(!(localStorage.getItem('currentUser'))) {
      this.router.navigate(['/login']);
    }
  }
}
