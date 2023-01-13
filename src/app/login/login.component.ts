
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
  
  public user : User = new User();

  constructor(
    private router : Router,
    // private userService : UserService,
    private authService : AuthService,
    private productService : ProductsService,
    // private tokenService : TokenService
  ){}
  
  getFoods() {
    this.productService.findAll(5,'dfgdfg')
      .subscribe(data => {
          console.log(data.listFood);
        }
      ,
    error => alert("Không lấy đc"));

  }

  public getProductById(){
    this.productService.getProductById('4fa01c80-c185-436e-8085-91e23b482860').subscribe(data =>
    {
      console.log(data);
    },
    error => alert("Không lấy đc"));
  }

  public signin(){
    console.log(this.user);
    this.authService.login(this.user).subscribe(data =>
      {
        window.localStorage.setItem('token', data);
        console.log(data)
        
        //this.router.navigate(['/home']);
      },
    error => alert("Tên đăng nhập hoặc mật khẩu không đúng")
    )
  }
}
