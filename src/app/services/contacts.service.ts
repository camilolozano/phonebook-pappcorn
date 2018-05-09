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

  getApiContactsOneByOne(id: number) {
    return this.httpClient.get(`${this.API_URL}/contacts/${id}`);
  }

  putApiContact(contact: any) {
    return this.httpClient.put(`${this.API_URL}/contacts`, contact);
  }

  postApiContact(contact: any) {
    return this.httpClient.post(`${this.API_URL}/contacts`, contact);
  }

  getApiDeleteContact(id: any) {
    return this.httpClient.put(`${this.API_URL}/contacts/remove`, id);
  }

}
