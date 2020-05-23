import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';


@Injectable()
export class ProduitMockService{

    private PRODUITS: Produit[] = [];

    constructor(){

        let a: Produit = new Produit('Livre',50,20);
        let b: Produit = new Produit('Cahier',500,120);
        let c: Produit = new Produit('Stylo',200,5);

        this.PRODUITS.push(a);
        this.PRODUITS.push(b);
        this.PRODUITS.push(c);
  
    }
    public getProduits(): Produit[]{
        return this.PRODUITS;
    }
}