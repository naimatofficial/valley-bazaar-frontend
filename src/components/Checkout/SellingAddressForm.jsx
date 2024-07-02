// import React, {useState} from "react";
import { Input, Textarea  } from "@material-tailwind/react";
import Map from "../Map/Map";

const SellingAddressForm = () => {
  
  return (
    <div className="bg-white w-full shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">Selling Address</h3>
      <form>
        {/* <div className="bg-blue-100 p-3 rounded mb-4">
        <p className="text-blue-600 flex items-center text-xs">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-3l4-8h4v8h3l-4 8h-3z"
            ></path>
          </svg>
          When you input all the required information for this billing address
          it will be stored for future purchases
        </p>
      </div> */}
        <ul className="space-y-4">
          <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-xs" >
                Name
              </label>
              <Input type="text" label="Name"  />
            </div>
            <div>
              <label htmlFor="" className="text-xs">
                Phone
              </label>
              <Input label="Phone"  />
            </div>
          </li>

          <li>
          <label htmlFor="" className="text-xs">
                Email
              </label>
            <Input label="Email"  />
          </li>
          <li>
          <label htmlFor="" className="text-xs">
                Address type
              </label>
            <Input label="Permenent" type="email"  />
          </li>
          <li>
          <label htmlFor="" className="text-xs">
                Country
              </label>
            <Input label="Country" type="email"  />
          </li>
          <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
              <label htmlFor="" className="text-xs">
                City
              </label>
              <Input type="text" label="City"  />
            </div>
            <div>
              <label htmlFor="" className="text-xs">
                Zip Code
              </label>
              <Input label="Zip"  />
            </div>
          </li>

          <li>
          <label htmlFor="" className="text-xs">
                Address
              </label>
            <Textarea label="Address"  rows="3" />
          </li>
        </ul>
        <Map/>
      </form>
    
   
    </div>
  );
};

export default SellingAddressForm;
