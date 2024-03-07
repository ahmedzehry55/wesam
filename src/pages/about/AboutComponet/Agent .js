import Image from "next/image";
import React from "react";
import philipine from "../../../../public/images/philip.svg";
import beond from "../../../../public/images/beond.svg";
import disney from "../../../../public/images/disney.svg";
import gold from "../../../../public/images/gold.svg";
import railEu from "../../../../public/images/railEu.svg";
import SAC from "../../../../public/images/SAC.svg";
export default function Agent() {
  return (
    <div className="Agent_container">
      <h3>وكيل ومندوب مبيعات عام</h3>
      <span>
        نقوم بتسخير خبراتنا لتقديم خدماتنا لشركات السفر الأخرى كمندوب ووكيل
        مبيعات عام بصفتنا شركة السفر الرائدة في المنطقة.
      </span>
      <div className="Agent_container_sides">
        <div className="Agent_container_side">
          <h4>وكيل مبيعات عام حصري</h4>
          <div className="Agent_container_icon Agent_container_side_right ">
            <figure>
              <Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" alt="" fill src={philipine} />
            </figure>
            <figure>
              <Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" alt="" fill src={gold} />
            </figure>
            <figure>
              <Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" alt="" fill src={SAC} />
            </figure>
            <figure>
              <Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" alt="" fill src={beond} />
            </figure>
          </div>
        </div>
        <div className="Agent_container_side">
          <h4>مندوب مبيعات عام</h4>
          <div className="Agent_container_icon">
            <figure>
              <Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" alt="" fill src={railEu} />
            </figure>
            <figure>
              <Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" alt="" fill src={disney} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
