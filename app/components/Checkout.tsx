"use client"
import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { urlFor } from '../lib/sanity';
import { Productcart } from './AddtoCart';



export default function Checkout({
    currency,
    name,
    description,
    price,
    image,
    size,
    price_id
} : Productcart) {

    const { checkoutSingleItem } = useShoppingCart();

    function buyNow(price_id: string) {
        if (!price_id) {
            console.error("Price ID is undefined!");
            return;
        }
        console.log(`${price_id} inside function buyNow`);
        checkoutSingleItem(price_id);
    }
    const product = {
        name : name,
        currency : currency,
        description : description,
        price : price,
        image : urlFor(image).url(),
        price_id : price_id,
        size : size
    };
    // console.log(product.price_id + product.name + "inside checkout")
    return (
        <Button variant={"secondary"} onClick={() => buyNow(product.price_id)}>Checkout</Button>
    )
}