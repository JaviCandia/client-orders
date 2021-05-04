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
      storeCode: 'CMB',
      street: '1001 Broadway',
      city: 'Seattle WA',
      zipCode: '98122',
      phoneNumber: '206-802-3720',
    },
    {
      storeCode: 'ABD',
      street: '2002 Siddney',
      city: 'New York',
      zipCode: '98122',
      phoneNumber: '272-133-1445',
    },
    {
      storeCode: 'ALV',
      street: '3003 San Dimas',
      city: 'Córdoba VZ',
      zipCode: '94570',
      phoneNumber: '942-802-2382',
    }
  ];

  public shippingInfoArray = [
    {
      storeCode: 'CMB',
      name: 'Project Avocado - STL',
      street: '1001 Broadway',
      city: 'Seattle WA',
      zipCode: '98122',
      phoneNumber: '206-802-3720',
    },
    {
      storeCode: 'ABD',
      name: 'Veritas',
      street: '2002 Siddney',
      city: 'New York',
      zipCode: '98122',
      phoneNumber: '272-133-1445',
    },
    {
      storeCode: 'ALV',
      name: 'Pozole',
      street: '3003 San Dimas',
      city: 'Córdoba VZ',
      zipCode: '94570',
      phoneNumber: '942-802-2382',
    }
  ];

}
