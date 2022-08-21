import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ripple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss']
})
export class RippleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
