import { IoMdSearch } from 'react-icons/io'
import Logo from '../../assets/logo.png'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Mais Avaliados',
    link: '/#services',
  },

  {
    id: 3,
    name: 'Roupas Infantis',
    link: '/#',
  },

  {
    id: 4,
    name: 'Roupas Masculinas',
    link: '/#',
  },

  {
    id: 5,
    name: 'Roupas Femininas',
    link: '/#',
  },
]

const DropdownLink = [
  {
    id: 1,
    name: 'Produtos em Alta',
    link: '/#',
  },
  {
    id: 2,
    name: 'Superando as Vendas',
    link: '/#',
  },
  {
    id: 3,
    name: 'Mais avaliados',
    link: '/#',
  },
]

type Props = {
  handleOrderPopup: () => void
}

const NavBar = ({ handleOrderPopup }: Props) => {
  return (
    <div className="relative z-40 bg-white shadow-md duration-200 dark:bg-gray-900 dark:text-white">
      <div className="bg-primary/40 py-2">
        <div className="container flex items-center justify-between">
          <div>
            <a href="#" className="flex gap-2 text-2xl font-bold sm:text-3xl">
              <img src={Logo} alt="logo" className=" w-10 uppercase" />
              <span className="hidden sm:block"> Shop</span>
            </a>
          </div>
          <div className="flex items-center gap-4 ">
            <div className="group relative items-center sm:block">
              <input
                type="text"
                placeholder="search"
                className="focus:border-1 focus-border-1 w-[200px] rounded-full border border-solid border-gray-300 px-2 py-1 transition-all duration-300 focus:border-primary focus:outline-none group-focus-within:w-[300px] group-hover:w-[300px] dark:border-gray-500 dark:bg-gray-800 sm:w-[200px]"
              />
              <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-primary" />
            </div>
            <button
              onClick={() => handleOrderPopup()}
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-white transition-all duration-200"
            >
              <span className=" hidden transition-all duration-200 sm:group-hover:block ">
                Order
              </span>
              <FaCartShopping className="cursor-pointer text-xl text-white drop-shadow-sm" />
            </button>
            {/* Dark mode switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="hidden items-center gap-8 sm:flex">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href="{data.link}"
                className="inline-block duration-200 hover:text-primary"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-0.5 py-2 hover:text-primary"
            >
              Itens Populares
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:-rotate-180" />
              </span>
            </a>
            <div className=" absolute z-[999] hidden w-[150px] rounded-b-md bg-white p-2 text-black shadow-md group-hover:block">
              <ul>
                {DropdownLink.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
