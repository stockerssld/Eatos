import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  orders = [
    {
      id: 1,
      name: 'orderName',
      products: [],
      status: 1,
      productNames: ['Product Name A', 'Product Name B'],
      store: {
        id: 'sdksja29d2daa',
        name: 'Organic Roastesrs COffee',
        logo: 'https:///logoc.com.pe/.png',
      },
    },
    {
      id: 2,
      name: 'orderName',
      products: [],
      productNames: ['Product Name A', 'Product Name B'],
      status: 1,
      store: {
        id: 'sdksja29d2daa',
        name: 'Organic Roastesrs COffee',
        logo: 'https:///logoc.com.pe/.png',
      },
    },
    {
      id: 3,
      name: 'orderName',
      products: [],
      productNames: ['Product Name A', 'Product Name B'],
      status: 1,
      store: {
        id: 'sdksja29d2daa',
        name: 'Organic Roastesrs COffee',
        logo: 'https:///logoc.com.pe/.png',
      },
    },
  ];

  ngOnInit(): void {
  }

}
