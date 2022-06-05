import { useEffect, useState } from "react";
import cryptoRandomString from 'crypto-random-string';
import { showCategory } from "../services/categories-services";

function Wompi(){
  const [order, setOrder] = useState(null);
  const CategoryID =  localStorage.getItem("Category")
  useEffect(() => {
    showCategory(CategoryID).then(setOrder)
  }, [CategoryID])
  let folio = cryptoRandomString({length: 24, type: 'base64'});

    let discount = 0;
    let result = null
   if(localStorage.getItem('Cupon')){
      discount = "0."+localStorage.getItem('Cupon')
      discount = parseFloat(discount)
      console.log(discount)
      result = discount *(order.price*100);
      result = (order.price*100) - result
   }  
  return(
    <>
        {order ? (
          <div>

          
            <form action="https://checkout.wompi.co/p/" method="GET">

            <input type="hidden" name="public-key" value="pub_test_iOm8S5UmqoKZKNXQKCoCHBKL9oVuHu3N" />
            <input type="hidden" name="currency" value="COP" />
            {result ? (
              <input type="hidden" name="amount-in-cents" value={result} />
              
            ) : (
             <input type="hidden" name="amount-in-cents" value={order.price*100} />
            )}
            <input type="hidden" name="reference" value={"COL3"+folio} />
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