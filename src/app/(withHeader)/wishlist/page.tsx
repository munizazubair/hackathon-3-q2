"use client";

import { useWishlist } from "@/app/context/wishlist-context";
import { ShoppingCartIcon } from "lucide-react";
import { ProductInterface } from "../productpage/[id]/page";
import { useState } from "react";
import Alert from "@/app/components/alerts/product-added";


export default function WishlistPage() {

  const { wishlist, addToWishlist } = useWishlist();
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleToggle = (item: ProductInterface) => {
    addToWishlist(item);
  };

    const addToCart = (product: ProductInterface) => {
      const storedCart = localStorage.getItem('cart');
      const cart = storedCart ? JSON.parse(storedCart) : [];
  
      const existingProductIndex = cart.findIndex((item: ProductInterface) => item.title === product.title);
  
      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
      } else {
        const productWithQuantity = { ...product, quantity: 1 };
        cart.push(productWithQuantity);
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
      setAlertMessage(`${product.title} has been added to the cart!`);
    };
    const handleCloseAlert = () => {
      setAlertMessage(null);
    };
  
  return (
    <div>

      <div className="h-full p-6 text-[#1D3178]">
        <div className="max-w-7xl sm:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 justify-items-center">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 w-fit md:w-[600px] lg:w-[800px] xl:w-[900px] ">
              {wishlist.length === 0 ? (
                <p>No items in wishlist</p>
              ) : (
                <div className="w-[200px] md:[600px] flex flex-col gap-4">
                  <div className="sm:hidden block w-[200px] md:w-[600px] ">
                  <h1>Liked Products</h1>
                    <div className="flex flex-col gap-5">
                    {wishlist.map((item: ProductInterface) => (
                      <div className="border-b py-4  ">
                        <div className="flex flex-col md:flex-row items-center w-[200px] md:w-[600px]">
                          <img
                            src={item.imageURL}
                            alt={item.title}
                            className="w-28 h-28 rounded-lg mb-4 md:mb-0 md:mr-4"
                          />
                          <div className="flex-1">
                            <p className="font-semibold text-lg">{item.title}</p>
                            
                            <div className="flex justify-between mt-4">
                              <div className="flex items-center"></div>
                            </div>
                          </div>
                          <div className="flex gap-3 justify-center items-center">
                          <button
                            onClick={() => handleToggle(item)}
                            className="flex items-center space-x-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill={wishlist.includes(item) ? "red" : "none"}
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-4 h-4 cursor-pointer"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
                              />
                            </svg>
                            <span>Remove</span>
                          </button>
                          <ShoppingCartIcon className="h-4 w-4" />
                              </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>

                  <div className="hidden sm:block ">
                    <table className="w-[520px] lg:w-[740px] xl:w-[840px]">
                      <thead>
                        <tr className="text-left border-b">
                          <th className="pb-4">Liked  Products</th>
                                        </tr>
                      </thead>
                      <tbody>
                        {wishlist.map((item:ProductInterface) => (
                          <tr className="border-b">
                            <td className="py-4">
                              <div className="flex items-center">
                                <img
                                  src={item.imageURL}
                                  alt={item.title}
                                  className="w-16 h-16 rounded-lg mr-4"
                                />
                                <div>
                                  <p className="font-semibold">{item.title}</p>{" "}
                                </div>{" "}
                              </div>{" "}
                            </td>
                            <td className="py-4"></td>

                            <td>
                              <button
                                onClick={() => handleToggle(item)}
                                className="flex items-center space-x-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill={
                                    wishlist.includes(item) ? "red" : "none"
                                  }
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="w-6 h-6 cursor-pointer"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
                                  />
                                </svg>
                              </button>
                            </td>
                            <td>
                            <div>
                              <ShoppingCartIcon onClick={() => addToCart(item)}/>
              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
<div>
  {alertMessage && (
                        <Alert message={alertMessage} onClose={handleCloseAlert} />
  
                      )}
</div>
                  <div className="flex justify-between items-center mt-4">
                   

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function setAlertMessage(arg0: string) {
  throw new Error("Function not implemented.");
}
