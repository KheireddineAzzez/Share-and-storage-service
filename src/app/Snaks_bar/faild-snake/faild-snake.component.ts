import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-faild-snake',
  templateUrl: './faild-snake.component.html',
  styleUrls: ['./faild-snake.component.css']
})
export class FaildSnakeComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: {message:string,image:string}) { }

  ngOnInit(): void {
  }

}
