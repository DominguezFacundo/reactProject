import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import ItemList from "./ItemList";



const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../utils/data.json")
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((err) => {
        console.log(err)
      })
      .finally(setLoading(false))
  }, []);

  return (
    <div className="item-list-container">
      <div className="item-list-header">
        <h1 className="main-title">{greeting}</h1>
        <>
        {loading ? <LoadingSpinner /> : <ItemList products={products} />}
        </>
      </div>
    </div>
  );
};

export default ItemListContainer;
