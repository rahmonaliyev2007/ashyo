import Link from 'next/link';
import React from 'react';



const footerLinks: {title:string, href:string}[] = [
  { title: 'Ashyo haqida', href: '/' },
  { title: 'Foydalanish shartlari', href: '/' },
  { title: 'Maxfiylik va hafsizlik siyosati', href: '/' },
  { title: 'Mahsulotlarni va tovarlarni qaytarish siyosati', href: '/' },
  { title: 'Biz bilan aloqa', href: '/' },
];

function FooterCenter() {
  return (
    <div>
      <h4 className="text-[#000000B2] text-xl font-bold mb-[18px]">Menyu</h4>
      <ul className='max-w-[236px] flex flex-col gap-[9px]'>
        {footerLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="hover:text-[#134E9B] duration-1000 text-base text-[#000000B2]">{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterCenter;