import { useContext } from "react"
import { ShoppingContext } from "../../context"
import OrderCard from "../../components/orderCart"
import { Link } from "react-router-dom"

function MyOrder() {
    const context = useContext(ShoppingContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if(index === 'last') index = context.order?.length -1

    return (
      <div>
          <div className="flex items-center justify-center relative w-80">
          <Link to='/my-orders' className="absolute left-0">
          <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          </button>
          </Link>       
          <h1 className="mb-8"> My Orden: </h1>
        </div>
       
        <div className="flex flex-col w-80">
            {
                context.order?.[index]?.products.map(product=> (
                    <OrderCard 
                    key={product.id}
                    id ={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    />
                ))
            }
            </div>
      </div>
    )
  }
  
  export default  MyOrder
  