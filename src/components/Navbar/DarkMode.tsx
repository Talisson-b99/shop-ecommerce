import lightMode from '../../assets/lightmode.png'
import darkMode from '../../assets/darkmode.png'
import { useEffect, useState } from 'react'

const DarkMode = () => {
  const [img, setImg] = useState(
    localStorage.getItem('theme') === 'light' ? lightMode : darkMode,
  )

  const setDarkMode = () => {
    if (img === lightMode) {
      setImg(darkMode)
      window.document.documentElement.className = 'dark'
      localStorage.setItem('theme', 'dark')
    } else {
      setImg(lightMode)
      window.document.documentElement.className = ''
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    window.document.documentElement.className = img === lightMode ? '' : 'dark'
  }, [])
  return (
    <div onClick={setDarkMode}>
      <img
        src={img}
        alt=""
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "
      />
    </div>
  )
}

export default DarkMode
