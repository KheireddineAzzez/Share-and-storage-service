import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/client/auth-service.service';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { Foldermodel } from 'src/app/models/foldermodel';
import { Foldershare } from 'src/app/models/foldershare';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
Path:string;
  constructor(private route:ActivatedRoute,private router:Router) { }
  displayedColumns: string[] = ['check', 'name',"menu" ,'date', 'size'];
  @Input() dataSource :MatTableDataSource<Foldermodel>;

  ngOnInit(): void {


  }

  get_correct_folder_file_name(name:string):string{
    let _Path_name=name.split('/')
    if(name.lastIndexOf('/')+1==name.length){
return(_Path_name[_Path_name.length-2]+"/")
    }

    if(_Path_name.length>=1){

    return   _Path_name[_Path_name.length-1]

    }
    else{
    return name
    }
    }


     acce_folder(Token:string){
       this.router.navigate(['sharepoint/',Token])



     }
}
