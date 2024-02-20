import Slider from 'react-slick'

const TestimonialData = [
  {
    id: 1,
    name: 'Victor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/101/101',
  },
  {
    id: 2,
    name: 'Satya Nadella',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/102/105',
  },
  {
    id: 3,
    name: 'Virat Kohli',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/104/104',
  },
  {
    id: 5,
    name: 'Sachin Tendulkar',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/103/103',
  },
]

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Testimonials = () => {
  return (
    <div className="mb-10 py-10">
      <div className="container">
        {/* header section */}
        <div className="mx-auto mb-10 max-w-[600px] text-center">
          <p className="text-sm text-primary">
            Produtos mais vendidos para você
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Depoimentos
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laboriosam libero nesciunt.
          </p>
        </div>
        {/* Testimonial cards */}
        <div className="mx-auto max-w-[900px]">
          <Slider {...settings} className=" min-h-[300px]">
            {TestimonialData.map((data) => (
              <div
                key={data.id}
                className=" relative mx-5 mb-2 mt-16 flex min-h-[200px] flex-col gap-4"
              >
                <div className="mx-10  min-h-[250px] rounded-lg bg-primary/50 px-5 drop-shadow-md dark:bg-primary">
                  <img
                    src={data.img}
                    alt=""
                    className="absolute -top-[50px] right-[50%] h-28 w-28 translate-x-1/2 rounded-full  border-4  border-solid border-white drop-shadow-xl"
                  />
                  <div className="pt-16">
                    <h1 className="text-center text-xl font-bold">
                      {data.name}
                    </h1>
                    <p className="mt-2 text-center text-sm text-gray-600">
                      {data.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
