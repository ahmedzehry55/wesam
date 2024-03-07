import { suppliers, suppliers_wesam } from "@/constants/constants";
import React from "react";

export default function Suppliers() {
  return (
    <div className="suppliers_container">
      <div className="suppliers_container_S">
        <h3 className="suppliers_container_S_h3"> شبكة واسعة من الموردين </h3>
        <div className="suppliers_container_itemsContainer">
          {suppliers.map((item) => (
            <div key={item.id} className="suppliers_container_item">
              <h4 className="suppliers_container_item_h4">{item.title}</h4>
              <span style={{ fontSize: "12px" }}>{item.span}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="suppliers_container_S">
        <h3 className="suppliers_container_S_h3">
          شركة السفر الرائدة في المنطقة لقطاعي الأفراد والأعمال
        </h3>
        <div className="suppliers_container_itemsContainer">
          {suppliers_wesam.map((item) => (
            <div key={item.id} className="suppliers_container_item">
              <h4 className="suppliers_container_item_h4">{item.title}</h4>
              <span style={{ fontSize: "12px" }}>{item.span}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
