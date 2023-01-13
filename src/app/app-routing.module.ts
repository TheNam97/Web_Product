import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './Product/product-add/product-add.component';
import { ProductListComponent } from './Product/product-list/product-list.component';

const routes: Routes = [
    // Thêm children[] là các đường dẫn con /home/login/products....
{ path: 'list', component: ProductListComponent }, // url nao thi vao component do
{ path: 'add', component: ProductAddComponent },
//{ path: 'edit', component: ProductEditComponent },// nếu mặc định không chọn sẽ là trang chủ mặc định
{ path: '', component: ProductListComponent },
//{ path: '**', component: PageNotFoundComponent }// url sai sẽ vào báo lỗi( tạo riêng 1 component hiển thị báo lỗi)
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
