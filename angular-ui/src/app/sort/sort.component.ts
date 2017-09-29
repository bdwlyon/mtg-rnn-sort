import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CardService } from '../services/card.service';
import {Card} from '../models/Card';
import {Tags} from '../models/Tags';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  card: Card;

  validity = "YES";

  tags: Tags = new Tags();

  constructor(private router: Router,
              private cardService: CardService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.cardService.getUnsortedCard().then(card => this.card = card);
  }

  open(content) {
    this.modalService.open(content, {size: "lg"});
  }

  submit() {
    console.log("this is just a stub for now");
  }
}
