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
  public msg: string;

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

  deleteContact(e: any) {
    const contact = {
      id: e
    };
    this.contactsService.getApiDeleteContact(contact).subscribe(
      res => {
        this.msg = res['msg'];
      },
      err => console.log(err),
      () => {
        setTimeout(() => {
          this.msg = '';
        }, 4000);
        this.getContacts();
      }
    );
  }

  getContacts() {
    this.contactsService.getApiGetContacts().subscribe(
      data => {
        this.contacts = data['contacts'];
      }
    );
  }

  createContact() {
    this.router.navigate(['create-contacts']);
  }

}
