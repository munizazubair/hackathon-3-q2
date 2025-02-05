"use client";

import { useState, useEffect } from "react";
import { useWishlist} from "@/app/context/wishlist-context";


type LikeButtonProps = {
  item: {
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
};

export default function LikeButton({ item }: LikeButtonProps) {
  const { wishlist, addToWishlist } = useWishlist();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isLiked = wishlist.some((wishlistItem:any) => wishlistItem._id === item._id);
    setLiked(isLiked);
    console.log("Item Passed to LikeButton: ", item); // Debug
    console.log("Is Liked: ", isLiked); // Debug
  }, [wishlist, item]);

  const handleClick = () => {
    addToWishlist(item);
    setLiked(!liked);
  };

  return (
    <button onClick={handleClick} className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={liked ? "red" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 lg:h-6 lg:w-6 xl:h-8 xl:w-8 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
        />
      </svg>
    </button>
  );
}