import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ ContactsService ]
})
export class ContactsComponent implements OnInit {

  public contacts: [any];

  constructor(
    private router: Router,
    private contactsService: ContactsService,
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  editContact(e: any) {
    const id = e.idContact;
    this.router.navigate(['edit-contacts', id]);
  }

  getContacts() {
    this.contactsService.getApiGetContacts().subscribe(
      data => {
        this.contacts = data['contacts'];
        console.log(this.contacts);
      }
    );
  }

}
