import React from "react";
import { Stepper, Step,  Typography } from "@material-tailwind/react";
import {
  
  ShoppingCartIcon,
  CreditCardIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
 
export function StepperContent() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="w-full px-24 py-4">
      <Stepper
        activeStep={activeStep}
        
      >
        <Step onClick={() => setActiveStep(0)}>
          <ShoppingCartIcon className="h-5 w-5" /> {/* Changed icon */}
          <div className="absolute -bottom-[1.6rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "green" : "gray"}
            >
              Cart
            </Typography>
            
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <CreditCardIcon className="h-5 w-5" /> {/* Changed icon */}
          <div className="absolute -bottom-[1.6rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "green" : "gray"}
            >
              Shopping And Billing
            </Typography>
            
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)} className="bg-green-300">
          <CheckCircleIcon className="h-5 w-5" /> {/* Changed icon */}
          <div className="absolute -bottom-[1.6rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 2 ? "green" : "gray"}
            >
              Payment
            </Typography>
          </div>
        </Step>
      </Stepper>
      
    </div>
  );
}