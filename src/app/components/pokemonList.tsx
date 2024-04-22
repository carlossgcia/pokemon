import React from "react";
import Image from "next/image";
import Link from "next/link";

const PokemonList = ({ name, image }) => {
  console.log(name);
  console.log(image);
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
        <img src={image} alt="" />

        {/* <Image
          className="w-full h-64 object-cover"
          src={image}
          alt={`Imagen de ${name}`}
          width={300}
          height={300}
        /> */}
        <div className="px-6 py-4">
          <Link
            href={`/pokemon/${name}`}
            className="block text-xl font-bold mb-2 text-blue-600 hover:underline"
          >
            {name}
          </Link>
        </div>
      </div>
    </>
  );
};

export default PokemonList;
