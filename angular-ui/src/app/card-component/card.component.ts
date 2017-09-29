import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {CardService} from "../services/card.service";
import {Router} from "@angular/router";
import {Card} from "../models/Card";
import {CardUtil} from "../utils/card.util";

@Component({
  selector: 'card-component',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnChanges{

  @Input() card: Card;

  cardName: string;
  templateStyle: string[];
  parsedCardCost = '<b>Loading...</b>';
  parsedCardText: string;

  constructor(private router: Router, private cardService: CardService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.card) {
      this.setTemplateStyle(this.card.types, this.card.colors);
      this.parsedCardCost = CardUtil.parseAllSymbols(this.card.manaCost, this.card.name);
      this.parsedCardText = CardUtil.parseAllSymbols(this.card.text, this.card.name);
    }
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
