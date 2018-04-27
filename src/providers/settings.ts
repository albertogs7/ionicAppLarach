import {Storage} from '@ionic/storage';
import { Injectable } from '@angular/core';
import { IMenuItem } from '../interfaces/app-interfaces';
import {DecimalType, SettingName} from '../class/app-enums';

@Injectable()
export class AppSettings{
    private decPlaces={DecPrices:4,DecQuantities:2,DecTotals:2,DecPercents:4};

    constructor(public storage:Storage){
    }

    public set(settingName:SettingName,value:any){
        switch(settingName){
            case SettingName.DEC_PERCENTS:
            case SettingName.DEC_QUANTIES:
            case SettingName.DEC_TOTALS:
            case SettingName.DEC_QUANTIES:
                this.decPlaces[settingName]=value;
                break;
            default:
                this.storage.set(`setting:${settingName}`,value);
                break;

        }
    }

    public get(settingName:SettingName){
        switch(settingName){
            case SettingName.DEC_PERCENTS:
            case SettingName.DEC_PRICES:
            case SettingName.DEC_TOTALS:
            case SettingName.DEC_QUANTIES:
                return this.decPlaces[settingName];
            default:
                return this.storage.get(`setting:${ settingName }`);
        }
      }
      
    round(num:any,type:DecimalType):number {
        let decimales=this.decPlaces[type];
        let signo:number = (num >= 0 ? 1 : -1);
        
        num = num * signo;
        if (decimales === 0) return signo * Math.round(num);
        
        num = num.toString().split('e');
        num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimales) : decimales)));        
        num = num.toString().split('e');
        return signo * +(num[0] + 'e' + (num[1] ? (+num[1] - decimales) : -decimales));
    }

    get defaultDebounceTime():number{
        return 700;
    }
}

