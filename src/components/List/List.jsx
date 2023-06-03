import Item from "../Item/Item";
import classes from "./List.module.css";
import { useState } from "react";
import Filter from "../Filter/Filter";

const productList = [
  {
    id: 1,
    name: "Samsung Galaxy Note 10",
    price: 45599,
    quantity: 5,
    category: "Smart Phone",
    imageUrl: "https://img2.cgtrader.com/items/2074810/70274451fb/samsung-galaxy-note-10-plus-aura-white-3d-model-max--obj-mtl-3ds-fbx-c4d-lwo-lw-lws.jpg",
  },
  {
    id: 2,
    name: "Realme Narzo 30",
    price: 14599,
    quantity: 5,
    category: "Smart Phone",
    imageUrl: "https://www.chooseyourmobile.com/wp-content/uploads/2021/05/Realme-Narzo-30-5G-Colors-1280x853.jpg",
  },
  {
    id: 3,
    name: "Iphone 14",
    price: 14599,
    quantity: 5,
    category: "Smart Phone",
    imageUrl: "https://img-new.cgtrader.com/items/3313341/d99bf15349/3d-print-apple-iphone-13-mini-3d-model-max-obj-3ds-stl.jpg",
  },
  {
    id: 4,
    name: "Samsung Smart Tv",
    price: 14599,
    quantity: 5,
    category: "Smart Tv",
    imageUrl: "https://th.bing.com/th/id/OIP.bEZwztC4BRO72fwozhSQIwHaFj?pid=ImgDet&rs=1",
  },
  {
    id: 5,
    name: "Panasonic Smart Tv",
    price: 14599,
    quantity: 5,
    category: "Smart Tv",
    imageUrl: "https://brandlist.in/wp-content/uploads/2020/11/Samsung-Smart-TV.jpg",
  },
  {
    id: 6,
    name: "LG Smart Tv",
    price: 14599,
    quantity: 5,
    category: "Smart Tv",
    imageUrl: "https://theluxauthority.com/wp-content/uploads/2019/01/LG-Electronics-Smart-LED-TV.jpg",
  },
  {
    id: 7,
    name: "Apply watch",
    price: 14599,
    quantity: 5,
    category: "Smart Watch",
    imageUrl: "https://th.bing.com/th/id/OIP.HGVlryQM61JgUfmzm4pDyQHaH7?pid=ImgDet&rs=1",
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 14599,
    quantity: 5,
    category: "Smart Watch",
    imageUrl: "https://cdn.wccftech.com/wp-content/uploads/2020/06/Smartwatch.jpg",
  },
  {
    id: 9,
    name: "Smart Techno Watch",
    price: 14599,
    quantity: 5,
    category: "Smart Watch",
    imageUrl: "https://cdn.phonebunch.com/news-images/2013/11/samsung-galaxy-gear-update.jpg",
  },
  
];

const List = () => {
    const [product, setProduct] = useState(productList)

    const filterProduct = (e) => {
        e.preventDefault();

        const value = e.target.value;
        let products = productList;

        if (value !== "All")
            products = productList.filter(product => product.category === value);

        setProduct(products);
    }

  return (
    <div className={classes.container}>
      <Filter filter={filterProduct} />

      <div className={classes.listContainer}>
        {
            product.map(item => <Item key={item.id} data={item}/>)
        }
      </div>
    </div>
  );
};

export default List;
