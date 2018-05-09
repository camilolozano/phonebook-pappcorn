import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  API_URL = 'http://localhost:8000';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getApiGetContacts() {
    return this.httpClient.get(`${this.API_URL}/contacts`);
  }

}
