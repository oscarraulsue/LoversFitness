import { Drawer, Grid } from '@material-ui/core';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import Item from './Item';
import Navbar from './Navbar';
import ProductList from './ProductList';


export const Tienda = () => {

    const Productos = [];

    const { isLoading, error, data } = useQuery("productos", Productos);
    const [productoOpen, setProductoOpen] = useState(false);
    const [productoItem, setProductoItem] = useState([]);
        

    const getTotalItem= (productoItem) =>
    productoItem.reduce((acu, i) => acu + i.amount, 0);
    
    const handleAddItemToCart = (item) => {
    setProductoItem((previo) => {
      
      const ItemDelProducto = previo.find((i) => i.id === item.id);
      if (ItemDelProducto) {
        return previo.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        );
      }
      return [...previo, { ...item, amount: 1 }];
    });
  };
  const handleRemoveItem = (id) => {
    setProductoItem((previo) => {
      const foundItem = previo.find((i) => i.id === id);
      if (foundItem) {
        if (foundItem.amount === 1) {
          const produc = previo.filter((i) => i.id !== id);
          return produc;
        } else {
          return previo.map((i) =>
            i.id === id ? { ...i, amount: i.amount - 1 } : i
          );
        }
      } else {
        return previo;
      }
    });
  };

  if (isLoading) return null ;
  if (error) return error.message;
  return (
    <>
      <Navbar
        getTotalItem={getTotalItem(productoItem)}
        setProductoOpen={setProductoOpen}
      ></Navbar>
      <div className="main">
        <Drawer
          anchor="right"
          open={productoOpen}
          onClose={() => setProductoOpen(false)}
        >
          <ProductList
            cartItems={productoItem}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItem}
          />
        </Drawer>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid key={item.id} item xs={8} sm={6}>
              <Item item={item} handleAddItemToCart={handleAddItemToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
export default Tienda;