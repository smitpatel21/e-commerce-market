import prisma from "@/lib/db"

async function main() {
  const skateboards = await prisma.category.create({
    data: {
      name: 'Skateboards',
      slug: 'skateboards',
    },
  })
  const clothing = await prisma.category.create({
    data: {
      name: 'Clothing',
      slug: 'clothing',
    },
  })
  const shoes = await prisma.category.create({
    data: {
      name: 'Shoes',
      slug: 'shoes',
    },
  })
  const accessories = await prisma.category.create({
    data: {
      name: 'Accessories',
      slug: 'accessories',
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    await prisma.$disconnect()
    process.exit(1)
  })