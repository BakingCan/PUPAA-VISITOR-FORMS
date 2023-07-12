import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  number: any;
  num2: any;
  sum: any;

  ngOnInit() {
    this.number = 1;
    this.num2 = 3;
    this.sum = this.number + this.num2;
  }
}
