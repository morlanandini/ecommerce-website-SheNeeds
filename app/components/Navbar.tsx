"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import { ShoppingBag } from 'lucide-react'
import { useShoppingCart } from "use-shopping-cart";

const links = [

    { name : "Home", href : "/"},
    { name : "Casual", href : "/casual"},
    { name : "Ethnic", href : "/ethnic"},
    { name : "Indo-Western", href : "/indo-western"},
];

export default function Navbar() {
    const pathname = usePathname();
    const {handleCartClick} = useShoppingCart();
    return (
        <header className="mb-10 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl mt-5 mb-5">
                <Link href="/">
                    <h1 className="text-4xl font-bold">
                         <span className="text-primary">SheNeeds</span>
                    </h1>
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16">

                    { links.map((link, idx) => (
                        <div key={idx}>
                            { pathname === link.href ? (
                                <Link className="text-lg font-semibold text-primary" href={link.href}>
                                    {link.name}
                                </Link>
                            ) : (
                                <Link href = {link.href} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">
                                    {link.name}
                                </Link>
                            )
                        }
                        </div>
                    )

                    )}
                </nav>
                <div className="flex divide-x border-r sm:border-l">
                    <Button  className="rounded-none flex flex-col gap-y-1.5 h-12 w-12 sm:h-11 sm:w-11 md:h-20 md:w-20"
                    onClick={() => handleCartClick()}
                    >
                         <ShoppingBag className="w-20 h-20 md:w-20 md:h-20 text-black"></ShoppingBag>
                         {/* <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                            Cart
                         </span> */}
                          </Button>
                </div>

            </div>
        </header>
    )
}