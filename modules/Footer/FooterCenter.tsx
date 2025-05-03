import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

function FooterCenter() {
  const t = useTranslations('Footer.footerLinks')
  const footerLinks: {title:string, href:string}[] = [
    { title: t('1'), href: '/pages/aboutUS' },
    { title: t('2'), href: '/pages/aboutUS' },
    { title: t('3'), href: '/pages/aboutUS' },
    { title: t('4'), href: '/pages/aboutUS' },
    { title: t('5'), href: '/pages/aboutUS' },
  ];
  return (
    <div>
      <h4 className="text-[#000000B2] text-xl font-bold mb-[18px] max-[750px]:mb-[4px] max-[750px]:text-[14px]">{t('menu')}</h4>
      <ul className='max-w-[236px] flex flex-col gap-[9px] max-[750px]:gap-[2px]'>
        {footerLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="hover:text-[#134E9B] duration-1000 text-base max-[750px]:text-[12px] text-[#000000B2]">{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterCenter;