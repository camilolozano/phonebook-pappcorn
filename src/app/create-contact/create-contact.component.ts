import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// services
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
  providers: [ ContactsService ]
})
export class CreateContactComponent implements OnInit {

  public createContactForm: FormGroup;
  public msg: string;

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService,
  ) {
    this.createContactForm = this.fb.group({
      id: [null],
      name: [null],
      lastname: [null],
      number: [null],
      email: [null]
    });
  }

  ngOnInit() {
  }

  createContact() {
    this.contactsService.postApiContact(this.createContactForm.value).subscribe(
      res => {
        this.msg = res['msg'];
      },
      err => console.log(err),
      () => {
        setTimeout(() => {
          this.msg = '';
        }, 4000);
      }
    );
  }

}
