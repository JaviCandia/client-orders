import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-entry',
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.css']
})
export class OrderEntryComponent implements OnInit {

  // Data for the basic inputs
  public storeCode: string;
  public requestedBy: string;
  public email: string;
  public phone: string;

  // Content of the mid tables
  public storeInfo: Array<string>;
  public shippingInfo: Array<string>;

  // Just for visual purposes, delete later
  public rowArray: Array<any> = [];

  // Totals data
  public graphicTotal: number = 0;
  public rackTotal: number = 0;
  public chillerTotal: number = 0;
  public freezerTotal: number = 0;
  public orderTotal: number = 0;

  constructor() { }
  
  ngOnInit(): void {
    this.searchStore();

    this.rowArray.length = 4;
  }

  public searchStore() {
    this.storeInfo = [
      '1001 Broadway',
      'Seattle WA',
      '98122',
      '206-802-3720',
    ];

    this.shippingInfo = [
      'Project Avocado - STL',
        '1001 Broadway',
        'Seattle WA',
        '98122',
      '206-802-3720',
    ];
  }

  public clearBasicFields(){
    this.storeCode = '';
    this.requestedBy = '';
    this.email = '';
    this.phone = '';
  }

  public submit(){
  this.graphicTotal = 0;
  this.rackTotal = 0;
  this.chillerTotal = 0;
  this.freezerTotal = 0;
  this.orderTotal = 0;

  this.clearBasicFields();
  }
}
