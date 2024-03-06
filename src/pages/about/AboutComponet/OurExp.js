import Image from 'next/image'
import React from 'react'

export default function OurExp() {
  return (
    <div className='ourExp'>
        <div className='ourExp_container'>
            <h3></h3>
            <span></span>
            {/* <div className='ourExp_container_'>
                {ourExpArry.map((item) => (
                    <div>
                        <figure><Image fill src={item.img} alt="img"/></figure>
                        <span>{item.dsec}</span>
                    </div>
                ))}
            </div> */}
        </div>
    </div>
  )
}
