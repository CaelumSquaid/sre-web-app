import Image from 'next/image'
import React from 'react'

function Product() {
  return (
    <div className="rounded bg-gray-300 h-52 w-52 cursor-pointer hover:scale-[102%] transition-transform delay-75 ease-in-out">
      {/* <Image src="" width={1000} height={1000} className="object-cover" alt="test_picture" /> */}
    </div>
  )
}

export default Product