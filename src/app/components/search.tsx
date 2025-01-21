"use client";

import { GetProductData } from '@/sanity/sanity.query';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Image1 from "../../../public/search.png"
import { ProductInterface } from '../(with-header)/productpage/[id]/page';
export default function Search() {
    
   
    
          const [products, setProducts] = useState<ProductInterface[]>([]); // Sanity data
          const [searchTerm, setSearchTerm] = useState(""); // User input
          const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>([]); // Filtered results
        
       useEffect(() => {
             
            async function fetchProductData() {
              const productData = await GetProductData();
              setProducts(productData);
                 
            }
            fetchProductData();
    
          }, []);
                
          useEffect(() => {
            const results = products.filter((product:any) =>
                (product.title || "").toLowerCase().includes(searchTerm.toLowerCase()) || // Match title
            (product.description || "").toLowerCase().includes(searchTerm.toLowerCase()) // Match description
            );
            setFilteredProducts(results.slice(0, 3));
          }, [searchTerm, products]);

        
  return (
  <div></div>
  )
}
