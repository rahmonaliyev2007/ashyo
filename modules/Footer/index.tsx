import React from 'react'
import { FooterLeft } from './FooterLeft'
import FooterCenter from './FooterCenter'
import FooterRight from './FooterRight'

export default function Footer() {
  return (
    <footer className='flex justify-between items-start gap-[10px] containers !mt-[130px]'>
        <FooterLeft/>
        <FooterCenter/>
        <FooterRight/>
    </footer>
  )
}