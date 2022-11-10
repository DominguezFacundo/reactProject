import React from 'react';
import Item from '../Items/Item/Item';

const ItemList = ({ products }) => {
    return (
        <div style={styles.container}>
            {products.map((product) =>
                <Item key={product.id} product={product} />
            )}
        </div>
    )
}

const styles = {
    container:{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap"
    }
  }

export default ItemList