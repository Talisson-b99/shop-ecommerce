import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({ orderPopup, setOrderPopup }: any) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/50 backdrop-blur-sm">
            <div className="fixed left-1/2 top-1/2 w-[300px] -translate-x-1/2  -translate-y-1/2 rounded-md bg-white p-4 shadow-md duration-200 dark:bg-gray-900">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-semibold">Peça Agora</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="cursor-pointer text-2xl"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form seection */}
              <div className="mt-4 ">
                <input
                  type="text"
                  placeholder="Nome"
                  className="mb-4 w-full rounded-full border border-gray-300 px-2 py-1 dark:border-gray-500 dark:bg-gray-800"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="mb-4 w-full rounded-full border border-gray-300 px-2 py-1 dark:border-gray-500 dark:bg-gray-800"
                />
                <input
                  type="text"
                  placeholder="Endereço"
                  className="mb-4 w-full rounded-full border border-gray-300 px-2 py-1 dark:border-gray-500 dark:bg-gray-800"
                />
              </div>
              <div className="flex justify-center">
                <button className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-white duration-200 hover:scale-105">
                  Peça Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
