export interface IMenuItem{
    id:number;
    title:string;
    component:any;
    icon:string;
    children:IMenuItem[];
}

export interface IUserData{
    id:number;
    name:string;
    email:string;
    imagePath:string;
    whsCode:string;
    priceList:number;
    slpCode:number;

}

export interface IDocument{    
    cardCode:string;
    cardName:string;
    RFC:string;
    numAtCard:string;
    docNum:number;
    docDate:Date;
    docDueDate:Date;
    slpCode:number;
    comments:string;
    discPrcnt:number;
    discSum:number;    
    lines:IDocumentLines;
}

interface IDocumentLines{
    visOrder:number;
    itemCode:string;
    itemName:string;
    whsCode:string;
    price:number;
    quantity:number;
    taxCode:string;
    taxPrcnt:number;
    unitMsr:string;
    numPerMsr:number;
    discPrcnt:number;
    discSum:number;            
}

interface ICustomer{
    cardCode:string;
    cardName:string;
    RFC:string;
    address:string;
}