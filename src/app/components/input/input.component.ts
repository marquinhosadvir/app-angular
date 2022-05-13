import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() class: any;
  @Input() name: any;
  @Input() placeholder: any;
  @Input() type: any;
  @Input() style: any;
  @Input() id: any;
  constructor() { }

  ngOnInit(): void {
  }

}
