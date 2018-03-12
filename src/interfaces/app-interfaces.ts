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
    slpCode:number;
}

export interface IDocuments{    
    customer:ICustomers;
    numAtCard:string;
    docNum:number;
    docDate:Date;
    docDueDate:Date;
    slpCode:number;
    discPrcnt:number;
    discSum:number;    
    lines:IDocumentLines;
}

export interface IDocumentLines{
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

export interface ICustomers{
    cardCode:string;
    cardName:string;
    RFC:string;
    phone:string;
    email:string;
    street:string;
    block:string;
    state:string;
    country:string;
}