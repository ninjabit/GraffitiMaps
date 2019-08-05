import {Component, Input, OnInit} from '@angular/core';
import {Picture} from "api/models/picture";

@Component({
  selector: 'app-rounded-image',
  templateUrl: './rounded-image.component.html',
  styleUrls: ['./rounded-image.component.css']
})
export class RoundedImageComponent implements OnInit {

  picture: Picture;

  constructor() { }

  ngOnInit() {
  }

}
