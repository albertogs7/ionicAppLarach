import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService{
    constructor(){}

    public grantAccess$(userName:string,pwd:string,optionId?:number):Observable<Boolean>{
        return new Observable((observer)=>{
                                            observer.next(true);
                                            observer.complete();
                                            });
    }

    public set(settingName:String,value){
        this.grantAccess$("hola","mundo").subscribe(
            
        );
    }

    public get(settingName:String){
        //console.log(this.storage.get(`setting:${ settingName }`));
        //return this.storage.get(`setting:${ settingName }`);
      }
}