import Link from "next/link";
import React from "react";

const DetailProduct = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <img src={data.url} className="w-full max-w-md rounded-lg shadow-md" />
      <h1 className="text-2xl font-bold text-gray-800">{data.title}</h1>
      <Link href={'/products'} className=" bg-zinc-400 p-2 border-l-violet-50 rounded-md">Back Home</Link>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: String(item.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(paramID) {
  const cardID = paramID.params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${cardID}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default DetailProduct;