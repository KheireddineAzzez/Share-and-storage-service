
 /**
 * @description This Class responsible on the charts display
 */
  import { Component, Inject, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/client/auth-service.service';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { user_class } from 'src/app/models/user_model';
import { ChartDataSets, ChartOptions,LinearScale ,Chart ,ChartLineOptions} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { read } from 'server/models/read';
import { write } from 'server/models/write';

@Component({
selector: 'app-chatuser',
templateUrl: './chatuser.component.html',
styleUrls: ['./chatuser.component.css']
})
export class ChatuserComponent implements OnInit {
Menu_nav_hide:boolean=false;//Hide the nav bar

constructor( private service:ServiceclientService,private auth:AuthServiceService) { }

;
/**
 * data_write contains all writed action
 * @type {Array<number>}
 */
data_write=new Array<number>();

array_data=new Array()
async ngOnInit(): Promise<void> {
this.service.listen_to_real_data().subscribe()
await  this.service.get_chart_static().then((data)=>{

  /**
   *
   * subscribe to chart soket.io
   * @type { ServiceclientService } METHOD
   */

let write_upload=this.filter_write_data(data.chart_write.filter((val)=>{if(val.type=='upload'){return val}}))//
let Delete_data=this.filter_write_data(data.chart_write.filter((val)=>{if(val.type=='Delete'){return val}}))
this.barChartData.push({data:write_upload,label:'Uploaded DATA Per MB'})
this.barch_deletedata.push({data:Delete_data,label:'Deleted DATA Per MB'})
})


this.service.get_chart_data().subscribe((data)=>{
let write_upload=this.filter_write_data(data.chart_write.filter((val)=>{if(val.type=='upload'){return val}}))
let Delete_data=this.filter_write_data(data.chart_write.filter((val)=>{if(val.type=='Delete'){return val}}))

this.barch_deletedata[0].data=Delete_data;
this.barChartData[0].data=write_upload
})



}
openside($event){
this.Menu_nav_hide=!this.Menu_nav_hide
}
lineroption:ChartLineOptions=new Object() as ChartLineOptions;
barChartData: ChartDataSets[] = [  ];
lineChartLabels: Label[] =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


lineChartOptions = {
responsive: true,
};

/**  Delete Color */
Delete_chart_color: Color[] = [
{
borderColor: 'black',
backgroundColor: '    rgb(95,99,71,0.50)   ',
hoverBackgroundColor:'dds'
},
];
/**  Upload Color */
lineChartColors: Color[] = [
{
borderColor: 'black',
backgroundColor: 'rgb(225,99,71,0.50)      ',
hoverBackgroundColor:'dds'
},
];

lineChartLegend = true;
lineChartPlugins = [];
lineChartType = 'line';
barch_deletedata:ChartDataSets[]=[]
filter_write_data( chart_write: write[]){
let arr=new Array<number>();
let some=0;
for(let i=0;i<=6;i++){
chart_write.forEach(el=>{
if( (new Date(el.Date)).getDay()==i){

some=el.Taile+some
}
})
arr.push(some)

some=0

}
this.data_write=arr.slice(0,(new Date()).getDay()+1)
return arr.slice(0,(new Date()).getDay()+1)
}
}


