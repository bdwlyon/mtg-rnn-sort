import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CardService } from '../services/card.service';
import {Card} from '../models/Card';
import {Tags} from '../models/Tags';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import {CurrentUser} from "../models/CurrentUser";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css', '../loading-spinner.css']
})
export class SortComponent implements OnInit {

  card: Card;

  loadingCard: boolean = false;
  sortSuccess: boolean = false;
  sortFail: boolean = false;

  validity = "YES";

  tags: Tags = new Tags();

  constructor(private router: Router,
              private cardService: CardService,
              private modalService: NgbModal) {
  }
    printCard(card: Card): string {
      return `{"name": ${card.name}, "validity": ${card.validity}, "tags": ${card.tags.toString()}}`;
  }

  ngOnInit() {
      // reset our state
      this.loadingCard = true;
      this.validity = "";
      this.tags = new Tags();
      this.sortSuccess = false;
      this.sortFail = false;

      this.cardService.getUnsortedCard().then(card => {
          this.card = card;
          this.loadingCard = false
      });
  }

  open(content) {
      this.modalService.open(content, {size: "lg"});
  }

  submit() {
      if (localStorage.getItem('currentUser')) {
          const currentUser = JSON.parse(localStorage.getItem('currentUser')) as CurrentUser;
          this.card.validity = this.validity;
          this.card.tags = this.tags;
          this.cardService.sortCard(this.card, currentUser.token)
              .then(sortedCard => {
                  console.log(`got the sorted card back from the spring server: ${this.printCard(sortedCard)}`);
                  this.sortSuccess = true;

                  setTimeout(() => {
                  this.ngOnInit();
                  window.scrollTo(0,0);
                  }, 1250)
              },
              error => {
                  console.error("Error attempting to sort card", error);
                  if(error === "UNAUTHORIZED") {
                      this.router.navigate(['/login']);
                  }
                  this.sortFail = true;
              });
      }
      else {
          // user is not authenticated, prompt for login
          this.router.navigate(['/login']);
      }
  }
}
