import { Component, OnInit } from '@angular/core';
import { poojaDetails } from '../Pooja-details'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  details: any = []
  public poojaDetails: any = poojaDetails

  ngOnInit() {

  }

}
