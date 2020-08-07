import { Product } from './product';
import { AuthService } from '../services/auth.service';

export class CartsItem {


    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;
    quantity: number;


    constructor(product: Product) {
        this.id = product.id;
        this.name = product.name;
        this.imageUrl = product.imageUrl;
        this.unitPrice = product.unitPrice;
        this.quantity = 1;

    }
}
