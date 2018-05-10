import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.sass'],
})
export class DiaryComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  SeeContacts() {
    this.router.navigate(['/contacts']);
  }

}
