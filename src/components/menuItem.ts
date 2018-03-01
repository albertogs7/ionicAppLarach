export class MenuItem{
    id:number;
    title:string;
    component:any;
    icon:string;
    children:any;

    constructor(id:number,title:string,component:any,icon:string,children:any){
        this.id=id;
        this.title=title;
        this.component=component;
        this.icon=icon;
        this.children=children;
    }
}