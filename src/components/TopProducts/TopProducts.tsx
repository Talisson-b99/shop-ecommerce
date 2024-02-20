import Img1 from '../../assets/shirt.png'
import Img2 from '../../assets/shirt2.png'
import Img3 from '../../assets/shirt3.png'

import { FaStar } from 'react-icons/fa6'

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Roupa Casual',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Img2,
    title: 'Camiseta estampada',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Img3,
    title: 'Camisa feminina',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className=" mb-28  text-left">
          <p className="text-sm text-primary">
            Produtos mais bem avaliados para você
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Melhores Produtos
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laboriosam libero nesciunt.
          </p>
        </div>
        {/* Body sectionds */}
        <div className=" grid grid-cols-1 place-items-center gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              key={data.id}
              className="group relative max-w-[300px] rounded-2xl bg-white shadow-xl duration-200 hover:bg-black/80 hover:bg-gray-800 dark:hover:bg-primary dark:hover:text-white"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="mx-auto block max-w-[140px] -translate-y-20 drop-shadow-md transition-all duration-300 group-hover:scale-105"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star  rating */}
                <div className="flex w-full items-center justify-center gap-1">
                  <FaStar className=" text-yellow-500" />
                  <FaStar className="-translate-y-1 text-yellow-500" />
                  <FaStar className="-translate-y-2 text-yellow-500" />
                  <FaStar className="-translate-y-1 text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold group-hover:text-white">
                  {data.title}
                </h1>
                <p className="line-clamp-2 text-center text-gray-500 duration-300 group-hover:text-gray-400">
                  {data.description}
                </p>
                <button className="mt-4 rounded-full bg-primary px-4 py-1 text-white duration-300 hover:scale-105 group-hover:bg-white group-hover:text-primary">
                  Peça Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts
