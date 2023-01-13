import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
//
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';// send data to dialog
import { Router } from '@angular/router';
import { Products } from 'src/app/model/Products.model';
import { User } from 'src/app/model/user.model';
import { ProductsService } from 'src/app/Services/products.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  //directives: [ProductListComponent]
})
export class ProductEditComponent {

  public manuSelect=['Apple']
  public typeSelect=['Tablet','Smartphone']
  public product: Products = new Products()
  public nam: any;
  foodForm !: FormGroup;

  @ViewChild('NameProduct') nameProductInput:ElementRef | undefined;
  @ViewChild('TypeProduct') typeProductInput:ElementRef | undefined;
  @ViewChild('ManufacturerProduct') manufacturerProductInput:ElementRef | undefined;
  @ViewChild('DescriptionProduct') descriptionProductInput:ElementRef | undefined;
  @ViewChild('YearProduct') yearProductInput:ElementRef | undefined;
  @ViewChild('PriceProduct') priceProductInput:ElementRef | undefined;

  constructor(
    public dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductsService,
    private router : Router,
    )
    {}

    public editProduct(){
      this.product.productName=this.nameProductInput?.nativeElement.value
      this.product.type=this.typeProductInput?.nativeElement.value
      this.product.manufacturer=this.manufacturerProductInput?.nativeElement.value
      this.product.description=this.descriptionProductInput?.nativeElement.value
      this.product.year=this.yearProductInput?.nativeElement.value
      this.product.price=this.priceProductInput?.nativeElement.value
      console.log(this.product);
        this.productService.updateProduct(this.data.id,this.product).subscribe(data =>
        { 
          console.log(data);
          alert("Cập nhật sản phẩm thành công")
        },
        error => alert("Lỗi! Vui lòng thử lại"));
        //window.location.reload();
    
  }
  public deleteProduct(){
    this.productService.deleteProduct(this.data.id).subscribe(data =>
      { 
        alert("Xóa sản phẩm thành công")
      },
      error => alert("Lỗi! Vui lòng thử lại"));
  }
}
