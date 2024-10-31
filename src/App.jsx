import pizza from './assets/image/pizza.jpg'
import pizza2 from './assets/image/pizza2.jpg'
import pizza3 from './assets/image/pizza3.jpg'

export default function App() {
  return (
    <body>
        <div className="grid md:grid-cols-12 font-nunito">

          <div className="col-span-4 md:flex md:justify-end">
            <nav className="md:text-right">
              <div className="text-md uppercase text-gray-500 font-bold font-nunito tracking-wide mt-5 md:mr-5 md:mb-10 ml-5">
                <h1>
                  <a href="/">Pizza Heaven</a>
                </h1>
              </div>
              <ul className="md:text-right text-center font-light">
                <li className="pr-2 border-red-400 md:border-r-4 mb-1">
                  <a href="#">
                    <span>Home</span>
                    <svg className="md:inline-block ml-2  mb-1 hidden" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 1.198l10 8.334V22H2V9.532zM10 20h4v-5h-4zm6 0h4v-9.532l-8-6.666l-8 6.666V20h4v-7h8z"/></svg>
                  </a>
                </li>
                <li className="pr-2 border-white md:border-r-4 mb-1">
                  <a href="#">
                    <span>About</span>
                    <svg className="md:inline-block ml-2 mb-1 hidden" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"/></svg>
                  </a>
                </li>
                <li className="pr-2 border-white md:border-r-4">
                  <a href="#">
                    <span>Contact</span>
                    <svg className="md:inline-block ml-2  mb-1 hidden" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <main className="col-span-8 bg-gray-50 pl-20 pr-20">
            
            <div className="flex md:justify-end justify-center pt-16 md:pr-16 m-5">
              <a href="#">
                <span className="text-red-400 border-red-400 md:border-4 md:rounded-full px-2 py-1 md:hover:bg-red-400 md:hover:text-white md:transform md:ease-out md:duration-500">LOG IN</span>
              </a>
              <a className="ml-2" href="#">
                <span className="text-red-400 border-red-400 md:border-4 md:rounded-full px-2 py-1 md:hover:bg-red-400 md:hover:text-white md:transform md:ease-out md:duration-500">SIGN UP</span>
              </a>
            </div>

            <div>
              <h1 className="text-6xl text-gray-700 font-semibold font-nunito tracking-wider">
                <span>Recipes</span>
              </h1>
              <h3 className="text-2xl font-medium text-gray-500 font-nunito tracking-tight">
                <span>For Flavor</span>
              </h3>
            </div>

            <div className="mt-20">
                <h4 className="text-sm font-medium text-gray-500 font-nunito pt-2 border-b-2 pb-2 border-gray-100">
                  <span>Latest Recipes</span>
                </h4>
              <div className="mt-16 grid lg:grid-cols-3 gap-10">
                {/*Cards go here*/}
                <div className="relative bg-white shadow-md rounded hover:shadow-lg overflow-hidden hover:scale-105 cursor-pointer transform ease-in-out duration-150">
                  <img className="w-full h-48 sm:h-60 object-cover" src={pizza} alt="pizza" />
                  <div className="absolute top-3 left-3">   
                    <h4 className=" text-xs font-extrabold text-stone-500 pt-2 bg-stone-200 rounded-full px-4 py-2">
                    <svg className="inline-block mr-2 mb-0.5 transform scale-125" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"/></svg>
                      <span>50 MINS</span>
                    </h4>
                  </div>
                  <div className="m-4">
                    <span className="font-bold text-lg">Pepperoni pizza</span>
                    <span className="block text-gray-500 text-sm font-light">Recipe by Omar</span>
                  </div>
                </div>


                <div className="relative bg-white shadow-md rounded hover:shadow-lg overflow-hidden hover:scale-105 cursor-pointer transform ease-in-out duration-150">
                  <img className="w-full h-48 sm:h-60 object-cover" src={pizza2} alt="pizza" />
                  <div className="absolute top-3 left-3">   
                    <h4 className=" text-xs font-extrabold text-stone-500 pt-2 bg-stone-200 rounded-full px-4 py-2">
                    <svg className="inline-block mr-2 mb-0.5 transform scale-125" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"/></svg>
                      <span>30 MINS</span>
                    </h4>
                  </div>
                  <div className="m-4">
                    <span className="font-bold text-lg">Onion pizza</span>
                    <span className="block text-gray-500 text-sm font-light">Recipe by Omar</span>
                  </div>
                </div>


                <div className="relative bg-white shadow-md rounded hover:shadow-lg overflow-hidden hover:scale-105 cursor-pointer transform ease-in-out duration-150">
                  <img className="w-full h-48 sm:h-60 object-cover" src={pizza3} alt="pizza" />
                  <div className="absolute top-3 left-3">   
                    <h4 className=" text-xs font-extrabold text-stone-500 pt-2 bg-stone-200 rounded-full px-4 py-2">
                    <svg className="inline-block mr-2 mb-0.5 transform scale-125" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"/></svg>
                      <span>45 MINS</span>
                    </h4>
                  </div>
                  <div className="m-4">
                    <span className="font-bold text-lg">Vegetable pizza</span>
                    <span className="block text-gray-500 text-sm font-light">Recipe by Omar</span>
                  </div>
                </div>
                {/*Cards end here*/}
              </div>
            </div>

            <div className="mt-20">
                <h4 className="text-sm font-medium text-gray-500 font-nunito pt-2 border-b-2 pb-2 border-gray-100">
                  <span>Most Popular</span>
                  <svg className="inline-block ml-1 mb-1 transform scale-125" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#ed6c30" d="M98.59 51.16c-4.23.92-7.88 3.28-9.59 7.35c-1.03 2.47-2.47 8.85-6.42 7.2c-1.89-.78-1.86-3.49-1.64-5.18c.47-3.47 2.03-6.64 3.1-9.94c1.1-3.42 2.05-6.86 2.73-10.4c2.28-11.72 1.65-25.22-6.64-34.59C78.73 4 75.2.3 72.87.22c-1.44-.04-.02 1.66.38 2.23c.81 1.17 1.49 2.44 2.01 3.77c6.13 15.64-8.98 27.55-18.91 36.82c-4.76 4.45-8.56 9.17-11.98 14.68c-.34.53-1.09 2.31-2.06 1.94c-1.15-.44-1.27-3.07-1.63-4.05c-.68-1.88-1.73-3.93-3.08-5.4c-2.61-2.86-6.26-4.79-10.21-4.53c-.15.01-.58.08-1.11.2c-.83.18-3.05.47-2.45 1.81c.31.69 1.22.63 1.87.82c8.34 2.56 8.15 11.3 6.8 18.32c-2.44 12.78-9.2 24.86-4.4 38c5.66 15.49 23.38 25.16 39.46 22.5c4.39-.72 9.45-2.14 13.39-4.26c4.19-2.26 8.78-5.35 12.05-8.83c4.21-4.47 6.89-10.2 7.68-16.27c.93-7.02-1.31-13.64-3.35-20.27c-2.46-8-5.29-21.06 4.93-24.97c.5-.2 1.5-.35 1.85-.88c1.3-1.94-4.94-.81-5.52-.69"/><path fill="#fcc21b" d="M68.13 106.07c2.12 1.78 5.09.91 7.09-.61c1.07-.81 1.99-1.85 2.59-3.06c.25-.52.54-1.18.54-1.77c0-.79-.47-1.57-.27-2.38c1.68-.33 3.76 4.5 3.97 5.62c1.68 8.83-6.64 16.11-14.67 17.52c-13.55 2.37-21.34-9.5-19.78-20.04c.97-6.56 5.37-11.07 9.85-15.57c3.71-3.73 7.15-6.93 8.35-11.78c.21-.86.16-2.18-.09-3.03c-.21-.73-.61-1.4-.63-2.19c-.06-1.66 1.55.51 1.92.93c4.46 5.03 5.73 12.46 4.54 18.96c-.77 4.2-3.77 7.2-4.82 11.22c-.61 2.29-.55 4.52 1.41 6.18"/></svg>
                </h4>
              <div className="m-16 flex justify-center">
                
                  <h4 className=" text-base text-stone-600 font-semibold pt-2 bg-stone-300 rounded-full md:px-4 px-3 py-2 cursor-pointer hover:bg-stone-400 transform ease-out duration-500 hover:text-stone-200">
                    <span>Load More</span>
                  </h4>

              </div>
            </div>

          </main>
      </div>
    </body>
  )
}