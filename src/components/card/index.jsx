import { useContext } from "react";
import { ShoppingContext } from "../../context";

const Card = (data) =>{
    const context = useContext(ShoppingContext)
    const clicko = (event, productData) =>{
        event.stopPropagation();
        context.setCount(context.count + 1);        
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        
     }
     const showProduct = (productDetail) => {
     context.openProductDetail()
     context.setProductToShow(productDetail)
     context.closeCheckoutSideMenu()
     }
    
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart){
            return(
            <button className="absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2 p-1"

            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            </button>
            )}
        else{
            return(
            <button onClick={(event) => clicko(event, data.data)} className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
            </button>
            )}
       


    }

    return(
        <div 
        className="bg-white cursor-pointer w-56 h-60 rounded-lg"
        onClick={() => showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5" >
                {data.data?.category?.name}
                </span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data?.images[0]} alt={data.data?.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between items-center'>
                <span className="text-sm font-light">
                    {data.data?.title}
                </span>
                <span className="text-lg font-medium">
                    ${data.data?.price}
                </span>
            </p>
        </div>
    )
}

export default Card