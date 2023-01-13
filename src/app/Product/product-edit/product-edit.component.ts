import { Component, Inject } from '@angular/core';
//
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';// send data to dialog

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  public manuSelect=['Apple','Samsung']
  public typeSelect=['Dien thoai','MTB']

  constructor(
    public dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    )
    {}
}
