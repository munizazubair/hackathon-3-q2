"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Product = {
    _id: number;
    title: string;
    price: number;
    priceWithoutDiscount: number;
    badge: string;
    imageURL: string;
    products: number;
    description: string;
    inventory: number;
    tags: string;
    reviews: { reviewText: string; username: string }[];
    quantity: number;
    category: { _id: string, title: string, imageURL: string }
};

const WishlistContext = createContext<{ wishlist: Product[], addToWishlist: (item: Product) => void }>({
  wishlist: [],
  addToWishlist: () => {}
});

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const addToWishlist = (item: Product) => {
    console.log("Before Update: ", wishlist);
  
    const isInWishlist = wishlist.some((wishlistItem) => wishlistItem._id === item._id);
    let updatedWishlist;
  
    if (isInWishlist) {
      updatedWishlist = wishlist.filter((wishlistItem) => wishlistItem._id !== item._id);
      console.log("Removed from Wishlist: ", item);
    } else {
      updatedWishlist = [...wishlist, item];
      console.log("Added to Wishlist: ", item);
    }
  
    setWishlist(updatedWishlist);
    console.log("After Update: ", updatedWishlist);
  
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };
  

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}