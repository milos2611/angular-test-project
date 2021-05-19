import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  @Input() title: string;
  @Input() lat: number;
  @Input() lng: number;
  constructor() {}

  ngOnInit(): void {}
}
