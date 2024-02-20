import Banner from '../../assets/orange-pattern.jpg'

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
}

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in "
      className=" mb-20 bg-gray-100 text-white dark:bg-gray-800"
      style={BannerImg}
    >
      <div className="container py-10 backdrop-blur-sm">
        <div className="mx-auto max-w-xl space-y-6">
          <h1 className="!text-center text-2xl font-semibold sm:text-left sm:text-4xl">
            Ser Notificado Sobre Novos Produtos
          </h1>
          <input
            type="text"
            data-aos="fade-up"
            placeholder="Digite seu E-mail"
            className="w-full rounded-md p-3 text-gray-500"
          />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
