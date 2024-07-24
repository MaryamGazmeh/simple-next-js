import Card from "@/components/shared/card";
import Link from "next/link";
import React from "react";

const Products = ({ product }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Product Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {product.slice(0, 11).map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <Card product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
}

export default Products;