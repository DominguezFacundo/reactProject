import { useState, useEffect } from "react";
import CircularIndeterminate from "../LoadingSpinner"
import ItemList from "../containers/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";



const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { idCategory } = useParams();


  const productCollection = collection(db, "products");
  const q = idCategory ? query(productCollection, where('category', '==', idCategory)) : productCollection;

  useEffect(() => {
    getDocs(q)
    .then((result) => {
      const listProducts = result.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id,
        };
      });
      setProducts(listProducts);
    })
    .catch((error) => {
      setLoading(true);
      console.log(error);
    })
    .finally(setLoading(false));

  }, [q]);

  return (
    <div className="item-list-container">
      <div className="item-list-header">
        <h1 className="main-title">{greeting}</h1>
        <div>
        { loading ? <h1 style={{color: "white"}}>CARGANDO</h1> : <ItemList products={products} /> }
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
