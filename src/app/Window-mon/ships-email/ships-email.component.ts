import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import *as  email_valid from 'email-validator'
@Component({
  selector: 'app-ships-email',
  templateUrl: './ships-email.component.html',
  styleUrls: ['./ships-email.component.css']
})
export class ShipsEmailComponent implements OnInit {
@Input()Emails;
  constructor(private ser:ServiceclientService) { }
  readonly separatorKeysCodes: number[] = [ENTER,COMMA,SPACE];

  ngOnInit(): void {
  }
  remove(el :string): void {
    const index = this.Emails.indexOf(el);

    if (index >= 0) {
      this.Emails.splice(index, 1);
    }
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.Emails.push( value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

 }
