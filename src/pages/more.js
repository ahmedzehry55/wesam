import {
  morelandmarks,
  moremeet,
  morepackeges,
  moretransport,
  morevisa,
  mostcommon,
} from "@/constants/moreconstent";
import { Layout } from "@/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
function MoreComponent({ arryname, title }) {
  return (
    <div className="MoreComponent_contaner">
      <div
        className="MoreComponent_contaner_rightsec"
        style={{ alignSelf: "flex-start" }}
      >
        <h2>{title}</h2>
      </div>
      <ul className="MoreComponent_contaner_leftLinks">
        {arryname.map((item, index) => (
          <li key={index} className="moreli">
            <Link
              className="MoreComponent_contaner_link"
              href={`/${item.ref}`}
              style={{
                borderLeft: index === arryname.length - 1 ? "none" : "",
              }}
            >
              <figure className="navbar_icon">
                <Image fill alt={item.title} src={item.img} />
              </figure>
              <span>{item.title}</span>
            </Link>
            <div className="prov_more" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function More() {
  return (
    <Layout menuDis="none">
      <div className="More_contaner">
        <div className="More_contaner_mostcommon">
          <h2>الاكثر شيوعاً</h2>
          <div className="More_contaner_mostcommon_ul">
            {mostcommon.map((item) => (
              <Link
                key={item.id}
                className="More_contaner_mostcommen_item"
                href={`/${item.ref}`}
              >
                <figure className="navbar_icon">
                  <Image fill alt={item.title} src={item.img} />
                </figure>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <h1 style={{ fontSize: "24px" }}>المزيد من الخدمات</h1>
        <div>
          <MoreComponent arryname={morepackeges} title="الباقات" />
          <MoreComponent arryname={moretransport} title="المواصلات" />
          <MoreComponent
            arryname={morelandmarks}
            title="زيارة المعالم والأنشطة"
          />
          <MoreComponent arryname={morevisa} title="خدمات التأشيرات" />
          <MoreComponent arryname={moremeet} title="خدمة الاستقبال والترحيب" />
        </div>
      </div>
    </Layout>
  );
}
