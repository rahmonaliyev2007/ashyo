"use client"
import { Link } from '@/i18n/navigation';
import { getCustomProducts } from '@/service/getCustomProducts'
import { useTranslations } from 'next-intl';
import React, { useContext, useState } from 'react'
import ProductsMain from './ProductsMain';
import Products from '@/components/Products/Products';
import { FilterIcon } from '@/assets/icons';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { ThemeContext } from '@/context/ThemeProvider';
import SortComponent from './ProductParametrs/Sort';
import LimitComponent from './ProductParametrs/Limit';
import ProductsPagination from './Pagination.tsx';
import PriceComponent from './ProductParametrs/Price';
import ProductsLeftSide from './ProductsLeftSide';

function ProductsPage() {
  const t = useTranslations("Products");
  const { data: products, isLoading, isFetching, isError } = getCustomProducts();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className='containers'>
        <div className='flex gap-3 text-[#B6BABF] text-[14px] font-normal mt-[20px] mb-[32px] max-[680px]:text-[12px] max-[680px]:mb-[20px]'><Link href={'/'}>{t('main')}</Link> <span>/</span> <p className='max-[680px]:text-[#134E9B]'>{t('products')} </p> <span>/</span></div>
        <div className='flex justify-between items-start gap-[21px] max-[680px]:flex-col max-[680px]:gap-[10px]'>
          <div className='flex justify-between gap-[10px] items-center w-full min-[680px]:hidden '>
            <Button title={t('filter')} onClick={() => setIsModalOpen(true)} iconPosition='right' icon={<FilterIcon />} extraStyle='text-[14px] !py-[11px] !px-[20px] max-[480px]:text-[12px]' />
            <div className='min-[680px]:hidden py-[5px] w-full flex justify-between bg-[#EBEFF3] ml-[13px] max-[690px]:ml-0 duration-500 rounded-[6px] max-[480px]:py-[3px]  '>
              <SortComponent />
              <LimitComponent />
            </div>
          </div>
          <ProductsLeftSide />
          <div className='w-[100%]'>
          <ProductsMain products={products.items} isError={isError} isLoading={isLoading} isFetching={isFetching} />
          </div>
        </div>
        <ProductsPagination totalPages={products?.totalPages} />
      </div>
      <Products title={t('productsTitle')} api='products' />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} extraStyle='max-[400px]:!p-0'>
        <PriceComponent mobile={true} setIsModalOpen={setIsModalOpen}/>
      </Modal>
    </>
  )
}

export default ProductsPage