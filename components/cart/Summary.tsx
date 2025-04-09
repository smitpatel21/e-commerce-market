'use client'


import axios, { AxiosError } from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


import { Button } from '@/components/ui/Button'


const Summary = () => {
  const [token, setToken] = useState<string>('')
  const session = useSession()
  const router = useRouter()
  const cart = {items:[{id:1, name:'test', images:[{url:''}], storeId:1, slug:'test', categoryId:'test', price:1}]}

  return (
    <div
      className='
        mt-16
        rounded-lg
        bg-gray-50
        px-4
        py-6
        sm:p-6
        lg:col-span-5
        lg:mt-0
        lg:p-8
      '
    >
      <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <div className='text-base font-medium text-gray-900'>Order total</div>
          
        </div>
        <Button
          disabled={cart.items.length === 0 }
          
          
          className='w-full mt-6 hover:before:-translate-x-[500px]'
        >
          Checkout
        </Button>
      </div>
    </div>
  )
}

export default Summary
