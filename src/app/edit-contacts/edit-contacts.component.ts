import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

// services
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.sass'],
  providers: [ ContactsService ]
})
export class EditContactsComponent implements OnInit {

  private id: number;
  public updateContactForm: FormGroup;
  public contact: any;
  public msg: string;

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private route: ActivatedRoute
  ) {
    this.updateContactForm = this.fb.group({
      id: [null],
      name: [null],
      lastname: [null],
      number: [null],
      email: [null]
    });
  }

  ngOnInit() {
    this.getParams();
    this.getContacts();
  }

  getParams() {
    this.route.params.forEach((p: Params) => {
      this.id = +p['id'];
    });
  }

  setFormValues() {
    this.updateContactForm.controls['id'].setValue(this.contact.idContact);
    this.updateContactForm.controls['name'].setValue(this.contact.name);
    this.updateContactForm.controls['lastname'].setValue(this.contact.lastname);
    this.updateContactForm.controls['number'].setValue(this.contact.number);
    this.updateContactForm.controls['email'].setValue(this.contact.email);
  }

  getContacts() {
    this.contactsService.getApiContactsOneByOne(this.id).subscribe(
      data => {
        this.contact = data['contact'][0];
      },
      err => console.log(err),
      () => {
        this.setFormValues();
      }
    );
  }

  editContact() {
    this.contactsService.putApiContact(this.updateContactForm.value).subscribe(
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
