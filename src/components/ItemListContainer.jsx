const ItemListContainer = (props) => {

  return (
    <div className="item-list-container">
      <div className="item-list-header">
        <h1 className={props.className}>{props.greeting}</h1>
      </div>
    </div>
  );
};

export default ItemListContainer;
