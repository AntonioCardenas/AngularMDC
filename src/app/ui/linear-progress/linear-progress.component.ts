import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-linear-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linear-progress.component.html',
  styleUrls: ['./linear-progress.component.css']
})
export class LinearProgressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
