import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CircularIndeterminate from "../LoadingSpinner";
import ItemDetail from "../Items/ItemDetail/ItemDetail";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";



const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState([true]);

  const { idItem } = useParams();

  useEffect(() => {
    const productCollection = collection(db, "products");
    const refDoc = doc(productCollection, idItem);

    getDoc(refDoc)
      .then((result) => {
        setItem({
          id: result.id,
          ...result.data(),
        });
      })
      .catch((error) => {
        setLoading(true)
        console.log(error);
      })
      .finally(setLoading(false));
  }, [idItem]);

  return (
    <>
    {
        loading ? <CircularIndeterminate /> : <ItemDetail item={item} />
    }
    </>
  )
};

export default ItemDetailContainer;
