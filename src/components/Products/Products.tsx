import Img1 from '../../assets/women.png'
import Img2 from '../../assets/women2.jpg'
import Img3 from '../../assets/women3.jpg'
import Img4 from '../../assets/women4.jpg'
import { FaStar } from 'react-icons/fa6'

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Mulheres étnicas',
    rating: 5.0,
    color: 'Branca',
    aosDelay: '0',
  },
  {
    id: 2,
    img: Img2,
    title: 'Mulheres ocidentais',
    rating: 4.5,
    color: 'Vermelha',
    aosDelay: '200',
  },
  {
    id: 3,
    img: Img3,
    title: 'Óculos',
    rating: 4.7,
    color: 'Marrom',
    aosDelay: '400',
  },
  {
    id: 4,
    img: Img4,
    title: 'Camiseta Estampada',
    rating: 4.4,
    color: 'Amarelo',
    aosDelay: '600',
  },
  {
    id: 5,
    img: Img2,
    title: 'Camiseta da moda',
    rating: 4.5,
    color: 'Rosa',
    aosDelay: '800',
  },
]

type Props = {
  title: string
}

const Products = ({ title }: Props) => {
  return (
    <div className="mb-12 mt-14">
      <div className="container">
        {/* Header section */}
        <div className="mx-auto mb-10 max-w-[600px] text-center">
          <p className="text-sm text-primary">
            Produtos mais vendidos para você
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            {title}
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laboriosam libero nesciunt.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] rounded-md object-cover"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="mt-10 cursor-pointer rounded-md bg-primary px-5 py-1 text-center text-white">
              Ver Tudo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
