import getProducts from "@/actions/get-products"
import Container from "@/components/container"
import PopularContent from "@/components/popular-content"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { FileHeart, Salad, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export const revalidate = 0; 
const HomePage =async () => { 
  const products = await getProducts({isFeatured: true}) //lấy sản phầm từ admin  
  console.log(products)
  return (
    <>
      <Container className="px-4 md:px-12"> 
           <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
                <div className="flex flex-col items-start justify-start gap-4"> 
                  <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-300">
                    Bạn đã đói chưa ? 
                  </p> 
                  <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4"> 
                    Hương vị tuyệt vời <span className="block py-4"> chọn món liền tay  </span> 
                  </h2> 
                  <p className="text-base text-center md:text-left text-neutral-500 my-4">
                  Chào mừng đến với Tin Stores - nơi bạn tìm thấy hương vị độc đáo và không gian ấm cúng. Hãy đến và trải nghiệm ẩm thực tuyệt vời ngay hôm nay!
                  </p>
                  <div className="my-4 flex text-center justify-center gap-6 w-full md:w-auto">
                    <Link href={"/menu"}>
                        <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-hero">Chọn món ngay</Button>
                    </Link>
                    <Link href={"/"}>
                        <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full" variant="outline">Khám phá tại đây</Button>
                    </Link>
                  </div>
                </div> 
                <div> 
                  <div className="w-full relative h-[560px] flex items-center justify-center">
                    <Image src="/img/Food.png" alt="Hero" className="object-contain w-full h-full absolute" fill/>
                  </div>
                </div>
           </section>
           {/* popular section */}  
           <section className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20  my-4 py-12"> 
                 {products?.slice(0,4).map((item) => ( 
                  <PopularContent key={item.id} data={item}/>
                 ))}
           </section>
          {/* Lựa chọn chúng tôi */}
          <section className="my-4 py-12 flex flex-col items-center justify-center"> 
            <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Tại sao nên ăn tại đây
            </h2>  
            <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">  
            Hãy đến với chúng tôi và tận hưởng những món ăn tươi ngon, được chế biến từ nguyên liệu chất lượng,
             mang đến cho bạn trải nghiệm ẩm thực đích thực mà bạn sẽ không thể quên {""}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
              <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
                <Salad className="w-8 h-8 text-hero" /> 
                <CardTitle className="text-neutral-600">
                    Phục Vụ Tận Tình
                </CardTitle>
                <CardDescription className="text-center">
                    Chúng tôi mang đến dịch vụ tinh tế, chú trọng từng chi tiết để bạn luôn cảm nhận được sự khác biệt đẳng cấp
                </CardDescription>
              </Card>
              <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
                <FileHeart className="w-8 h-8 text-hero" /> 
                <CardTitle className="text-neutral-600">
                    Chất Lượng Tốt
                </CardTitle>
                <CardDescription className="text-center">
                  Chúng tôi luôn mang đến chất lượng vượt trội, từ nguyên liệu tươi ngon đến mỗi món ăn hoàn hảo
                </CardDescription>
              </Card>
              
              <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
                <Truck className="w-8 h-8 text-hero" /> 
                <CardTitle className="text-neutral-600">
                    Giao Hàng Nhanh
                </CardTitle>
                <CardDescription className="text-center">
                  Chúng tôi cam kết giao hàng nhanh chóng, đảm bảo chất lượng và sự hài lòng tuyệt đối cho bạn
                </CardDescription>
              </Card>
                  
            </div>
          </section> 
          {/* our chef sections */} 
          <section className="my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Đầu Bếp Của Chúng Tôi
            </h2>  
            <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">  
            Đội ngũ đầu bếp chuyên nghiệp, tài hoa, luôn sáng tạo để mang đến những món ăn đẳng cấp và tinh tế nhất {""}
            </p> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
                  <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] 
                  bg-hero/30"> 
                     <Image src="/img/chef1.png" alt="Đầu bếp" className="w-full h-full object-contain" fill/>
                  </Card>

                  <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] mt-20
                  bg-hero/30"> 
                     <Image src="/img/chef3.png" alt="Đầu bếp" className="w-full h-full object-contain" fill/>
                  </Card>

                  <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] 
                  bg-hero/30"> 
                     <Image src="/img/chef2.png" alt="Đầu bếp" className="w-full h-full object-contain" fill/>
                  </Card>
               </div>
          </section>

      </Container>
    
    </>   
  )
}

export default HomePage
