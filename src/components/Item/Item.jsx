import classes from "./Item.module.css";

const Item = (props) => {
  const { name, price, quantity, category, imageUrl } = props.data;

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.left}>
          <div className={classes.imageContainer}>
            <img src={imageUrl} alt="Item" />
          </div>
        </div>
        <div className={classes.right}>
          <div>
            <span>Name : </span>
            <span>{name}</span>
          </div>
          <div>
            <span>Price : </span>
            <span>{price}</span>
          </div>
          <div>
            <span>Quantity : </span>
            <span>{quantity}</span>
          </div>
          <div>
            <span>Category : </span>
            <span>{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
