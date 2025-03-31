'use client'

import { useIntersection } from '@mantine/hooks'
import { Product } from '@prisma/client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import ProductCard from '@/components/cards/ProductCard'
import ProductCardSkeleton from '@/components/skeletons/ProductCardSkeleton'


interface ProductsListProps {
  initialProducts: Product[]
  totalData: number
}

const ProductsList: React.FC<ProductsListProps> = ({
  initialProducts,
  totalData,
}) => {
  const lastPostRef = useRef<HTMLElement>(null)
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  })

  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const products = initialProducts
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((product, index) => {
        if (index === products.length - 1 && products.length < totalData) {
          return (
            <div key={product.id} ref={ref}>
              <ProductCard product={product} />
            </div>
          )
        } else {
          return <ProductCard key={product.id} product={product} />
        }
      })}
      {
        Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
    </div>
  )
}

export default ProductsList
