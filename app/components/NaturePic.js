"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import bear from '@/public/bear.svg'
import bonfire from '@/public/bonfire.svg'
import deer from '@/public/deer.svg'
import fish from '@/public/fish.svg'
import forest from '@/public/forest.svg'
import tree from '@/public/tree.svg'
import heart from '@/public/heart.svg'
function NaturePic({type}) {
    const [fav,setFav]=useState(0);
    const svgMap={
        bear,
        bonfire,
        deer,
        fish,
        forest,
        tree,
    };
  return (
    <div className='my-5 relative'>
        <button onClick={()=>{setFav(fav+1)}}><Image src={svgMap[type]} width={150} height={150} alt={""}/></button>
        <Image className='absolute bottom-2 right-8' src={heart} width={20+fav*5} height={20+fav*5} alt={""}/>
    </div>
  )
}

export default NaturePic