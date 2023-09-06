import React from "react";

function DusecaInNumbers() {
  return (
    <div className="custom-gradient">
      <div className="container lg:flex py-[70px] lg:pb-0">
        <div className="text-center lg:text-left">
          <h1 className="text-[40px] md:text-[56px] font-semibold">
            Duseca in Numbers
          </h1>
          <p className="text-sm">
            Describing everything we achieved since 2011 would be enough for a
            book. We value your time, so let the numbers briefly summarize it
          </p>
          <div className="flex flex-col md:flex-row md:justify-around md:my-6">
            <div className="flex flex-col py-2">
              <h1 className="text-[32px] font-semibold">10+</h1>
              <p>Skillful talents</p>
            </div>
            <div className="flex flex-col py-2">
              <h1 className="text-[32px] font-semibold">300+</h1>
              <p>Happy clients</p>
            </div>
            <div className="flex flex-col py-2">
              <h1 className="text-[32px] font-semibold">15+</h1>
              <p>Years on the market</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://duseca.com/static/media/hand.05c6a3390f517cca42d2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default DusecaInNumbers;
