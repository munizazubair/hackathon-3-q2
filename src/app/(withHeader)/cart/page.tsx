
"use client";
import { useEffect, useState } from "react";
import Alert from "@/app/components/alerts/product-added";
import { TrashIcon } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");


type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  quantity:number
};

export default function ShopppingCart() {

  const [cart, setCart] = useState<Product[]>([]);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  
  const clearCart = () => {
    setCart([]); // Clear cart in state
    localStorage.removeItem("cart"); // Remove cart data from localStorage
    setAlertMessage(`Cart has been cleared!`);

  };
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      alert("Quantity cannot be less than 1.");
      return;
    }
  
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
useEffect(() => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    setCart(JSON.parse(storedCart));
  }
}, []);

const calculateSubtotal = () => {
  return cart.reduce((total:number, item):number => total + item.price * item.quantity, 0);
};

const calculateTotal = () => {
  const subtotal = calculateSubtotal();
  const shipping = 0; 
  const tax = subtotal * 0;
  return subtotal + shipping + tax;
};

const handleCloseAlert = () => {
  setAlertMessage(null);
};
const handleCheckout = async () => {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cart }),
      });
    
      const data = await response.json();
      console.log("Checkout Session Response:", data); // Debugging
    
      if (!data.sessionId) {
        console.error("Error: No sessionId received");
        return;
      }
    
      const stripeUI = await stripe;
      if (!stripeUI) {
        console.error("Stripe.js failed to load");
        return;
      }
    
      const { error } = await stripeUI.redirectToCheckout({
        sessionId: data.sessionId,
      });
    
      if (error) console.error("Stripe Checkout Error:", error.message);
    };
    
  return (
    <div className="h-auto w-auto flex lg:flex-row flex-col justify-center gap-[50px] lg:gap-20 md:gap-20 items-center  lg:px-10 xl:p-0 pb-10">
                <div className="h-auto w-auto flex flex-col lg:gap-[40px] gap-[22px] md:gap-[35px] ">
                <h1 className="lg:text-[22px] text-[18px] md:text-[20px] font-semibold ">Bag</h1>
               {cart.length > 0 ? (
            cart.map((item:Product) => (
              <div>
                
                  <div className="lg:h-[211px] lg:w-[500px] xl:w-[800px] w-[300px] h-[120px]  flex items-start justify-between border-b-[0.3px] border-color10  lg:pr-20">
                  <div className="flex lg:gap-[35px] gap-[10px] md:gap-[22px]">
                        <div>
                          <img
                            className="h-[90px] w-[90px]"
                            src={item.imageURL}
                            width={150}
                            height={150}
                            alt="product image"
                          ></img>
                        </div>
                        <div className="flex flex-col lg:gap-[20px] gap-[8px] md:gap-[16px] text-color12">
                          <h1 className="text-color lg:text-[16px] text-[12px] md:text-[14px]">{item.title}</h1>
                          <div className="flex flex-col lg:gap-[6px] gap-[5px] ">
                            <p className="lg:text-[16px] text-[10px] md:text-[12px]">Ashen Slate/Cobalt Bliss</p>
                            <div className="flex lg:gap-[19px] gap-[15px] md:gap-[17px] lg:text-[15px] text-[12px]">
                              <div className="flex justify-center items-center lg:gap-[10px] gap-[8px]">
                                <p>Quantity</p>
                                <div className="flex ">
                                <button className="bg-color5 h-[16px] w-[14px] md:h-[20px] md:w-[18px] rounded-l-[4px] text-white font-semibold text-[10px] md:text-[14px] md:font-bold text-center" onClick={() => handleQuantityChange(item._id, Math.max(0, item.quantity - 1))}>-</button>
                                <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item._id , Number(e.target.value))} className="bg-color27 flex justify-center items-center text-color h-[16px] w-[20px] text-center font-semibold text-[12px] md:h-[20px] md:w-[24px] outline-none focus:outline-none" />
                                <button className="bg-color5 h-[16px] w-[14px] md:h-[20px] md:w-[18px] rounded-r-[4px] text-white font-semibold text-[10px] md:text-[14px] md:font-bold text-center" onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</button>
                                </div>
                                {/* <p>{item.quantity}</p> */}
                              </div>
                            </div>
                            <div className="flex gap-3">
                            <div className="flex lg:gap-[10px] gap-[6px] lg:text-[15px] text-[12px]">
                                <p>Size:</p>
                                <p>L</p>
                              </div>
                            <button onClick={() => removeFromCart(item._id)}><TrashIcon className="h-[12px] w-[12px] lg:h-[15px] lg:w-[15px]"/></button>
                            </div>
                          </div>
                          <div className="flex lg:gap-[10px] gap-[8px]">
                            <div>
                              {/* <Image
                                className="h-[13px] w-[13px] md:h-[15px] md:w-[15px]"
                                src={image2}
                                width={24}
                                height={24}
                                alt="heart icon"
                              ></Image> */}
                            </div>
                            <div>
                              {/* <Image
                                className="h-[13px] w-[13px] md:h-[15px] md:w-[15px]"
                                src={image3}
                                width={24}
                                height={24}
                                alt="trash icon"
                              ></Image> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] lg:text-[15px]">MRP: ${item.price * item.quantity}</div>
                    </div>
                  </div>
            ))
          ) : (
<div className="flex flex-col items-center justify-center">
  <p className="text-[14px] text-gray-600">Your cart is empty.</p>
  <a
    href="/productpage" 
    className="text-[13px] text-blue-500 underline hover:text-blue-700 mt-2"
  >
    Shop Now
  </a>
</div>          )}

                              {cart.length > 0 ? <div className="flex justify-center"><button className="bg-color5 h-[25px] w-[80px] text-white rounded-[4px] text-[12px]" onClick={clearCart}>Clear Cart</button></div> : ""}
 {alertMessage && (
        <Alert message={alertMessage} onClose={handleCloseAlert} />

 )}
              </div>
    
          {/* Summary Section */}
          {cart.length > 0 ? 
          <div className="lg:w-[350px] lg:h-[295px] w-[240px] h-[200px] md:w-[230px] md:h-[250px] flex flex-col lg:gap-[30px] gap-[10px] md:gap-[20px]">
          <h1 className="lg:text-[21px] text-[16px] md:text-[19px] text-black font-semibold ">Summary</h1>
          <div className="flex flex-col lg:gap-[8px] gap-[4px] md:gap-[6px]">
            <div className="lg:w-[334px] lg:h-[28px] w-[224px] h-[26px] flex justify-between items-center lg:text-[14px] text-[12px] ">
              <p>Subtotal</p>
              <p>${calculateSubtotal()}</p>
            </div>
            <div className="lg:w-[334px] lg:h-[28px] w-[224px] h-[26px] flex justify-between items-center lg:text-[14px] text-[12px] ">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <div className="lg:w-[340px] lg:h-[62px] w-[220px] h-[36px] flex justify-between items-center lg:text-[14px] border-y-[1px] border-color11 text-[12px] ">
              <p>Total</p>
              <p>${calculateTotal()}</p>
            </div>
            <button
            onClick={handleCheckout}
             className="lg:w-[334px] lg:h-[60px] h-[35px] w-[224px] flex justify-center items-center lg:text-[15px] text-[12px] md:text-[13.5px] lg:rounded-[30px] rounded-[20px] text-white bg-color5">
              Member Checkout
            </button>
          </div>
        </div>
        
        : ""}
          
          </div>
        // </div>
      );
    }
    