import {Component, OnInit, ViewChild} from '@angular/core';
import {ArtsListComponent} from "../arts/arts-list/arts-list.component";

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {

  @ViewChild(ArtsListComponent)
  private list: ArtsListComponent;


  bricks = [
    {title: 'Brick 1', image: 'assets/img/examples/chris7.jpg'},
    {title: 'Brick 2', image: 'assets/img/examples/chris6.jpg'},
    {title: 'Brick 3', image: 'assets/img/examples/chris4.jpg'},
    {title: 'Brick 4', image: 'assets/img/examples/chris5.jpg'},
    {title: 'Brick 5', image: 'assets/img/examples/chris5.jpg'},
    {title: 'Brick 6', image: 'assets/img/examples/chris5.jpg'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
