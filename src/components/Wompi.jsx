import { useEffect, useState } from "react";
import { indexOrderDetails } from "../services/order-details-services";

function Wompi(){
  const [order, setOrder] = useState(null);
  useEffect(() => {
    indexOrderDetails().then(setOrder)
  }, [])

  return(
    <>
        {order ? (
          <div>

          
            <form action="https://checkout.wompi.co/p/" method="GET">

            <input type="hidden" name="public-key" value="pub_test_iOm8S5UmqoKZKNXQKCoCHBKL9oVuHu3N" />
            <input type="hidden" name="currency" value="COP" />
            <input type="hidden" name="amount-in-cents" value="899998" />
            <input type="hidden" name="reference" value={"COL3"+order.id} />
            <input type="hidden" name="redirect-url" value="http://localhost:3000/process_payment" />

            <button type="submit">Pagar con Wompi</button>
            </form>        
          </div>
        ) : ( 
          <div>
            <h2>Services not found</h2>
          </div> )}
    </>
  )
}

export default Wompi;