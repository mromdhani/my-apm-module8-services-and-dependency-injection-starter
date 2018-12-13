import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/domain/iproduct';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  productId: number;  // Id à récupérer de la route
  product: IProduct;

  constructor (private _route: ActivatedRoute,
               private _service: ProductsService) {}

  ngOnInit() {
  //  this.productId = +this._route.snapshot.paramMap.get('id');
  this._route.paramMap.subscribe(
        // Next
        res =>  {
                this.productId = +res.get('id');
                this._service.getProductById(this.productId).subscribe(
                    res2 => this.product = res2,
                    erreur => console.log('ATTENTION, Il y a eu l\'exception :' + erreur)
                    );
                  },
        // Error
        err => console.log('' + err)
     );
    }

}
