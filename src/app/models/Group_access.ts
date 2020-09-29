import {folder_classification} from '../models/enums/Enum_folders'
import {read} from '../../../server/models/read'
import {write} from '../../../server/models/write'
export  interface Groutp_usage_data{
uploaded_data:Array<write>
downloaded_data:Array<read>
}
export class group{
folder_id:string
token:string
group_id:string
goroup_name:string;
Creation_date:Date
Members: Array<{email:string,accepted:boolean}>
Access:folder_classification
Usage_data:Groutp_usage_data={downloaded_data:new Array<read>(),uploaded_data:new Array<write>()}
elimination_users:Array<string>
}
