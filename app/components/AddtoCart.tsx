"use client"
import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { urlFor } from '../lib/sanity';


export  interface Productcart {
    name : string;
    image : any;
    currency : string;
    description : string;
    price : number;
    size : string;
    price_id :string
};

export default function AddtoCart({
    currency,
    name,
    description,
    price,
    image,
    size,
    price_id
} : Productcart) {

    const { addItem, handleCartClick} = useShoppingCart();
    const product = {
        name : name,
        currency : currency,
        description : description,
        price : price,
        image : urlFor(image).url(),
        price_id : price_id,
        size : size
    };
    return (
        <Button onClick={() => {addItem(product), handleCartClick()}}>Add to Cart</Button>
    )
}