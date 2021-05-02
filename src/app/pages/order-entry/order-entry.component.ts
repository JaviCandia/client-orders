import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-entry',
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.css']
})
export class OrderEntryComponent implements OnInit {

  public storeInfo: Array<string>;
  public shippingInfo: Array<string>;

  public rowArray: Array<any>;

  constructor() {
    this.rowArray = [];
  }
  
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
}
