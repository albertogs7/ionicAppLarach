import {Injectable} from '@angular/core';
import { Documents } from '../class/app-objects';
import { AppSettings } from './settings';

@Injectable()
export class ShareService{
    invoice:Documents;

    constructor(private appSettings:AppSettings){
        //this.invoice=new Documents(appSettings);
    }
}
