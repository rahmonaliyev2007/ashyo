import Link from 'next/link'
import React from 'react'

export default function FooterRight() {
  return (
    <div>
      <h4 className="text-[#000000B2] text-xl font-bold mb-[18px] max-w-[340px] w-full">Aloqa</h4>
      <Link href={'tel:+998711234567'} className='text-2xl font-bold hover:underline'>+998 (71) 123-45-67</Link>
        <label className='block mt-[32px]'> 
            <span className='block'>Savolingiz bormi?</span>
            <input type="text" placeholder=' O’zingiz qiziqtirgan savollarni bering' className='bg-[#EBEFF3] outline-none text-[12px] rounded-[6px] p-[10px] max-w-[340px] block w-full'/>
        </label>
    </div >
  )
}