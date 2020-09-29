import { Component, Input, OnInit } from '@angular/core';
import { user_class } from 'src/app/models/user_model';

@Component({
  selector: 'app-menuperson',
  templateUrl: './menuperson.component.html',
  styleUrls: ['./menuperson.component.css']
})
export class MenupersonComponent implements OnInit {
@Input() user:user_class;
  constructor() { }
  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  ngOnInit(): void {
  }
  dds(trigger,button) {
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
      } if (!this.isMatMenuOpen) {
        trigger.closeMenu();
      } else {
        this.enteredButton = false;
      }
    }, 100)
  }
}
