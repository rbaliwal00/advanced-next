import React from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  return (
    <div
      className={`grid gap-4 w-[100%] sm:w-[18rem] ${styles["select-user"]}`}
    >
      <h1 className={styles.heading}>Register to</h1>
      <button
        className=" shadow-[-2px_-2px_5px_0px_rgba(132,132,132,0.35),0px_5px_20px_0px_rgba(11,11,11,0.4)] py-4 rounded-2xl text-xl max-h-[61px] font-bold bg-[#113B73] text-white hover:bg-white hover:text-[#002351]"
        onClick={() => router.push("/users/job-seeker/choose-experience")}
      >
        Job / Internship
      </button>
      <button
        className=" shadow-[-2px_-2px_5px_0px_rgba(132,132,132,0.35),0px_5px_20px_0px_rgba(11,11,11,0.4)] py-4 rounded-2xl text-xl max-h-[61px] font-bold bg-[#113B73] text-white hover:bg-white hover:text-[#002351]"
        onClick={() => router.push("/users/recruiter")}
      >
        Hire
      </button>
      <button
        className=" shadow-[-2px_-2px_5px_0px_rgba(132,132,132,0.35),0px_5px_20px_0px_rgba(11,11,11,0.4)] py-4 rounded-2xl text-xl max-h-[61px] font-bold bg-[#113B73] text-white hover:bg-white hover:text-[#002351]"
        onClick={() => router.push("/users/supplier")}
      >
        Become Supplier
      </button>
    </div>
  );
};

export default Register;
