"use client";
import Image from "next/image";
import cartlogo from "/public/Group.png";
import { useState, useEffect } from "react";
import { GetFeaturedProducts, GetProductData } from "@/sanity/sanity.query";
import Link from "next/link";
import sanityClient from "@/sanity/sanity.client";
import Alert from "@/app/components/alerts/product-added";
import LikeButton from "@/components/liked-button/page";
import SocialShare from "@/app/components/social-sharing";

export interface ProductInterface {
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
}

export default function Details({ params }: { params: { id: string } }) {
  const [productData, setProductData] = useState<ProductInterface | null>(null);
  const [featuredProductData, setFeaturedProductData] = useState<ProductInterface[]>([]);
  const [newReview, setNewReview] = useState({ reviewText: "", username: "" });
  const [visible, setVisible] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleVIsibility = () => {
    setVisible(visible => !visible)
  }
  const [visible2, setVisible2] = useState<boolean>(false);
  const handleVIsibility2 = () => {
    setVisible2(visible2 => !visible2)
  }
  useEffect(() => {
    async function fetchProductData() {
      try {
        const productData = await GetProductData();
        const product = productData.find((data: ProductInterface) => String(data._id) === params.id);
        setProductData(product);

        const featuredProducts: ProductInterface[] = await GetFeaturedProducts();
        setFeaturedProductData(featuredProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProductData();
  }, [params.id]);

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
  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));

  };

  const handleReviewSubmit = async () => {
    if (productData) {
      const updatedProduct = {
        ...productData,
        reviews: [...(productData.reviews || []), newReview], // Use empty array if reviews is undefined
      };
      setAlertMessage("Review has been added!");

      const productId = String(productData._id);

      await sanityClient
        .patch(productId)
        .set({ reviews: updatedProduct.reviews })
        .commit();

      setProductData(updatedProduct);
      setNewReview({ reviewText: "", username: "" });
    }
  };
  const clearReviews = () => {
    setNewReview({ reviewText: "", username: "" });
  };

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };


  return productData ? (
    <div>
      <section className="flex flex-col md:flex-row xl:gap-20 h-full md:gap-8 gap-10 items-center md:items-start justify-center py-8 md:py-12 pb-5 md:pt-5 lg:pt-16 md:pl-10">
      <div className="relative">
            <img
            src={productData.imageURL}
            alt={productData.title}
            height={607}
            width={675}
            className="xl:h-[607px] xl:w-[675px] lg:h-[300px] lg:w-[320px] h-[200px] w-[215px] md:h-[250px] md:w-[400px]"
          />
          <div className="absolute top-2 right-2 lg:top-3 lg:right-3 xl:right-4 xl:top-4">
            <LikeButton item={productData} />
          </div>
         </div>
        <div className="flex flex-col xl:gap-5 gap-3 pl-2 ml-2">
          <h1 className="xl:text-[60px] lg:text-[35px] font-bold xl:w-[500px] text-[17px] md:text-[20px]">
            {productData.title}</h1>
          <div className="xl:h-[44px] xl:w-[144px] lg:h-[25px] lg:w-[100px] lg:text-[12px] h-[20px] w-[90px] text-[10px] rounded-full bg-color5 text-white flex items-center justify-center xl:text-[20px]">
            ${productData.price} USD</div>
          <div className="h-[1px] xl:w-[521px] bg-color27 lg:w-[400px] w-[90%]"></div>
          <p className="xl:text-[22px] text-[12px] xl:h-[101px] lg:w-[400px] xl:w-[543px] text-color w-[80%]">{productData.description}</p>
          <SocialShare />
          <div className=" flex flex-col gap-5 justify-around">
            <button
              className="xl:h-[63px] xl:w-[212px] h-[28px] w-[120px] lg:h-[40px] lg:w-[180px] rounded-[4px] bg-color5 flex items-center justify-center text-white xl:gap-3 md:gap-2 gap-1 text-[12px] lg:text-[17px]"
              onClick={() => addToCart(productData)}
            >
              <div>
                <Image width={29} height={29} src={cartlogo} alt="cart logo" className="xl:h-[29px] xl:w-[29px] h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]" />
              </div>
              <p className="xl:text-[22px]">Add To cart</p>
            </button>


            {alertMessage && (
              <Alert message={alertMessage} onClose={handleCloseAlert} />

            )}
           <button
              onClick={handleVIsibility}
            >
            {visible ? 
            <div className="flex justify-center items-center xl:h-[63px] xl:w-[212px] h-[28px] w-[120px] lg:h-[40px] lg:w-[180px] rounded-[4px] bg-color5 text-white gap-0.5 text-[12px] lg:text-[17px] xl:text-[19px]">Check Reviews
             <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-6 h-6 md:h-7 md:w-7 lg:h-9 lg:w-9 xl:h-12 xl:w-12"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 10l-4 4-4-4" />
                  </svg>
                  </div> : 
            <div className="flex justify-center items-center xl:h-[63px] xl:w-[212px] h-[28px] w-[120px] lg:h-[40px] lg:w-[180px] rounded-[4px] bg-color5 text-white xl:gap-3 md:gap-2 gap-1 text-[12px] lg:text-[17px]">Check Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-6 h-6 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-16 xl:w-14"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 14l4-4 4 4" />
                  </svg>
                  </div>
                  }
           
 </button>
          </div>
        </div>
      </section>


      {/* Review Section */}

      {visible ?
        <section className="mt-8 px-4 md:px-10 lg:px-16">

          {/* Reviews */}

          <h2 className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold mb-4 text-left mt-5 ml-3 lg:mt-10 lg:ml-5">Reviews</h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-3 lg:mx-7">
              {productData.reviews?.map((review) => (
                <div className="flex flex-col items-center">
                  <div
                    className="p-3 border-[0.5px] w-[280px] md:w-[320px] lg:w-[280px] xl:w-[380px] flex flex-col flex-nowrap rounded-[4px] shadow-md bg-white hover:shadow-lg transition-shadow duration-100"
                  >
                    <div className="flex items-center mb-3">
                      <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                      </div>
                      <div className="ml-1.5">
                        <p className="font-semibold text-gray-800 text-[14px]">{review.username}</p>
                      </div>
                    </div>
                    <p className="text-[14px] text-gray-700 break-words whitespace-normal">
                      {review.reviewText}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex flex-col items-center justify-center gap-2 ">
                {productData?.reviews?.length > 0 ? "" : <div className="text-[13px] md:text-[15px] xl:text-[18px]">No reviews yet. Be the first to add yours!</div>}
                <button
                  className="xl:h-[63px] xl:w-[212px] h-[28px] w-[120px] lg:h-[40px] lg:w-[180px] rounded-[4px] bg-color5 flex items-center justify-center text-white xl:gap-3 md:gap-2 gap-1 text-[12px] lg:text-[17px] ml-2"
                  onClick={handleVIsibility2}
                >Add Reviews</button>
              </div>
            </div>

          </div>

          {/* Review Form */}
          {visible2 ?
            <div className=" lg:mx-5 ">
              <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
                <h1 className="text-md lg:text-lg font-semibold text-center mb-6">
                  How would you rate the overall comfort of {productData.title}?
                </h1>
                <div className="flex flex-col gap-4 items-center">
                  <input
                    type="text"
                    name="username"
                    value={newReview.username}
                    onChange={handleReviewChange}
                    placeholder="Your name"
                    className="w-full max-w-md h-12 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-color15"
                  />
                  <div className="w-full max-w-md">
                    <label className="block text-sm text-gray-700 mb-2 ">
                      Can you tell us more about your experience with {productData.title}?
                    </label>
                    <textarea
                      name="reviewText"
                      value={newReview.reviewText}
                      onChange={handleReviewChange}
                      placeholder="Write your review here"
                      className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-color15"
                    ></textarea>
                  </div>
                  <div className="flex gap-4 w-full max-w-md mt-4">
                    <button className="w-1/2 h-11 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300"
                      onClick={() => { clearReviews(); handleVIsibility2(); }}>
                      Cancel
                    </button>

                    <button
                      className="w-1/2 h-11 bg-color5 text-white font-semibold rounded-lg hover:bg-color6"
                      onClick={handleReviewSubmit}
                    >
                      Submit
                    </button>
                    {alertMessage && (
                      <Alert message={alertMessage} onClose={handleCloseAlert} />

                    )}
                  </div>
                </div>
              </div>
            </div>
            : ""
          }


        </section> :
        ""
      }



      {/* Featured Products Section */}
      <section className="h-full bg-white flex flex-col py-8 md:py-12 gap-[8px] justify-center items-center  xl:px-10  px-6">
        <div className="flex justify-between items-center w-[100%] lg:px-28 xl:px-0">
          <h1 className="xl:text-[28px] text-[16px] md:text-[22px] text-black font-bold">Featured Products</h1>
          <div className="border-b-[2px] border-black text-black xl:text-[18px] text-[12px] md:text-[14px] font-semibold xl:h-[31px] xl:w-[75px] flex justify-center items-center"><Link href={"/shop"}>View all</Link></div>
        </div>
        <div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-x-[25px] gap-y-[10px]">
            {featuredProductData.map((item) => (
              <Link href={`/productpage/${item._id}`}>
                <div className="xl:h-[306px] xl:w-[263px] lg:w-[133px] flex flex-col xl:gap-[10px] gap-[5px] md:gap-[8px] text-color">
                  <img className="xl:h-[263px] xl:w-[263px] h-[110px] w-[110px] md:w-[140px] md:h-[140px]" width={312} height={312} src={item.imageURL} alt={item.title} />
                  <div className="flex justify-between items-center">
                    <h3 className="xl:text-[16px] text-[10px] md:text-[12px] group-hover:text-color6">{item.title}</h3>
                    <h2 className="xl:text-[14px] text-[8px] md:text-[10px] font-bold">{item.price}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  ) : (
    <p>Product not found!!!</p>
  );
}