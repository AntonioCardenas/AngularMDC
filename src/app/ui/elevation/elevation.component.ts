import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elevation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './elevation.component.html',
  styleUrls: ['./elevation.component.scss']
})
export class ElevationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
