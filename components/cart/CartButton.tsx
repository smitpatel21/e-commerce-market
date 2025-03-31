'use client'
import { ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/Button"

const CartButton = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const router = useRouter()
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Button
      onClick={() => router.push('/cart')}
      size='sm'
      className='gap-x-1'
      variant='outline'
    >
      <ShoppingCart className='w-4 h-4' />
    </Button>
  )
}

export default CartButton
