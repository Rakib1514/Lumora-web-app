import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { _id } = useParams();

  const { data:product, isLoading } = useQuery({
    queryKey: ["item", _id],
    queryFn: async () => {
      const res = await axios.get(`/items/${_id}`);

      return res.data.product;
    },
  });

  if(isLoading){
    return <span>Loading in product details</span>
  }

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-screen mt-[6rem]">
      <div className="overflow-hidden">
        <img src={product.image[0]} alt={product.title} className="h-full w-full object-cover"/>
      </div>
      <div className="px-32 gap-4 flex justify-center items-center flex-col text-center h-full">
        <h2 className="font-bold! text-2xl">{product.title}</h2>
        <span className="capitalize">{product.category.name}</span>
        <span>{product.description}</span>
        <button className="w-full py-2 border-primary border-2 mt-12 hover:bg-primary/10 transition-colors duration-500 font-bold text-primary!">ASK FOR PRICE</button>
      </div>
    </div>
  );
};

export default ProductDetails;
