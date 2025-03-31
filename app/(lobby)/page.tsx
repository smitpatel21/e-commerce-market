import Banner from "@/components/ui/Banner";
import Categories from "@/components/ui/Categories";
import Products from "@/components/ui/Products";

export default function HomePage (){
    return <main>
        <Banner/>
        <div className='max-w-7xl mx-auto'>
          <Categories />
          <Products />
        </div>
    </main>
}