import { Component } from '@angular/core';

import { CardService} from '../services/card.service';
import { Card } from '../models/Card';
import { Router } from '@angular/router';
import { CardUtil } from '../utils/card.util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  card: Card;

  cardName: string;
  templateStyle: string[];
  parsedCardCost = '<b>Loading...</b>';
  parsedCardText: string;

  cardNotFound: boolean;

  constructor(private router: Router, private cardService: CardService) {
  }

  onSearch(cardName: string) {
    this.card = null;
    this.cardService.search(cardName).then(foundCard => {
      if(!foundCard) {
        this.cardNotFound = true;
      }
      else {
        this.cardNotFound = false;
        this.card = foundCard;
        this.setTemplateStyle(this.card.types, this.card.colors);
        this.parsedCardCost = CardUtil.parseAllSymbols(this.card.manaCost, this.card.name);
        this.parsedCardText = CardUtil.parseAllSymbols(this.card.text, this.card.name);
      }
    });
  }

  setTemplateStyle(cardTypes: string[], cardColors: string[]) {
    this.templateStyle = [];
    this.templateStyle.push('card-template');
    let templateType = '';
    let templateColor = '';
    if (cardTypes.includes('creature')) {
      templateType = 'creature';
    } else {
      templateType = 'spell';
    }

    if (cardColors.length > 1) {
      templateColor = 'multi';
    } else {
      templateColor = cardColors[0].toLowerCase();
    }
    const tmp = 'template-' + templateColor + '-' + templateType;
    this.templateStyle.push(tmp);
  }
}
