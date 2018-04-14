import {Injectable, group} from '@angular/core';
import { Documents } from '../class/app-objects';
import { AppSettings } from './settings';
import { ITerminalConfig, ISelectList } from '../interfaces/app-interfaces';

@Injectable()
export class ShareService{
    invoice:Documents;
    salesPersons:Array<ISelectList>;
    pricesList:Array<ISelectList>;
    paymentTerms:Array<ISelectList>;    
    wareHouses:Array<string>;
    countries:Array<{id:string,name:string}>;
    terminalConfig:ITerminalConfig;

    constructor(private appSettings:AppSettings){
        this.pricesList=[{id:1,name:"01-Precios Detalle con ISV"},
                         {id:2,name:"02-Precios Detalle sin ISV"},
                         {id:3,name:"03-Precios Mayoreo Local TGU"},
                         {id:4,name:"04-Precios Mayoreo Foraneo TGU"},
                         {id:5,name:"05-Precios Mayoreo SPS"},
                         {id:6,name:"06-Precios Mayoreo Foraneo SPS"},
                         {id:7,name:"12-Precio ORGILL"},];

        this.salesPersons=[{id:-1,name:"--Ningun empleado del departamento"},
                            {id:1,name:"Junior Perez"},
                            {id:2,name:"Yamileza Gonzales"},
                            {id:3,name:"Jose Arturo Flores"},
                            {id:4,name:"Carlos Pineda Chacon"},
                            {id:5,name:"Maritza Nohemi Colindres"},
                        ];

        this.paymentTerms=[{id:1,name:"Contado"},
                            {id:2,name:"Credito 30 dias"},
                            {id:3,name:"Credito 60 dias"},
                            {id:4,name:"Credito 90 dias"},
                            {id:5,name:"Credito 120 dias"},                            
                        ];

        this.wareHouses=["S1TGU",
                        "S2TGU",
                        "S3TGU",
                        "S4TGU",
                        "SP1TGU",
                        "SP2TGU",
                        "B1TGU",
                        "B2TGU",
                        "B3TGU",
                        "B5TGU",
                        "B6TGU"];
                                                
        this.countries=[{id:"HN",name:"Honduras"},
                        {id:"GT",name:"Guatemala"},
                        {id:"ES",name:"El Salvador"},
                        {id:"CR",name:"Costa Rica"},
                        {id:"NC",name:"Nicaragua"}];
                        
        this.terminalConfig={
            store:{id:"S02",name:"SALA #2"},
            customer:{cardCode:"C9999S02",cardName:"CONSUMIDOR FINAL",
                      RFC:"000000000000",groupNum:1,phone:"",email:"sistemas@larachycia.com",state:"Tegucigalpa",country:"HN",address:"Col. Miramontes, Calle la Salud",imagePath:"assets/imgs/male-user.png"},
            salesPerson:{id:-1,name:"--Ningun empleado del departamento"},
            wareHouse:{id:"S2TGU",name:"Sala 2 Tegucigalpa"},
            priceList:{id:2,name:"02-Precios Detalle sin ISV"},
            series:[{objectCode:"13",id:56,name:"S2TGUCON"},
                    {objectCode:"13",id:58,name:"S2TGUCRE"}]
        }
                      
    }
}
