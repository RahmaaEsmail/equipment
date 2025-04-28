import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import CartPage from '../CartPage/CartPage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import SummaryPage from '../SummaryPage/SummaryPage';

export default function PaymentProccessedPage() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { label: "عربة التسوق", id: 1 },
    { label: "معلومات الدفع", id: 2 },
    { label: "تأكيد الطلب", id: 3 },
  ];

  return (
    <div className='px-4 md:!px-8'>
      <BreadCrumb
        data={[
          { id: 1, title: "الصفحه الرئيسية", route: "/" },
          { id: 2, title: "عربة التسوق" },
        ]}
      />

      <div className="flex items-center justify-between mt-6 mb-8">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const isDone = activeStep > step.id;
          const isCurrent = activeStep === step.id;

          return (
            <React.Fragment key={step.id}>
              <div
                onClick={() => setActiveStep(step.id)}
                className="flex flex-col items-center text-center gap-2 cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-colors duration-300 ${
                    isDone || isCurrent
                      ? "bg-[var(--main-color)]"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {isDone ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  {step.label}
                </span>
              </div>

              {!isLast && (
                <div className="flex-1 h-1 mx-2 bg-gray-200 relative top-4">
                  <div
                    className={`h-full transition-all duration-300 ${
                      activeStep > step.id ? "bg-[var(--main-color)]" : ""
                    }`}
                  ></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {activeStep == 1 && <CartPage activeStep={activeStep} setActiveStep={setActiveStep}/>}
      {activeStep == 2 && <CheckoutPage activeStep={activeStep} setActiveStep={setActiveStep}/>}
      {activeStep == 3 && <SummaryPage activeStep={activeStep} setActiveStep={setActiveStep} />}
    </div>
  );
}
