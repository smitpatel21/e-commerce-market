import Gallery from '@/components/gallery/Gallery'
import Info from '@/components/Info'
import prisma from '@/lib/db'

const ProductDetails = async ({
  searchParams,
}: {
  searchParams: { productId: string }
}) => {
  

  return (
    <div className='p-4 sm:p-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:items-start lg:gap-x-8'>
        {/* @ts-expect-error */}
        <Gallery images={product?.images} />
        <Info product={{}} />
      </div>
    </div>
  )
}

export default ProductDetails
