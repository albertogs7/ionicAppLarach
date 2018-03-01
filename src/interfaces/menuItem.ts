export interface IMenuItem{
    id:number;
    title:string;
    component:any;
    icon:string;
    children:IMenuItem[];
}