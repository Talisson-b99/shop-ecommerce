import Image1 from '../../assets/women.png'
import Image2 from '../../assets/shopping.png'
import Image3 from '../../assets/sale.png'
import Slider from 'react-slick'

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: '30% de desconto em todas as Roupas Femininas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex dolorem a pariatur. Iure odit aliquid quaerat magni ducimus consectetur quod, maxime veniam voluptates incidunt.',
  },

  {
    id: 2,
    img: Image2,
    title: 'Até 50% de desconto em todas as Roupas Masculinas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex dolorem a pariatur. Iure odit aliquid quaerat magni ducimus consectetur quod, maxime veniam voluptates incidunt.',
  },

  {
    id: 3,
    img: Image3,
    title: '70% de desconto em todas as Vendas de Produtos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex dolorem a pariatur. Iure odit aliquid quaerat magni ducimus consectetur quod, maxime veniam voluptates incidunt.',
  },
]

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  }
  return (
    <div className="relative flex min-h-[550px] items-center justify-center overflow-hidden bg-gray-100 transition-all duration-200 dark:bg-gray-950 dark:text-white sm:min-h-[650px]">
      {/* background pattern */}
      <div className="absolute -top-1/2  right-0 h-[700px] w-[700px] rotate-45  rounded-3xl bg-primary/40"></div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/*  text content section */}
                <div className="z-10 order-2 flex flex-col justify-center gap-4  pt-12 text-center sm:order-1 sm:pt-0 sm:text-left">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className=" text-4xl font-bold  sm:text-5xl lg:text-6xl"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="hover-scale-105 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-white duration-200">
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="z-10 order-1 sm:order-2">
                  <div data-aos="zoom-in" data-aos-once="true">
                    <img
                      src={data.img}
                      alt=""
                      className="mx-auto h-[300px] w-[300px] object-contain sm:h-[450px] sm:w-[450px] sm:scale-100 xl:scale-125"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
