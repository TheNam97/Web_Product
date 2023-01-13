
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//
import { User } from '../model/user.model';
import { AuthService } from '../Services/auth.service';
import { ProductsService } from '../Services/products.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  user : User = new User();

  constructor(
    private router : Router,
    // private userService : UserService,
    private authService : AuthService,
    private productService : ProductsService,
    // private tokenService : TokenService
  ){}
  
  // getAllProduct() {
  //   this.productService.getAllProduct(5,'hay')
  //     .subscribe(data => {
  //         console.log(data);
  //       }
  //     ,
  //   error => alert("Không lấy đc dữ liệu"));
  // }

  // public getProductByName(nameProduct: string){
  //   this.productService.getProductByName(nameProduct).subscribe(data =>
  //   { 
  //     //data array   
  //     console.log(data);
  //   },
  //   error => alert("a"));
  // }

  public signin(){
    console.log(this.user);
    this.authService.signIn(this.user).subscribe(data =>
      {
        window.localStorage.setItem('token', data);
        console.log(typeof data, data)
        this.router.navigate(['/header-footer']);
      },
    error => alert("Tên đăng nhập hoặc mật khẩu không đúng")
    )
  }
}
