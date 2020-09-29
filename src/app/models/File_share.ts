  import {Filemodel} from './filemodel'
  export class file_share extends Filemodel{
    private _owner_id: string
    public get owner_id(): string {
      return this._owner_id
    }
    public set owner_id(value: string) {
      this._owner_id = value
    }


  }
