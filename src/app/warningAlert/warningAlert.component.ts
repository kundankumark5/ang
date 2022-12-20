import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
@Component({
    selector: 'app-warningAlert',
    template:`<p>this is a warning you are in danger</p>`,
   styles: [`p{background-color:mistyRose;border:1px solid red;padding:20px;width:40%;margin:0 auto;}`]
})
export class warningAlertComponent implements OnInit  {
constructor(){}
ngOnInit(): void {
    
}
}