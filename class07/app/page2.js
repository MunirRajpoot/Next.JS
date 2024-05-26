
"use client"
import { Fascinate } from "next/font/google";
import { useState, useEffect } from "react"

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true)




  const fetchProducts = async () => {
    let products = await fetch("https://fakestoreapi.com/products")
    products = await products.json();
    setProducts(products)
    console.log("products", products);
    setLoader(false)
  }

  useEffect(() => {
    fetchProducts()
  },
    [])

  return (
    <div>
      <button onClick={fetchProducts}>Fetch Products</button>
      <h1>Products</h1>
      {products.length ?
        <table >
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>title</th>
            <th>price</th>
            <th>category</th>
            <th>description</th>
          </tr>

          {products.map((product) => {
            return (
              <>
                <tr>
                  <td>{product.id}</td>
                  <td><img width={30} src={product.image} alt="" /></td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.description.slice(0, 20)}...</td>
                </tr>
              </>
            )
          })}
        </table> :
        loader ? <div className="loader"></div> : <div>No data found</div>
      }
    </div>
  )
}

export default Home
