import {IDocuments,ICustomers,IDocumentLines} from '../interfaces/app-interfaces';
import {AppSettings} from '../providers/settings';
import { DecimalType } from './app-enums';
import { PROP_METADATA } from '@angular/core/src/util/decorators';
import { ShareService } from '../providers/shareservice';

enum Property{
    TAXPERCENT,
    DISCPERCENT,
    DISCSUM,
    PRICE,
    QUANTITY,
}

export class Documents {    
    customer:ICustomers;
    numAtCard:string;
    docNum:number;
    fiscal1:string;
    fiscal2:string;
    fiscal3:string;
    fiscal4:string;
    docDate:Date;
    docDueDate:Date;
    slpCode:number;
    groupNum:number;
    priceList:number;    
    discPrcnt:number;
    discSum:number; 
    address:string; 
    comments:string;   
    

    private _subTotal:number=0;
    private _taxSum:number=0;
    private _docTotal:number=0;
    private _paidSum:number=0;
    private _lines:Array<DocumentLine>=[];//DocumentLines=new DocumentLines();
    
    private parent=this;
    private proxyHandler = {
        parent:this.parent,
        proxyChild:{
            parent:this.parent,            
            set: function(target, prop, value, receiver) {                                                        
                switch(prop){                                  
                    case "quantity":
                    case "price":
                    case "discPrcnt":
                    case "discSum":
                    case "taxPrcnt":                                                                                                      
                        this.parent._subTotal-=target["lineTotal"];//resto los valores anteriores de la linea
                        this.parent._taxSum-=target["taxSum"];                        
                        target[prop] = value;                
                        this.parent._subTotal+=target["lineTotal"]; //sumo los nuevos valores de la linea
                        this.parent._taxSum+=target["taxSum"];
                        this.parent._docTotal=this.parent.subTotal+this.parent.taxSum;                                                                 
                        break;                                        
                default:
                    target[prop] = value;
                    break;
                }             
                return true;
            }            
        },
        set: function(target, prop,value,receiver) {                                                
            if (typeof value==="object" && target[prop]===undefined) {
                target[prop]=new Proxy(value,this.proxyChild);                  
            }
            else target[prop]=value;
            
            return true;
                //return Reflect.get(target,prop,receiver);                                                   
        },        
    };
              
    private proxyLines=new Proxy(this._lines,this.proxyHandler);;

    constructor(public appSettings:AppSettings,private shareService:ShareService){
        this.customer=shareService.terminalConfig.customer;        
        this.slpCode=shareService.terminalConfig.salesPerson.id;
        this.priceList=shareService.terminalConfig.priceList.id;
        this.groupNum=shareService.terminalConfig.customer.groupNum;
        this.docDate=new Date();
        let parent=this.parent;

        Object.defineProperty(this._lines, 'add', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function(line){
                parent._subTotal+=line.lineTotal;
                parent._taxSum+=line.taxSum;    
                parent._docTotal=parent.subTotal+parent.taxSum;
                parent.proxyLines.push(line);
            }
          }); 
        
          Object.defineProperty(this._lines, 'remove', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function(index){
                let line=parent.proxyLines[index];
                parent._subTotal-=line.lineTotal;
                parent._taxSum-=line.taxSum;    
                parent._docTotal=parent.subTotal+parent.taxSum;                
                parent.proxyLines.splice(index,1);
            }
          }); 
        //this.lines.remove=function(index){console.log("llamada a funcion remove, index "+index)};
        //console.log(this.lines);
        //this._lines.add=function()
    }
    
    get lines():{Proxy:[Array<DocumentLines>],add:Function,remove:Function}{             
        let parent=this.parent;
        let proxyLines=this.proxyLines;        
        return proxyLines;       
    };          
    
    get subTotal():number{
        return this._subTotal;        
    }

    get taxSum():number{
        return this._taxSum;
    }

    get docTotal():number{
        return this._docTotal;
    }
}

export class DocumentLine {
    visOrder:number;
    itemCode:string;
    itemName:string;
    whsCode:string;
    taxCode:string;
    unitMsr:string;
    price:number;
    quantity:number=1;
    numPerMsr:number=1;
    stock:number=0;
    
    private _taxPrcnt:number=0;
    private _discPrcnt:number=0;
    
    constructor(public appSettings:AppSettings){                    
    }

    get discPrcnt():number{
        return (this._discPrcnt)*100;
    }

    set discPrcnt(value:number){
        this._discPrcnt=(value/100);
    }

    get priceAfterDisc():number{
        return this.price*(1-this._discPrcnt);
    }

    get priceAfterTax():number{
        return this.appSettings.round(this.priceAfterDisc*(1+this._taxPrcnt),DecimalType.PRICES);
    }

    get taxPrcnt():number{
        return (this._taxPrcnt)*100;
    }

    set taxPrcnt(value:number){        
        this._taxPrcnt=(value/100);
    }

    get taxSum():number{        
        return this.appSettings.round(this.priceAfterDisc*this._taxPrcnt*this.quantity,DecimalType.TOTALS);        
    }

    get lineTotalAfterTax():number{        
        return this.appSettings.round(this.quantity*this.priceAfterDisc*(1+this._taxPrcnt),DecimalType.TOTALS);       
    }

    get lineTotal():number{
        return this.appSettings.round((this.quantity*this.priceAfterDisc),DecimalType.TOTALS);        
    }
}

export class DocumentLines{
    private _lines:Array<DocumentLine>=[];

    //public constructor(appSettings:AppSettings){}

    get lines():Array<DocumentLine>{
        return this._lines;
    }
    add(line){
        this._lines.push(line);
    }
    remove(index){
        this._lines.splice(index);
    }
    values(){return 11111}
    value1(){return 11111}
    [Symbol.iterator](){return this._lines.values()};
}

export class Payment{
    series:number;
    docNum:number;
    docDate:Date;
    currency:string;
    cardCode:string;
    cardName:string;
    cashSum:number=0;
    transferSum:number=0;
    
    private _paidSum:number=0;
    private _checkSum:number=0;
    private _creditSum:number=0;
    private _checks:Array<{checkDate:Date,
                      checkNo:Date,
                      bankCode:number,
                      account:string,
                      checkSum:number
                     }>=[];
    private _creditcards:Array<{creditDate:Date,
        creditCardNo:Date,
        bankCode:number,
        idNo:string,
        voucherNo:string,
        phone:string,
        checkSum:number
    }>=[];

    private parent=this;
    private proxyHandler = {
        //parent:this,
        proxyChild:{
            parent:this.parent,            
            set: function(target, prop, value, receiver) {                                                        
                switch(prop){                                  
                    case "checkSum":                    
                        this.parent._checkSum-=target["checkSum"];
                        target[prop] = value;                
                        this.parent._checkSum+=target["checkSum"];
                        break;

                    case "creditSum":
                        this.parent._creditSum-=target["creditSum"];
                        target[prop] = value;                
                        this.parent._creditSum+=target["creditSum"];
                        break;                                        
                default:
                    target[prop] = value;
                    break;
                }             
                return true;
            }            
        },
        set: function(target, prop,value,receiver) {                                                
            if (typeof value==="object" && target[prop]===undefined) {
                target[prop]=new Proxy(value,this.proxyChild);                  
            }
            else target[prop]=value;
            
            return true;
        },        
    };

    private proxyChecks;
    private proxyCreditCard;

    constructor(appSetting:AppSettings){
        let parent=this;

        this.proxyChecks=new Proxy(this._checks,this.proxyHandler);
        this.proxyCreditCard=new Proxy(this._creditcards,this.proxyHandler);

        Object.defineProperty(this._checks, 'add', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function(line){
                parent._checkSum+=line.checkSum;                
                parent.proxyChecks.push(line);
            }
          }); 
        
          Object.defineProperty(this._checks, 'remove', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function(index){
                let line=parent.proxyChecks[index];
                parent._checkSum-=line.checkSum;                          
                parent.proxyChecks.splice(index,1);
            }
          });

          Object.defineProperty(this._creditcards, 'add', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function(line){
                parent._creditSum+=line.creditSum;                
                parent.proxyCreditCard.push(line);
            }
          }); 
        
          Object.defineProperty(this._creditcards, 'remove', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function(index){
                let line=parent.proxyCreditCard[index];
                parent._creditSum-=line.creditSum;                                
                parent.proxyCreditCard.splice(index,1);
            }
          });
    }

    get paidSum():number{
        return this._paidSum;
    }

    get checkSum():number{
        return this._checkSum;
    }

    get creditSum():number{
        return this._creditSum;
    }
}