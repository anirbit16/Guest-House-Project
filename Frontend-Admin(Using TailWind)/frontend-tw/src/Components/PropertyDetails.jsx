import {React,useState,useEffect} from 'react'
import SubFormImg from '../assets/SubFormimg.png'


const PropertyDetails = () => {
const [rooms, setRooms] = useState('');
const [subscriptionPlan, setSubscriptionPlan] = useState('');
const [subscription, setSubscription] = useState('')
const [basePriceOne,setBasePriceOne] = useState('');
const [basePriceTwo,setBasePriceTwo] = useState('');
const [rbvalue,setRBValue] = useState('');
 
const [taxes,setTaxes]=useState(40)
const [discount,setDiscount]=useState('') 
const [totalAmount,setTotalAmount]=useState('') 
const [months,setMonths]=useState('');

 

useEffect(() => {
 
  if (rooms >= 5 && rooms <= 10) {
    setSubscriptionPlan('Silver');
    
    
  } else if (rooms >= 11 && rooms <= 20) {
    setSubscriptionPlan('Gold');
  } else if (rooms > 20) {
    setSubscriptionPlan('Platinum');
  }  
}, [rooms]);
 

const handleSubscriptionChange = (event) => {
  const selectedValue = event.target.value;
  setSubscription(selectedValue);

  // Perform an action based on the selected subscription
  if (selectedValue === '6months') {
    console.log("6-month subscription selected");
    console.log(selectedValue)
    // Add any other action you want to perform for 6 months
  } else if (selectedValue === '12months') {
    console.log("12-month subscription selected");
    console.log(selectedValue);
    // Add any other action you want to perform for 12 months
  }
};


 

const handleClick = ()=>{
  event.preventDefault()
  if(subscriptionPlan==='Silver'){
    setBasePriceOne(260)
    setBasePriceTwo(460);
  }else if(subscriptionPlan==='Gold')
  {
    setBasePriceOne(660);
    setBasePriceTwo(860);
  }
  else{
    setBasePriceOne(860)
    setBasePriceTwo(1060)
  }


}
const handleClickTwo=(value)=>{
  if(value==='6'){
    setRBValue('6')

  }else if(value==='12'){
    setRBValue('12')
  }

}


    
  return (
    <>
    <div className="container mx-4 my-6 mt-10">
      <h1 className="font-bold text-center text-purple-500 text-4xl mb-6">Register Your Property</h1>
    </div>
    <div className="container mx-4 mt-8 my-4" 
          style={{display:'flex', justifyContent:'center'}}>
            <div className="image">
          <img src ={SubFormImg} alt="Img"/>
        </div>
      <div className="flex gap-8 relative"> {/* Added relative positioning */}
        {/* Left Side - Property Form */}
        <div className="w-2/3">
          
          <div className="bg-white rounded-lg shadow-sm">
            <form className="px-6 pt-6 pb-8">
              <div className="mb-6 text-center">
                <h2 className="font-bold text-violet-500 text-xl">Property Details</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <input
                    type="text"
                    id="propname"
                    placeholder="Property Name"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="propadd"
                    placeholder="Property Address"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="cont"
                    placeholder="Property Contact Number"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="zip"
                    placeholder="Zip Code"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div className="mb-4">
        <input
          type="number"
          id="rooms"
          placeholder="No. of Rooms"
          value={rooms}
          onChange={(e) => setRooms(Number(e.target.value))}
          className={`w-full border rounded py-2 px-3 leading-tight focus:ring-2 
            ${rooms < 5 ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-gray-900 focus:ring-gray-500'}`}
        />
        {rooms < 5 && (
          <p className="text-red-500 text-sm mt-1">Please enter a value of 5 or more</p>
        )}
      </div>

      <div className="mb-4">
        <input
          type="text"
          id="subp"
          placeholder="Subscription Plan"
          value={subscriptionPlan}
          readOnly
          className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
        />
      </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="ownName"
                    placeholder="Owner Name"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="ownNo"
                    placeholder="Owner Contact Number"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="panNo"
                    placeholder="PAN No"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="gstNo"
                    placeholder="GST No"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <div className="mb-4 flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                    </svg>
                      <h1 className="text-gray-800 font-semibold">Owner's Image</h1>
                </div>
                <div className="mb-4 flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                    </svg>
                  <h1 className="text-gray-800 font-semibold">Property Image</h1>
                </div>
              </div>

              <div className="mt-6 mx-20">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                  onClick={()=>handleClick()}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Vertical Line Separator */}
        {/* <div className="absolute right-1/3 top-8 h-full border-l border-black-300"></div>  */}

        {/* Right Side - Subscription Summary */}
        <div className="w-1/2">
          <div className="bg-white rounded-lg shadow-sm p-6 mt-20" style={{marginTop:'0px'}}>
            <h2 className="text-purple-500 text-2xl mb-6" style={{color:'rgb(139 92 246 / var(--tw-text-opacity))',
                                                                fontWeight:'700',fontSize:'1.25em'}}>Subscription Summary</h2>
            
            
            
            
            <div className="checkboxes" style={{display:'flex',gap:'0.75em'}}>
 
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      id="6months"
                      name="subscription"
                      value="6months"
                      onClick={()=>handleClickTwo('6')}
                      checked={subscription === '6months'}
                      onChange={handleSubscriptionChange}
                    />
                    <label htmlFor="6months">6 Months</label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      id="12months"
                      name="subscription"
                      value="12months"
                      checked={subscription === '12months'}
                      onClick={()=>handleClickTwo('12')}
                      onChange={handleSubscriptionChange}
                    />
                    <label htmlFor="12months">12 Months</label>
                  </div>
                  
           
              </div> 
                 
         
           
            <div className="flex gap-6 mb-6" style={{display:'block'}}>
              <table>
              <tbody>
                  <tr>
                    <td>Base price</td>
                    <td> </td>
                    <td>{rbvalue==='6'?basePriceOne:basePriceTwo}</td>
                  </tr>
                  <tr>
                    <td>Taxes</td>
                    <td> </td>
                    <td>{taxes}</td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td> </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Total Amount</td>
                    <td> </td>
                    <td>{rbvalue==='6'?basePriceOne+taxes:basePriceTwo+taxes}</td>
                  </tr>
                </tbody>
              </table>
            
            
               {/* <div className='container-price-breakup' style={{display:'flex',gap:'6em'}}>
                 <div className="container-labels" style={{display:'block'}}>
                  <div className="base-price">
                    Base Price
                  </div>
                  <div className="taxes">
                   Taxes
                  </div>
                  <div className="discount">
                   Discount
                  </div>
                  
                  <div className="total-amount">
                   Total Amount
                  </div>
                  </div>
                  <div className="container-values" style={{justifyContent:'right'}}>
                  <div className="container-base-price-value"  style={{justifyContent:'right',display:'flex'}}>
                  {rbvalue==='6'?basePriceOne:basePriceTwo}
                  </div>
                  <div className="container-taxes-value"   style={{justifyContent:'right',display:'flex'}}>
                  00
                  </div>
                  <div className="discount-value" style={{justifyContent:'right',display:'flex'}}>
                   00
                  </div>
                  <div className="total-amount-value">
                    00
                  </div>
                  </div>                
               </div> */}

            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 
               rounded focus:outline-none focus:shadow-outline" onClick={()=>knowsub()}>
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default PropertyDetails
