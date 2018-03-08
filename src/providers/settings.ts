import {Storage} from '@ionic/storage';
import { Injectable } from '@angular/core';
import { IMenuItem } from '../interfaces/app-interfaces';

@Injectable()
export class AppSettings{
    constructor(public storage:Storage){}

    public set(settingName:String,value){
        this.storage.set(`setting:${settingName}`,value);
    }

    public get(settingName:String){
        console.log(this.storage.get(`setting:${ settingName }`));
        return this.storage.get(`setting:${ settingName }`);
      }    
}