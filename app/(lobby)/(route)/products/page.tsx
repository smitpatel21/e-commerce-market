import Filter from "@/components/Filter"
import { Heading } from "@/components/Heading"
import ProductsList from "@/components/ProductsList"



const Products = async ({
  searchParams,
}: {
  searchParams: { category: string }
}) => {
 
  let totalProducts
  return (
    <div className='flex flex-col py-6 sm:py-10 px-4 sm:px-6 lg:px-8'>
      <Heading
        title={`Products (${totalProducts})`}
        description='Explore all products from around the world'
      />
      <Filter categories={[]} className='mt-8 sm:mt-10 mb-4 sm:mb-6' />
      <ProductsList initialProducts={[]} totalData={0} />
    </div>
  )
}

export default Products
