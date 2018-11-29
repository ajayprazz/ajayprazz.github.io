import { Component } from '@angular/core';
import { Detail } from "./../services/detail.class";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public detail;
  public sending: boolean = false;

  constructor() {
    this.detail = new Detail({});
  }

  sendNow() {
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
    }, 4000);
  }

}
