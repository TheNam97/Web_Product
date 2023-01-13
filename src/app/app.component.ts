import { Component } from '@angular/core';
//
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductAddComponent } from './Product/product-add/product-add.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nameUser = 'Nguyen The Nam';

  constructor(private _dialog: MatDialog ){}

  openDialogAdd(){
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = false;
    // dialogConfig.autoFocus=true
    // dialogConfig.width = "50%"
    // const dialogRef = this.dialog.open(ProductAddComponent,dialogConfig)

    const dialog = this._dialog.open(ProductAddComponent, {
      width: '40%',
      disableClose: false,
      autoFocus:true,
    });

    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
