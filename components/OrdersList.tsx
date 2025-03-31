'use client'

import { useIntersection } from '@mantine/hooks'
import { Order } from '@prisma/client'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'


import OrderCardSkeleton from '@/components/skeletons/OrderCardSkeleton'
import OrderCard from './cards/OrderCard'


interface OrdersListProps {
  initialOrders: Order[]
  totalData: number
}

const OrdersList: React.FC<OrdersListProps> = ({
  initialOrders,
  totalData,
}) => {
  const lastOrderRef = useRef<HTMLElement>(null)

  const { ref, entry } = useIntersection({
    root: lastOrderRef.current,
    threshold: 1,
  })

  const searchParams = useSearchParams()
  const status = searchParams.get('status')


  const orders = initialOrders

  return (
    <>
      {orders.length > 0 ? (
        orders.map((order, index) => {
          if (index === orders.length - 1 && orders.length < totalData) {
            return (
              <div key={order.id} ref={ref}>
                <OrderCard order={order} />
              </div>
            )
          } else {
            return <OrderCard key={order.id} order={order} />
          }
        })
      ) : (
        <div className='min-h-[200px]'>
          <h2 className='font-semibold text-xl text-center'>No orders found</h2>
        </div>
      )}
      {<OrderCardSkeleton />}
    </>
  )
}

export default OrdersList
