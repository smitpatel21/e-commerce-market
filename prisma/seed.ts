import prisma from "@/lib/db"

async function main() {
  const skateboards = await prisma.category.create({
    data: {
      name: 'Skateboards'
    },
  })
  const clothing = await prisma.category.create({
    data: {
      name: 'Clothing'
    },
  })
  const shoes = await prisma.category.create({
    data: {
      name: 'Shoes'
    },
  })
  const accessories = await prisma.category.create({
    data: {
      name: 'Accessories'
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