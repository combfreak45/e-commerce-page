import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [products,setProducts] = useState([])
  const [filterproducts,setFilterProducts] = useState([])

  useEffect(()=>{
          const getProducts = async () =>{
            const response = await axios.get(
              "https://fakestoreapi.com/products"
            );
            setProducts(response.data)
            setFilterProducts(response.data)
          }
          getProducts()
  },[])

const womenhandler = () =>{
  const womenProducts = products.filter((product)=>
      product.category === "women's clothing"
  )
  setFilterProducts(womenProducts);
}

const menhandler = () => {
  const menProducts = products.filter(
    (product) => product.category === "men's clothing"
  );
  setFilterProducts(menProducts);
};

const jeweleryhandler = () => {
  const jeweleryProducts = products.filter(
    (product) => product.category === "jewelery"
  );
  setFilterProducts(jeweleryProducts);
};

const electronicshandler = () => {
  const electronicProducts = products.filter(
    (product) => product.category === "electronics"
  );
  setFilterProducts(electronicProducts);
};

const allhandler = () => {
  const allProducts = products.filter(
    (product) => product.category !== "none"
  );
  setFilterProducts(allProducts);
};

  return (
    <div>
      <header className="min-h-[12rem] flex flex-col gap-8 text-sm p-10 sm:pt-10 sm:pl-10 bg-black text-white">
        <div className="font-bold text-5xl">My NearShop</div>
        <div className="flex flex-row gap-3 sm:gap-6 items-center">
          <div
            className="hover:text-red-600 hover:scale-110 hover:cursor-pointer"
            onClick={allhandler}
            > All
          </div>
          <div
            className="hover:text-red-600 hover:scale-110 hover:cursor-pointer"
            onClick={menhandler}
          >
            Men Clothing
          </div>
          <div
            className="hover:text-red-600 hover:scale-110 hover:cursor-pointer"
            onClick={womenhandler}
          >
            Women Clothing
          </div>
          <div
            className="hover:text-red-600 hover:scale-110 hover:cursor-pointer"
            onClick={jeweleryhandler}
          >
            Jewelery
          </div>
          <div
            className="hover:text-red-600 hover:scale-110 hover:cursor-pointer"
            onClick={electronicshandler}
          >
            Electronics
          </div>
        </div>
      </header>
      <section className="p-10 flex flex-col justify-between ">
        {filterproducts.map((p) => {
          return (
            <div
              key={p.id}
              className=" flex flex-col sm:flex-row my-10  lg:mx-[8rem] xl:mx-[12rem]  gap-20 items-center text-2xl lg: border-black lg:border-4 py-3 lg:px-20 "
            >
              <div className="hover:scale-110 sm:min-w-[15rem] hover:cursor-pointer">
                <img src={p.image} alt="scds" width={150} />
              </div>
              <div className="flex flex-col gap-5 p-5">
                <div className="font-bold text-3xl">{p.title}</div>
                <div className="text-5xl">Rs.{p.price}</div>
                <div>
                  <div className="bg-yellow-400 w-20 p-2 rounded-2xl hover:cursor-pointer text-center hover:scale-110">
                    Buy
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App
