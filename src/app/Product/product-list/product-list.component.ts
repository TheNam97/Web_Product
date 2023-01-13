import { Component, ViewChild } from '@angular/core';

//
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ProductEditComponent } from '../product-edit/product-edit.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private _dialog: MatDialog ){}

  /////////////
  openDialogEdit(row: PeriodicElement){
    console.log('Row clicked', row);
    const dialog = this._dialog.open(ProductEditComponent, {
      width: '40%',
      disableClose: false,
      autoFocus:true,
      data: row
    });

    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // public dataToEdit(a: any){
  //    this.toEdit?.getData(a)
  // }
////////////////
  displayedColumns: string[] = ['id','name','type','manufacturer','description','year','price'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  clickedRows = new Set<PeriodicElement>();


}
export interface PeriodicElement {
  id: number;
  name: string;
  type: string;
  manufacturer: string;
  description: string;
  year: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 2, name: 'Helium',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 3, name: 'Lithium',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 4, name: 'Beryllium',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 5, name: 'Boron',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 6, name: 'Carbon',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 7, name: 'Nitrogen',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 8, name: 'Oxygen',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 9, name: 'Fluorine',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 10, name: 'Neon',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 11, name: 'Sodium',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 12, name: 'Magnesium',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 13, name: 'Aluminum',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 14, name: 'Silicon',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 15, name: 'Phosphorus',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 16, name: 'Sulfur',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 17, name: 'Chlorine',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 18, name: 'Argon',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 19, name: 'Potassium',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200},
  {id: 20, name: 'Calcium',type: 'aaaa', manufacturer:'apple',description:'haha',year: 2000,price:200}
];