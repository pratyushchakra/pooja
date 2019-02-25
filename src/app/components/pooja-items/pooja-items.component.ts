import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

import { poojaDetails } from '../../Pooja-details'
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-pooja-items',
  templateUrl: './pooja-items.component.html',
  styleUrls: ['./pooja-items.component.css']
})
export class PoojaItemsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  public poojaDetails: any = poojaDetails
  

  ngOnInit() {
  }
  openDialog(data) {
    console.log('data: ', data);
    console.log('poojaDetails: ', poojaDetails);
    const dialogRef = this.dialog.open(DialogContentDialog, {data});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-dialog',
  templateUrl: 'dialog-content-dialog.html',
})
export class DialogContentDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
