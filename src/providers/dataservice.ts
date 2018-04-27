import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface ICustomerItem{
    CardCode:string;
    CardName:string;
    RFC:string;
    PymntGroup:string;
    Phone1:string;
    Email:string;        
    CreditLimit:number;
    GroupName:string;
}

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

    getCustomers$(keyword:string): Observable<ICustomerItem[]> { //Resultados simulando obtener los datos de un http api con observable
        let results:ICustomerItem[]=[{CardCode:"C9999S01",CardName:"CONSUMIDOR FINAL/CLIENTE CONTADO S1",RFC:"0000000000000",PymntGroup:"Contado",Phone1:"2290-1101",Email:"sala1@larachycia.com",CreditLimit:10000,GroupName:"Contado"},
                                     {CardCode:"C9999S02",CardName:"CONSUMIDOR FINAL S2",RFC:"0000000000000",PymntGroup:"a 30 dias clientes",Phone1:"2290-1102",Email:"sala2@larachycia.com",CreditLimit:10000,GroupName:"Contado"},
                                     {CardCode:"C9999S03",CardName:"CONSUMIDOR FINAL S3",RFC:"0000000000000",PymntGroup:"Contado",Phone1:"2290-1103",Email:"sala3@larachycia.com",CreditLimit:10000,GroupName:"Contado"},
                                     {CardCode:"C9999S04",CardName:"CONSUMIDOR FINAL S4",RFC:"0000000000000",PymntGroup:"Contado",Phone1:"2290-1104",Email:"sala4@larachycia.com",CreditLimit:10000,GroupName:"Contado"},
                                    ];

        return new Observable((observer)=>{            
            let records=results.filter(item=>{              
                            return item.CardName.toLowerCase().indexOf(keyword.toLowerCase())>-1;
                        });                           
            observer.next(records);
            observer.complete();
            });
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}