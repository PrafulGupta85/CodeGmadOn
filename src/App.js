import "./styles.css";
import { useState, useEffect } from 'react';
const PAGE_SIZE = 12;
const ProductCard = ({image, title}) =>{
  return <div className = 'product-card'>
    <img src={image} alt={title}/>
    <span>{title}</span>
  </div>
}
export default function App() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const fetchProducts = async () =>{
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);
  }
  useEffect(()=>{
    fetchProducts();
  },[])
  const totalProducts = products.size;
  const totalPages = Math.ceil(totalProducts/PAGE_SIZE);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="pagination-container">{[...Array(10).keys().map((ele) => {
        <span>{ele}</span>
      })]}</div>
      <div className="product-container">
        {
          products.map(p => <ProductCard key={p.id} title={p.title} image={p.thumbnail}/>)
        }
      </div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
