import ProductItem from "./ProductItem";


const ProductList = ({ productoItem, handleRemoveItem  }) => {
  const calcularTotal = productoItem?.reduce(
    (sum, i) => sum + i.amount * i.price,
    0
  );
  return (
    <aside>
      <h1>Carrito de compras</h1>
      { productoItem.length === 0 ? <h3>No hay productos agregados al carrito todavia...</h3> : null}
      <div>
        {
            productoItem.map((i) => (
            {productoItem}
            ))
        }
      </div>
      <h2>Total: {calcularTotal.toFixed(2)}</h2>
    </aside>
  );
};
export default ProductList;