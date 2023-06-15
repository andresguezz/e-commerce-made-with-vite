import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingContext } from "../../context";
import OrderCard from "../orderCart";
import { TotalPrice } from "../../utils";

const CheckoutSideMenu = () => {
    
    const context = useContext(ShoppingContext)
    
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id )
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = ( ) =>{
        const orderToAdd = {
            date: '01.06.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: TotalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }

    return(

        <aside className= {`${context?.isCheckoutSideMenuOpen ? 'flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4' : 'hidden'}`}>
            <div className='flex justify-between items-center p-6'>
            <h2 className="font-medium text-xl">My order</h2>
            <div>
            <button onClick={() => 
            context?.closeCheckoutSideMenu()} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>

            </button>

            </div>

            </div>

            <div className="px-6 h-5/6  overflow-y-auto">
            {
                context.cartProducts.map(product=> (
                    <OrderCard 
                    key={product.id}
                    id ={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className="px-6 flex justify-between items-center">
            <p className>
                <span className="font-ligh">Total: </span>
                <span className="font-medium">${TotalPrice(context.cartProducts)}</span>
            </p>
            <Link to='/my-orders/last'>

            <button className="bg-black text-white rounded-md border border-gray-700 text-sm px-3" onClick={() => handleCheckout()}>
                Check Out
            </button>            
            </Link>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu
