import {
  FaFacebook,
  FaInstagram,
  FaLink,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa'
import Banner from '../../assets/footer-pattern.jpg'
import FooterLogo from '../../assets/logo.png'

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
}

const FooterLinks = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'About',
    link: '/#about',
  },
  {
    title: 'Contact',
    link: '/#contact',
  },
  {
    title: 'Blog',
    link: '/#blog',
  },
]

const Footer = () => {
  return (
    <div className="mt-12 text-white" style={BannerImg}>
      <div className="container">
        <div data-aos="zoom-in" className="grid pb-44 pt-5 md:grid-cols-3">
          {/* company details */}
          <div className="px-4 py-8">
            <h1 className="mb-3 flex items-center gap-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <img src={FooterLogo} alt="" className="max-w-[50px]" />
              Shop
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              natus optio fuga ipsum earum cum ipsa voluptatibus soluta,
              aspernatur atque.
            </p>
          </div>
          {/* Footer links details */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links Importantes
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <li
                      key={data.title}
                      className="cursor-pointer text-gray-200 duration-300 hover:translate-x-1 hover:text-primary"
                    >
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <li
                      key={data.title}
                      className="cursor-pointer text-gray-200 duration-300 hover:translate-x-1 hover:text-primary"
                    >
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social Links */}
            <div>
              <div className="mt-6 flex items-center gap-3">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLink className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>São Paulo, SP</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+11 9999-9999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
