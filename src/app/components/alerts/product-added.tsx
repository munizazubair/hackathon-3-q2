"use client";

// components/Alert.tsx
import React from 'react';

interface AlertProps {
  message: string | null;
  onClose: () => void; // Function to close the alert
}

export default function Alert({ message , onClose }: AlertProps) {

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-[75%] md:w-[450px] bg-color4  text-white shadow-black shadow-md rounded-[2px]`}
      role="alert"
    >
      <div className="flex justify-end  pt-2 pr-2 md:pt-3 md:pr-3">
        <button onClick={onClose} className="ml-4 text-lg">
          <svg width="12" height="12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.1098 23.9129L46.6207 5.40124C46.9016 5.12989 47.1257 4.8053 47.2799 4.44641C47.4341 4.08752 47.5152 3.70152 47.5186 3.31093C47.522 2.92035 47.4476 2.53299 47.2997 2.17148C47.1518 1.80997 46.9333 1.48153 46.6572 1.20533C46.381 0.929134 46.0525 0.710709 45.691 0.562802C45.3295 0.414894 44.9421 0.340467 44.5516 0.343861C44.161 0.347255 43.775 0.428404 43.4161 0.582571C43.0572 0.736738 42.7326 0.960838 42.4612 1.24179L23.9496 19.7527L5.43873 1.24179C4.88505 0.700278 4.14016 0.398956 3.36571 0.403221C2.59126 0.407486 1.84973 0.716993 1.30205 1.26457C0.754375 1.81215 0.444738 2.55363 0.440336 3.32808C0.435934 4.10253 0.737124 4.84747 1.27854 5.40124L19.7902 23.9129L1.27854 42.4245C1.00039 42.6965 0.778969 43.0211 0.627098 43.3793C0.475228 43.7375 0.395925 44.1222 0.393782 44.5113C0.39164 44.9004 0.4667 45.286 0.614616 45.6458C0.762532 46.0057 0.980364 46.3326 1.2555 46.6077C1.53064 46.8828 1.85762 47.1006 2.2175 47.2484C2.57738 47.3963 2.96302 47.4713 3.35208 47.4691C3.74114 47.4669 4.1259 47.3875 4.48408 47.2356C4.84226 47.0836 5.16674 46.8621 5.43873 46.5839L23.9496 28.0731L42.4612 46.5839C43.0356 47.1583 43.7886 47.4458 44.541 47.4458C45.2933 47.4458 46.0471 47.1583 46.6207 46.5839C47.1722 46.0323 47.482 45.2842 47.482 44.5042C47.482 43.7242 47.1722 42.9761 46.6207 42.4245L28.1098 23.9129Z" fill="white"/>
          </svg>
        </button>
      </div>
      <div className='h-full flex flex-col items-center justify-center gap-5'>
      <div className="flex  justify-center items-center text-center ">
        <span className="text-[18px] md:font-semibold mx-2">{message}</span>
      </div>

      <div className="flex ">
        <button onClick={onClose} className="ml-4 text-lg text-color bg-white h-7 w-20 rounded-[2px] text-[10px] font-semibold">
         Ok
        </button>
      </div>
      </div>
    </div>
  );
};
