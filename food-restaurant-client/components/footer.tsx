import Container from "@/components/container"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return <footer className="bg-white ">
  <Container>
    <div className="w-full  bg-hero/30 grid grid-cols-2 md:grid-cols-4 px-4 md:px-12 py-8">
      <div className="flex flex-col items-start justify-start gap-3">
        <h2 className="text-3xl font-semibold">Thực đơn</h2>
        <p className="text-neutral-500 text-sm">Trang chủ</p>
        <p className="text-neutral-500 text-sm">Tại sao chọn</p>
        <p className="text-neutral-500 text-sm">Thực đơn đặt biệt</p>
        <p className="text-neutral-500 text-sm">Thức ăn thường ngày</p>
        <p className="text-neutral-500 text-sm">Đầu bếp đặt biệt</p>
      </div>

      <div className="flex flex-col items-start justify-start gap-3">
        <h2 className="text-3xl font-semibold">Giúp</h2>
        <p className="text-neutral-500 text-sm">Quyền riêng tư</p>
        <p className="text-neutral-500 text-sm">Điều khoản và Điều kiện</p>
        <p className="text-neutral-500 text-sm">Chính sách</p>
      </div>

      <div className="flex flex-col items-start justify-start gap-3">
        <h2 className="text-3xl font-semibold">Liên hệ</h2>
        <p className="text-neutral-500 text-sm">035 665 272</p>
        <p className="text-neutral-500 text-sm">trantrungtinhdbl@gmail.com</p>
        <p className="text-neutral-500 text-sm">Đường Trần Huỳnh, Thành Phố Bạc Liêu</p>
      </div>

      <div className="flex flex-col items-start justify-start gap-3">
        <h2 className="text-3xl font-semibold">Đăng ký nhận bản tin của chúng tôi</h2>
        <div className="w-full rounded-md border-2 border-emerald-500 flex items-center justify-center">
          <input
            type="text"
            placeholder="Enter your Email"
            className="h-full bg-transparent pl-4 text-sm text-neutral-500 w-full outline-none border-none"
          />
          <Button className="bg-emerald-500 rounded-tr-none rounded-br-none hover:bg-emerald-600">
            Đăng ký
          </Button>
        </div>
      </div>
    </div>
    <div className="mx-auto py-8 ">
      <p className="text-center text-xs text-black">
        &copy; Tintech - mọi quyền bảo lưu
      </p>
    </div>
  </Container>
</footer>
}

export default Footer
