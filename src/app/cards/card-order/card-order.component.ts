import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.scss']
})
export class CardOrderComponent implements OnInit {

  constructor() { }
  @Input() order

  ngOnInit(): void {
  }

}
