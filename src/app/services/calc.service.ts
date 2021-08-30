import {  Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class CalcService{
    public getSum(arr:number[]):number{
        let sum=0;
        for(const item of arr){
            sum+=item;
        }
        return sum;
    }
}