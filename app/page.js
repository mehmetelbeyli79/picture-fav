"use client";
import Image from "next/image";
import { useState } from "react";
import NaturePic from "./components/NaturePic";
export default function Home() {
  const nature = ["bear", "bonfire", "deer", "fish", "forest", "tree"];
  const [picture, setPicture] = useState([]);
  const handleClick = () => {
    const randomNaturePic = Math.floor(Math.random() * nature.length);
    //console.log(randomNaturePic);
    setPicture([...picture, nature[randomNaturePic]]);
    console.log(picture);
  };
  const renderedPictures = picture.map((pic, index) => {
    return <NaturePic key={index} type={pic} />;
  });

  return (
    <main className="flex w-full justify-center items-center py-7 px-6">
      <div className="flex w-4/6 flex-col">
        <h2 className="text-center text-2xl mb-4">
          NEXT.js 13 İle Basit Beğeni Uygulaması
        </h2>
        <button
          onClick={handleClick}
          className="btn btn-block btn-accent text-black"
        >
          Doğa Resmi Ekle
        </button>
        <div className="flex justify-evenly flex-wrap mt-3">
          {picture.length===0 ? "Henüz Resim Eklemediniz" : renderedPictures}
        </div>
      </div>
    </main>
  );
}
