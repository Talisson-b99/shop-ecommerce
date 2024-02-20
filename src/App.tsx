import { useEffect, useState } from 'react'

import AOS from 'aos'

import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import NavBar from './components/Navbar/NavBar'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'

import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'

function App() {
  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
  }, [])

  return (
    <div className="bg-white duration-200 dark:bg-gray-900 dark:text-white">
      <NavBar handleOrderPopup={handleOrderPopup} />
      <Hero />
      <Products title="Produtos" />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products title="Produtos Mais Vendidos" />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App
