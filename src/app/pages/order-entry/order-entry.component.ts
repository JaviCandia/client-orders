import { Component, OnInit } from '@angular/core';
import { StoreInfo } from './../../models/store-info.model';
import { Shipping } from './../../models/shipping.model';

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
  public storeInfo: Array<StoreInfo> = [];
  public shippingInfo: Array<Shipping> = [];
  // Totals data
  public graphicTotal: number = 0;
  public rackTotal: number = 0;
  public chillerTotal: number = 0;
  public freezerTotal: number = 0;
  public orderTotal: number = 0;
  // Just for visual purposes, delete later
  public rowArray: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    this.rowArray.length = 4;
  }

  public searchStore() {
    if(this.storeCode === ''){
      this.storeInfo = [];
      this.shippingInfo = [];
    } else {
      this.storeInfo = this.storeInfoArray.filter(res =>
        res.storeCode.toLowerCase().match(this.storeCode.toLowerCase())
      );
      console.log("STORE INFO: ", this.storeInfo);
  
      this.shippingInfo = this.shippingInfoArray.filter(res =>
        res.storeCode.toLowerCase().match(this.storeCode.toLowerCase())
      );
    }
  }

  public clearBasicFields() {
    this.storeCode = '';
    this.requestedBy = '';
    this.email = '';
    this.phone = '';
  }

  public submit() {
    this.graphicTotal = 0;
    this.rackTotal = 0;
    this.chillerTotal = 0;
    this.freezerTotal = 0;
    this.orderTotal = 0;

    this.clearBasicFields();
  }

  // Hardcoded data
  public storeInfoArray = [
    {
      storeCode: 'DOM',
      street: '11920 Domain Drive',
      city: 'Austin, TX',
      zipCode: '78759',
      phoneNumber: '206-802-3720',
    },
    {
      storeCode: 'PCY',
      street: '6598 N Landmark Drive',
      city: 'Park City, UT',
      zipCode: '84098',
      phoneNumber: '272-133-1445',
    },
    {
      storeCode: 'WSC',
      street: '11041 Westheimer Road',
      city: 'Houston, TX',
      zipCode: '77042',
      phoneNumber: '942-802-2382',
    },
    {
      storeCode: 'BLL',
      street: '1146 Blossom Hill Road',
      city: 'San Jose, CA',
      zipCode: '95118',
      phoneNumber: '131-123-2313',
    },
    {
      storeCode: 'INT',
      street: '2001 15TH AVE W',
      city: 'Seattle, WA',
      zipCode: '98119',
      phoneNumber: '938-213-743',
    }
  ];

  public shippingInfoArray = [
    {
      storeCode: 'DOM',
      name: 'Domain',
      street: '11920 Domain Drive',
      city: 'Austin, TX',
      zipCode: '78759',
      phoneNumber: '206-802-3720',
    },
    {
      storeCode: 'PCY',
      name: 'Landmark',
      street: '6598 N Landmark Drive',
      city: 'Park City, UT',
      zipCode: '84098',
      phoneNumber: '272-133-1445',
    },
    {
      storeCode: 'WSC',
      name: 'Westheimer',
      street: '11041 Westheimer Road',
      city: 'Houston, TX',
      zipCode: '77042',
      phoneNumber: '942-802-2382',
    },
    {
      storeCode: 'BLL',
      name: 'Blossom',
      street: '1146 Blossom Hill Road',
      city: 'San Jose, CA',
      zipCode: '95118',
      phoneNumber: '131-123-2313',
    },
    {
      storeCode: 'INT',
      name: 'Seattle',
      street: '2001 15TH AVE W',
      city: 'Seattle, WA',
      zipCode: '98119',
      phoneNumber: '938-213-743',
    }
  ];

}
