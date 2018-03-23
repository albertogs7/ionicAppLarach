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
    
    private _lines:Array<DocumentLines>;
    private _subTotal:number=0;
    private _taxSum:number=0;
    private _docTotal:number=0;
    private _paidSum:number=0;

    constructor(public appSettings:AppSettings,private shareService:ShareService){
        this.customer=shareService.terminalConfig.customer;        
        this.slpCode=shareService.terminalConfig.salesPerson.id;
        this.priceList=shareService.terminalConfig.priceList.id;
        this.groupNum=shareService.terminalConfig.customer.groupNum;
        this.docDate=new Date();
        this._lines=[];
    }

    setLine(line:DocumentLines){
        this._subTotal+=line.lineTotalBefTax;
        this._taxSum+=line.taxSum;
        this._docTotal+=line.lineTotal;
        this._lines.push(line);
    }

    getLine(index:number):DocumentLines{
        return this._lines[index];
    }

    get lines():Array<DocumentLines>{
        return this._lines;
    }

    removeLine(index:number){
        let line=this._lines[index];
        this._subTotal-=line.lineTotalBefTax
        this._taxSum-=line.taxSum;
        this._docTotal-=line.lineTotal;
        delete this._lines[index];
    }

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

export class DocumentLines {
    visOrder:number;
    itemCode:string;
    itemName:string;
    whsCode:string;
    taxCode:string;
    unitMsr:string;
    price:number;
    quantity:number=1;
    numPerMsr:number=1;

    private _taxPrcnt:number=0;
    private _discPrcnt:number=0;
    //private _discSum:number=0;   

    //private _priceAfterDisc:number=0;
    //private _taxSum:number=0;
    //private _lineTotal:number=0;
    
   
    constructor(public appSettings:AppSettings){
        
    }

    get discPrcnt():number{
        return (this._discPrcnt-1)*100;
    }

    set discPrcnt(value:number){
        this._discPrcnt=(value/100)+1;
    }

    get priceAfterDisc():number{
        return this.price*(1-this._discPrcnt);
    }

    get taxPrcnt():number{
        return (this._taxPrcnt-1)*100;
    }

    set taxPrcnt(value:number){
        this._taxPrcnt=(value/100)+1;
    }

    get taxSum():number{
        return this.appSettings.round(this.priceAfterDisc*this._taxPrcnt*(this.quantity*this.numPerMsr),DecimalType.PERCENTS);
    }

    get lineTotal():number{
        return this.appSettings.round((this.quantity*this.numPerMsr*this.priceAfterDisc)+this.taxSum,DecimalType.TOTALS);
    }

    get lineTotalBefTax():number{
        return this.appSettings.round((this.quantity*this.numPerMsr*this.priceAfterDisc),DecimalType.TOTALS);
    }
    /*
    private calcLineFields(property:Property):void{
        switch (property){
            case Property.TAXPERCENT:
                this._taxSum=this.appSettings.round(this._priceAfterDisc*this._taxPrcnt,DecimalType.TOTALS);
                break;

            case Property.DISCSUM:
                this._priceAfterDisc=this.appSettings.round(this._price-this._discSum,DecimalType.PRICES);
                this._discPrcnt=this.appSettings.round(1-(this._priceAfterDisc/this._price),DecimalType.PERCENTS);
                break;
            
            case Property.DISCPERCENT:
                this._priceAfterDisc=(1-this._discPrcnt)*this._price;
                this._discSum=this._price*this._discPrcnt;
        }
        
        this._lineTotal=this.appSettings.round(this._quantity*this._priceAfterDisc*this._taxPrcnt,DecimalType.TOTALS);
    }
    */
}