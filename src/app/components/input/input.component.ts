import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  size: any;
  id: any;
  name: any;
  placeholder: any;
  class: any;
  type: any;
  constructor() { }

  ngOnInit(): void {
  }

}
