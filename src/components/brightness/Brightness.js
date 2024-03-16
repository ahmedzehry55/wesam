import React from "react";
import styless from "./brightness.module.css";
import { FaSun } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";
import Link from "next/link";
export default function () {
  return (
    <div className={styless.container}>
      {" "}
      {/* <!-- .slideTwo --> */}
      <div className={styless.inputcontainer}>
        <label
          style={{ color: "yellow" }}
          className={styless.labelicon}
          htmlFor="slideTwo"
        >
          <FaSun />
        </label>
        <div className={styless.slideTwo}>
          <input
            className={styless.input}
            type="checkbox"
            value="None"
            id="slideTwo"
            name="check"
          />
          <label className={styless.label} htmlFor="slideTwo"></label>
        </div>
        <label className={styless.labelicon} htmlFor="slideTwo">
          <IoMoonSharp />
        </label>
      </div>
      <Link href="/" className={styless.link}>
        English
      </Link>
      {/* <!-- end .slideTwo --> */}
    </div>
  );
}
