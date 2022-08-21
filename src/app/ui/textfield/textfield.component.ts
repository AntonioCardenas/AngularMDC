import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textfield',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
