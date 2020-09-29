import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-succes-snake',
  templateUrl: './succes-snake.component.html',
  styleUrls: ['./succes-snake.component.css']
})
export class SuccesSnakeComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: {message:string,image:string}) { }

  ngOnInit(): void {
  }

}
