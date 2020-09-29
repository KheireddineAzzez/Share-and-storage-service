import { Component, Input, OnInit } from '@angular/core';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { Foldermodel } from 'src/app/models/foldermodel';
import { Foldershare } from 'src/app/models/foldershare';
import { FolderlinkgenComponent } from 'src/app/window-mon/folderlinkgen/folderlinkgen.component';
import { WinService } from 'src/app/Window-mon/win.service';

@Component({
  selector: 'app-menufolder',
  templateUrl: './menufolder.component.html',
  styleUrls: ['./menufolder.component.css']
})
export class MenufolderComponent implements OnInit {
@Input() Folder:Foldermodel
  constructor(private winser:WinService,private service_client:ServiceclientService ) { }

  ngOnInit(): void {
  }
  Folder_access(){
    console.log(this.Folder)
    this.winser.open_access_Foldet(FolderlinkgenComponent,this.Folder)

  };
}
