import React, { useState } from "react";
import styles from "./index.module.css";
import Button from "@components/button";

type Btn = {
  id: string;
  label: string;
};

export type UploadDocProps = {
  title: string;
  btnList: Btn[];
};

const UploadDoc = ({ title, btnList }: UploadDocProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (id: string) => {
    setSelectedOption(id);
  };

  return (
    <div className={styles.upload_doc}>
      <p className={styles.upload_doc_title}>{title}</p>
      <div className={styles.upload_doc_btns}>
        {btnList.map((btn) => (
          <label
            key={btn.id}
            className={`flex cursor-pointer select-none items-center text-dark dark:text-white ${styles.upload_doc_label}`}
          >
            <div className="relative">
              <input
                type="radio"
                name="upload"
                checked={selectedOption === btn.id}
                onChange={() => handleOptionChange(btn.id)}
                className="sr-only"
              />
              <div
                className={`box border-[#8899A8] mr-4 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  selectedOption === btn.id && "bg-[#8899A8]"
                }`}
              >
                <span className="h-[10px] w-[10px] rounded-full bg-white dark:bg-dark">
                  {" "}
                </span>
              </div>
            </div>
            {btn.label}
          </label>
        ))}
      </div>
      <input
        className="text-[black] w-full h-[2.7rem] pl-4 rounded-[0.45rem] shadow-md text-center font-[400] mb-3"
        type="text"
        placeholder="Serial no"
        id="documentNumber"
        name="documentNumber"
        disabled
      />
      <Button text="Upload" />
    </div>
  );
};

export default UploadDoc;
