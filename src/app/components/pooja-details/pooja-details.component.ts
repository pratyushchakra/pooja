import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { poojaDetails } from 'src/app/Pooja-details';
@Component({
  selector: 'app-pooja-details',
  templateUrl: './pooja-details.component.html',
  styleUrls: ['./pooja-details.component.scss']
})
export class PoojaDetailsComponent implements OnInit {
  getDetailsById: { id: number; name: string; details: string[]; image: string; }[];

  constructor(private _Activatedroute: ActivatedRoute) { }
  id: any;
  public poojaDetails = poojaDetails
  ngOnInit() {
    // return async () => {
    this._Activatedroute.params.subscribe(params => { this.id = params['id']; });
    // this.getDetailsById = poojaDetails.map(val => {
    //   if (val.id == this.id) return val
    // })
    console.log('this.id: ', this.id);
    console.log('getDetailsById: ', this.getDetailsById);
    }
  }


