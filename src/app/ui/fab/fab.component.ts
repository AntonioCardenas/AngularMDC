import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
