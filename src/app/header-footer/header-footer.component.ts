import { Component } from '@angular/core';
//
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductAddComponent } from '../Product/product-add/product-add.component';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent {
  nameUser = 'Nguyen The Nam';

  constructor(private _dialog: MatDialog ,private router:Router, private authService: AuthService){}

  public logOut(){
    this.authService.signOut()
    window.localStorage.clear()
    this.router.navigate(['/login'])
  }
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
