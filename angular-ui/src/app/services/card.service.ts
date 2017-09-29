import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Card} from '../models/Card';

@Injectable()
export class CardService {
  constructor(private http: Http) {
  }
  private apiUrl = '/api/cards/unsorted';

  private sortUrl = '/api/cards/sorted';

  static findCardUrl(cardName: string) {
    return '/api/cards/' + encodeURIComponent(cardName);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getUnsortedCard(): Promise<Card> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json() as Card)
      .catch(CardService.handleError);
  }

  search(cardName: string) {
    return this.http.get(CardService.findCardUrl(cardName))
      .toPromise()
      .then(response => response.json() as Card)
      .catch(CardService.handleError);
  }

  sortCard(card: Card): Promise<Card> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.sortUrl, card, options)
      .toPromise()
      .then(response => response.json() as Card);
  }
}
