import OrdersList from '@/components/OrdersList'
import prisma from '@/lib/db'

const OrdersPage = async ({
  searchParams,
}: {
  searchParams: { status: 'PENDING' | 'PAID' | 'CANCELED' }
}) => {
  let orders
  let ordersCount

  return (
    <div className='py-4 px-1 space-y-6'>
      <OrdersList initialOrders={orders} totalData={ordersCount!} />
    </div>
  )
}
export default OrdersPage
