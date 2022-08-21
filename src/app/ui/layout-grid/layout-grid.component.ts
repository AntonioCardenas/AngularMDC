import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-grid.component.html',
  styleUrls: ['./layout-grid.component.css']
})
export class LayoutGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
