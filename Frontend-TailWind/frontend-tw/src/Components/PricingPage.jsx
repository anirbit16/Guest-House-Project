import React from 'react'

const PricingPage = () => {
  return (
    <>

     <div className="container mx-4 mt-10">
      <h1 className="font-bold text-center text-purple-500 text-4xl mb-6">Register Your Property</h1>
    </div>
    <div className="container mx-4 mt-8">
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
                    type="text"
                    id="rooms"
                    placeholder="No. of Rooms"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="subp"
                    placeholder="Subscription Plan"
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
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Vertical Line Separator
        <div className="absolute right-1/3 top-8 h-full border-l border-black-300"></div> */}

        {/* Right Side - Subscription Summary */}
        <div className="w-1/2">
          <div className="bg-white rounded-lg shadow-sm p-6 mt-20">
            <h2 className="text-purple-500 text-2xl mb-6">Subscription Summary</h2>
            
            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2">
                <input type="radio" id="6months" name="subscription" />
                <label htmlFor="6months">6 Months</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="12months" name="subscription" />
                <label htmlFor="12months">12 Months</label>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 
               rounded focus:outline-none focus:shadow-outline">
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>

 
    </>
  )
}

export default PricingPage
