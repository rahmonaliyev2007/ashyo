"use client"
import Button from '@/components/Button'
import HeaderInput from '@/components/HeaderInput'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function ContactsPage() {
  const t = useTranslations('ContactPage')
  const [user, setUser] = useState({ name: "", surname: "", phone: "", email: "", fikr: "" });
  const [errors, setErrors] = useState({ email: false, name: false, surname: false, fikr: false, phone: false });

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const sendToTgBot = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = { email: user.email.trim() === '', surname: user.surname.trim() === '', name: user.name.trim() === '', fikr: user.fikr.trim() === '', phone: user.phone.trim() === '', };
    setErrors(newErrors);
    const isValid = !newErrors.email && !newErrors.phone && !newErrors.name && !newErrors.fikr && !newErrors.surname;
    if (!isValid) return;

    try {
      await fetch(`https://api.telegram.org/bot7696673947:AAEj2CAlIWe-9IHkHNKbM-D1UUwPNpCmKwA/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: 7498582082,
          text: `<b>Ashyo saytida foydalanuvchi fikr bildirdi</b>
          
<b>F.I.SH:</b> ${user.name} ${user.surname}
          
<b>Email:</b> ${user.email}
          
<b>Telefon raqami:</b> ${user.phone}
          
<b>Fikri:</b> ${user.fikr}`,
          parse_mode: 'HTML',
        }),
      });
      toast.success(t('sendMessage'), { duration: 7000 });
      setUser({ name: "", surname: "", phone: "", email: "", fikr: "" });
    } catch (telegramErr) {
      console.error(telegramErr);
    }

  }
  return (
    <>
      <div className='containers'>
        <div className='flex gap-3 text-[#B6BABF] text-[14px] max-[600px]:text-[12px] max-[600px]:mb-[8px] font-normal mt-[20px] mb-[22px]'><Link href={'/'}>{t('home')}</Link> <span>/</span> <p>{t('pageName')}</p> <span>/</span></div>
        <h2 className={`text-[#0A1729] font-bold text-[32px] max-[700px]:text-2xl max-[500px]:text-xl`}>{t('title')}</h2>
        <p className={`text-[#00000099] text-base leading-[130%] max-w-[771px] max-[700px]:text-sm max-[500px]:text-xs`}>{t('sub')}</p>
        <form onSubmit={sendToTgBot} className='max-w-[690px]'>
          <div className='flex gap-[10px] mt-[35px] max-[500px]:mt-[10px]'>
            <label className="relative w-full">
              <span className='text-[#848B93] text-[12px] ml-[12px]'>{t('name')}</span>
              <HeaderInput name="name" type="text" extraStyle={`w-full max-[600px]:!text-[12px] max-[600px]:!py-[8px] mt-[4px] max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ${errors.name && 'border-red-500 placeholder:text-red-500'}`} value={user.name} onChange={handleChangeValue} />
            </label>
            <label className="relative w-full">
              <span className='text-[#848B93] text-[12px] ml-[12px]'>{t('surname')}</span>
              <HeaderInput name="surname" type="text" extraStyle={`w-full max-[600px]:!text-[12px] max-[600px]:!py-[8px] mt-[4px] max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ${errors.surname && 'border-red-500 placeholder:text-red-500'}`} value={user.surname} onChange={handleChangeValue} />
            </label>
          </div>
          <div className='flex gap-[10px] mt-[30px]  max-[500px]:mt-[10px] max-[500px]:flex-col'>
          <label className="relative w-full">
          <span className='text-[#848B93] text-[12px] ml-[12px]'>{t('phone')}</span>
            <HeaderInput name="phone" type="text" extraStyle={`w-full max-[600px]:!text-[12px] max-[600px]:!py-[8px] mt-[4px] max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ${errors.phone && 'border-red-500 placeholder:text-red-500'}`} value={user.phone} onChange={handleChangeValue} />
          </label>
          <label className="relative w-full">
          <span className='text-[#848B93] text-[12px] ml-[12px]'>{t('email')}</span>
            <HeaderInput name="email" type="text" extraStyle={`w-full max-[600px]:!text-[12px] max-[600px]:!py-[8px] mt-[4px] max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ${errors.email && 'border-red-500 placeholder:text-red-500'}`} value={user.email} onChange={handleChangeValue} />
          </label>
          </div>
          <label className="relative w-full mt-[30px] block  max-[500px]:mt-[10px] " >
          <span className='text-[#848B93] text-[12px] ml-[12px]'>{t('fikr')}</span>
            <textarea name="fikr" className={`w-full max-[500px]:h-[60px] h-[130px] mt-[4px] px-3 py-2 rounded-md border border-[#EBEFF3] bg-[#EBEFF3] ${errors.fikr ? 'border-red-500 placeholder:text-red-500' : 'border-[#EBEFF3]'} text-[16px] resize-none max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px]`} value={user.fikr} onChange={(e) => setUser({ ...user, fikr: e.target.value })} />
          </label>
          <Button title={t('send')} extraStyle='w-full mt-[30px] max-[600px]:text-[12px] max-[500px]:mt-[10px] max-[500px]:py-[10px]'/>
        </form>
      </div>
      <div className="w-full h-[400px] max-[600px]:mt-[60px] max-[600px]:h-[200px] mt-[115px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11985.080658903998!2d69.22955243393349!3d41.32473827171448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b722d3227a5%3A0x92eae4f5ce0cbe00!2z0KXQsNC00YDQsCwg0KLQsNGI0LrQtdC90YIsINCi0LDRiNC60LXQvdGC0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1746379212056!5m2!1sru!2s"
          className="w-full h-full border-0 rounded-md"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  )
}

export default ContactsPage