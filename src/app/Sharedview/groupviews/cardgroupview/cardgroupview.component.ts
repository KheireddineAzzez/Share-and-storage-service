import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { group } from 'src/app/models/Group_access';
import { user_class } from 'src/app/models/user_model';

@Component({
  selector: 'app-cardgroupview',
  templateUrl: './cardgroupview.component.html',
  styleUrls: ['./cardgroupview.component.css']
})
export class CardgroupviewComponent implements OnInit {
@Input() group :group
@Output() event_delet=new EventEmitter<group>()
user_competed_uploaded:boolean=true
user_memebers=new Array<user_class>()
hide_name=true;

  constructor(private service :ServiceclientService) {

   }

  async ngOnInit(): Promise<void> {
for await(const el of this.group.Members){
  console.log(el)
 await  this.service.get_others_users_basic_info(el.email).toPromise().then((user)=>{

    this.user_memebers.push(user)
    console.log(user)
    this.user_competed_uploaded=false;
   })

}
  }
delete_group(group){
  this.event_delet.emit(group)
  console.log(group)
}
}
