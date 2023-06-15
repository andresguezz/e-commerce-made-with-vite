const OrdersCard = props => {
    const { id, title, imageUrl, price, handleDelete} = props

    const {totalPrice, totalProducts } = props

        
    return (
        <div className="flex justify-between items-center border border-black rounded-lg mb-4 w-80 p-4">
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <span className="font-light">

                01.06.23
              </span>
              
              <span className="font-light">
                
                {totalProducts} articles
              </span>
            </div>
            <span className="flex gap-2 font-medium self-end">
              ${totalPrice}

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

            </span>
          </div>
        </div>
      );
}

export default OrdersCard 