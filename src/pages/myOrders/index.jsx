import { useContext } from "react"
import { Link } from "react-router-dom"
import OrdersCard from "../../components/ordersCart"
import { ShoppingContext } from "../../context"

function  MyOrders() {
  const context = useContext(ShoppingContext)

    return (
      <div>

          <h1 className="mb-4">All Orders:</h1>

        {
          context.order.map((order, index) => (
            <Link  key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
            totalPrice={order.totalPrice} 
            totalProducts={order.totalProducts}
            />
            </Link>
          )
          )

       }
       </div>
    )
 
}

    export default  MyOrders
  