import Card from "../../components/card"
import ProductDetail from "../../components/productDetail"
import { useContext } from "react"
import { ShoppingContext } from "../../context"

function Home() {
    const context = useContext(ShoppingContext)
    
    const renderView = () => {
        if(context.filteredItems?.length >0){
          return(
            context.filteredItems?.map(item  => 
              ( 
              <Card key ={item.id} data= {item}/>
              ))
          )
        }
        else{
          return(
            <div>No matches :/</div>
          )
        }
    

  }

    return (
      < >
        <div className="flex items-center justify-center relative w-80">
          <h1 className="mb-8 font-medium">Exclusive products</h1>
        </div>

        <input 
        className="rounded-lg border border-black w-80 p-4 mb-4 "
        onChange={(event) => context.setSearchByTitle(event.target.value)}
        type="text" placeholder="search a product" />

        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
        </div>
        <ProductDetail />

      </>

    )

}
  export default Home
  