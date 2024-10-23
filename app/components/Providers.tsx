"use client"
import { CartProvider as CProvider } from "use-shopping-cart"

export default function CartProvider({ children } : { children : ReactNode}) {

    return (
        <CProvider 
        mode= "payment" 
        cartMode = "client-only" 
        stripe = {process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        successUrl = "http://localhost:3000/success"
        cancelUrl = "http://localhost:3000/cancel"
        currency = "USD"
        billingAddressCollection = {true}
        shouldPersist = {true}
        language = "en-US"
        >
            {children}
        </CProvider>
    )

}