import Button from "@components/button";
import { Input } from "@mui/material";
import React from "react";

const MobileNumberForm = ({
  title,
  subTitle,
  fields,
  buttonTitle,
  onClick,
}: any) => {
  return (
    <div className="bg-[#113B73] text-white">
      <h3 className="text-[33.18px] font-[600]">Enter Mobile Number</h3>
      <p className="text-center font-[400] text-[13.33px] mb-20">
        We Will send you a Confirmation Code
      </p>
      <div className="mb-20">
        <label className="mb-[10px] block text-[16px] text-base font-[600] text-dark dark:text-white">
          Mobile Number
        </label>
        <input
          type="text"
          placeholder="Type Mobile Number"
          className="w-full rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 dark:disabled:bg-dark-4 dark:disabled:border-dark-4"
        />
      </div>
      <Button color="#113B73" backgroundColor="white" />
      <p className="text-center font-[400] text-[10px] mt-6">
        By continuing agree to Horecah
      </p>
      <p className="text-center font-[600] text-[13.33px]">
        Terms of use & Privacy Policy
      </p>
    </div>
  );
};

export default MobileNumberForm;
