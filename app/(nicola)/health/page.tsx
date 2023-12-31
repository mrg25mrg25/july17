import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
   <div className="health py-2 px-3">
    <div className="text capitalize text-4xl font-bold  sm:text-center
        sm:w-1/2 sm:mx-auto sm:py-32 py-24">
      <div className="wlc text-lg uppercase pb-3">welcome to heisenberg</div>
      <div className="p1">isnt it time to care about</div>
      <div className="p2 pb-3">your own health?</div>
      <div className="p3 text-sm">do not forget your future your lifetime depends on your health condition. if you want to live a long life then lets focus now</div>
      <div className="link grid grid-cols-2  sm:justify-items-center">
      <Link href="./care"><div className="l1 text-lg border border-cyan-600 py-1 px-1 text-center bg-slate-200 font-medium bg-transparent w-32 mt-2  border-2  rounded">why us</div></Link>
      <Link href="./support"><div className="l2 text-lg border border-cyan-600 py-1 px-1 text-center bg-slate-200 font-medium bg-transparent w-32 mt-2  border-2  rounded">learn more</div></Link>
    </div>
    </div>
   </div>
  )
}
