import { useContext } from "react";
import { ShoppingContext } from "../../context";

const ProductDetail = () => {
    
    const context = useContext(ShoppingContext)
    return(

        <aside className= {`${context?.isProductDetailOpen ? 'flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4' : 'hidden'}`}>
            <div className='flex justify-between items-center p-6'>
            <h2 className="font-medium text-xl">Detail</h2>
            <div>
            <button onClick={() => 
            context?.closeProductDetail()} >
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
             <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>

            </button>

</div>
            </div>
            <figure className="px-6">
                <img className="w-full h-full rounded-lg" src={context.productToShow.images?.[0]} alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
                <span className="font-medium text-md">{context.productToShow.title}</span>
                <span className="font-light text-sm">{context.productToShow.description}</span>
            </p>
        </aside>
    );
}

export default ProductDetail
