import React, { useState, useEffect } from 'react';
export default function RotatingTitles({ titles, interval=2000 }) {
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    const id=setInterval(()=>setIndex(i=>(i+1)%titles.length), interval);
    return ()=>clearInterval(id);
  },[titles,interval]);
  return <h2>{titles[index]}</h2>;
}
