import React from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  return (
    <div className={`grid gap-8 w-[18rem] ${styles["select-user"]}`}>
      <h1 className={styles.heading}>Register to</h1>
      <button
        className=" shadow-[-2px_-2px_5px_0px_rgba(132,132,132,0.35),0px_5px_20px_0px_rgba(11,11,11,0.4)] py-4 rounded-2xl text-xl font-bold hover:bg-white hover:text-[#002351]"
        onClick={() => router.push("/users/job-seeker/choose-experience")}
      >
        Job / Internship
      </button>
      <button
        className=" shadow-[-2px_-2px_5px_0px_rgba(132,132,132,0.35),0px_5px_20px_0px_rgba(11,11,11,0.4)] py-4 rounded-2xl text-xl font-bold hover:bg-white hover:text-[#002351]"
        onClick={() => router.push("/users/hire/theme")}
      >
        Hire
      </button>
      <button
        className=" shadow-[-2px_-2px_5px_0px_rgba(132,132,132,0.35),0px_5px_20px_0px_rgba(11,11,11,0.4)] py-4 rounded-2xl text-xl font-bold hover:bg-white hover:text-[#002351]"
        onClick={() => router.push("/users/supplier/theme")}
      >
        Become Supplier
      </button>
    </div>
  );
};

export default Register;
