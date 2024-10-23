"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"
import Image from 'next/image'
import { Button } from "@/components/ui/button";
  

export default function ShoppingCartModel () {
    
    const { 
        cartCount, 
        shouldDisplayCart,
         handleCartClick, 
         cartDetails, 
         removeItem, 
         totalPrice, 
         redirectToCheckout } = useShoppingCart();

    async function handleCheckout(event : any) {
        event.preventDefault;
        try {
            const res = await redirectToCheckout();
            if ( res?.error) {
                console.log("res");
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <Sheet open = {shouldDisplayCart} onOpenChange={() => handleCartClick()}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle> Shopping Cart</SheetTitle>
          </SheetHeader>
          {/* <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
                <ul className="-my-6 divide-y divide-gray-200"> */}
                    {cartCount === 0 ? (
                        <h1 className="mt-8"> No items in the cart</h1>
                    ) : (
                        <>
                            {Object.values(cartDetails ?? {}).map((entry) => (
                                <li key={entry.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <Image
                                        src = {entry.image as string}
                                        alt = "image"
                                        width = {100}
                                        height = {100}
                                        >
                                        </Image>
                                        {/* <p>{entry.name}</p> */}
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>{entry.name}</h3>
                                            <p>${entry.price}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                          <p>QTY:{entry.quantity}</p>  
                                          <p>Size:{entry.size}</p>

                                          <div className="flex">
                                            <button type="button"
                                            onClick={() => removeItem(entry.id)}
                                             className="font-medium text-primary hover:text">remove</button>
                                          </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </>
                    )}

                    <div className="border-t border-gray-200 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            {cartCount && (
                            <>
                            <p>Subtotal: </p>
                            <p>${totalPrice}</p>
                            </>

                            )}
                        </div>
                    </div>
                    <div className="mt-8 w-full">
                     <Button className="w-full" onClick={handleCheckout}>Checkout</Button>
                    </div>

        
        </SheetContent>
      </Sheet>
    )
   

}