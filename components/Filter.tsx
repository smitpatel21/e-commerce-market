'use client'

import { Category } from '@prisma/client'
import { Plus } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Separator } from '@/components/ui/Separator'

import { cn } from '@/lib/util'
import { Sheet, SheetContent, SheetTrigger } from './ui/Sheet'



interface FilterProps extends React.HTMLAttributes<HTMLDivElement> {
  categories: Category[]
}

const Filter: React.FC<FilterProps> = ({ categories, className, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const searchParams = useSearchParams()

  const selectedCategory = searchParams.get('category')

  const changeCategory = (categorySlug: string) => {
    setIsOpen(false)

    if (categorySlug === selectedCategory) {
      return window.location.assign('/products')
    }

    window.location.assign(`/products?category=${categorySlug}`)
  }

  return (
    <div className={cn('flex', className)} {...props}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button className='flex items-center gap-x-2'>
            Filters
            <Plus />
          </Button>
        </SheetTrigger>
        <SheetContent side='right'>
          <div className='px-2 flex flex-col gap-4'>
            <h3 className='text-lg text-emerald-600 font-semibold'>Categories</h3>
            <Separator />
            <div className='flex flex-wrap gap-2'>
              {categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => changeCategory(category.id)}
                  className='flex items-center'
                >
                  <Button
                    variant={
                      selectedCategory === category.id ? 'default' : 'outline'
                    }
                  >
                    {category.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Filter
