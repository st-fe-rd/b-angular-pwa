import { Component, Input, OnInit, OnDestroy, Inject, forwardRef } from '@angular/core';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})

export class DialogComponent implements OnInit, OnDestroy {

  @Input() type: any;
  dialog$: any;
  title: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
    private _location: Location,
  ) {
  }

  ngOnInit() {
    this.dialog$ = this._location.subscribe(() => this.dialogRef.close());
    this.title = this.data;
  }

  ngOnDestroy() {
    this.dialog$.unsubscribe();
  }

  refreshApp() {
    location.reload();
  }

  onCloseDialog(agree: Boolean) {
    this.dialogRef.close(agree);
  }

}

