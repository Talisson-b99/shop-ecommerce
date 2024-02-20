import BannerImage from '../../assets/women2.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

function Banner() {
  return (
    <div className="group flex min-h-[550px] items-center justify-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
          {/* Image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImage}
              alt=""
              className="mx-auto h-[350px] w-full max-w-[400px] rounded-md object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
            />
          </div>
          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              className="text-center text-3xl font-bold sm:text-4xl"
            >
              Promoção de inverno com até 50% de desconto
            </h1>
            <p
              data-aos="fade-up"
              className="text-center text-sm leading-5 tracking-wide text-gray-500"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              saepe maxime tempore dolorum fugiat aliquam ea perspiciatis
              nesciunt totam consectetur pariatur, aspernatur quas sit odit
              explicabo. Cum voluptatem sequi at!
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4 ">
                <GrSecure className="h-12 w-12 rounded-full bg-violet-100 p-4 shadow-sm dark:bg-violet-400" />
                <p>Produtos de Qualidade</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 ">
                <IoFastFood className="h-12 w-12 rounded-full bg-orange-100 p-4 shadow-sm dark:bg-orange-400" />
                <p>Entrega Rápida</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 ">
                <GiFoodTruck className="h-12 w-12 rounded-full bg-green-100 p-4 shadow-sm dark:bg-green-400" />
                <p>Método de Pagamento Fácil</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 ">
                <GiFoodTruck className="h-12 w-12 rounded-full bg-yellow-100 p-4 shadow-sm dark:bg-yellow-400" />
                <p>Receber Ofertas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
