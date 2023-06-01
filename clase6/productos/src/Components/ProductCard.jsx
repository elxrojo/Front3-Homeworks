import style from './ProductCard.module.css'
export function ProductCard({producto,onAddToCart}) {
    return(
        <div className={style.ProductCard}>
            <li key={producto.id} >
                <h2>{producto.nombre}</h2>
                <p>${producto.precio}</p>
                <p>{producto.descripcion}</p>
            </li> 
            <button onClick={()=>onAddToCart(producto.id)}>Agregar al carrito</button>
        </div>
    )
}