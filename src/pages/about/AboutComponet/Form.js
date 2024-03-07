import React from "react";

export default function Form() {
  return (
    <div className="Form">
      <h3>تواصل معنا</h3>
      <span>تواصل مع فريقنا لأي استفسارات أو طلبات</span>
      <div className="Form_container">
        <select name="ask" id="ask" className="Form_item" placeholder="نوع الاستفسار *">
          <option value="op1">استفسارات عامة</option>
          <option value="op2">الشراكات</option>
          <option value="op3">العلاقات اللإعلامية</option>
          <option value="op4">الاستثمار</option>
          <option value="op5">التسويق</option>
          <option value="op6">السياحة الوافدة</option>
          <option value="op4">السياحةالدينية</option>
          <option value="op4">السفر التجاري</option>
          <option value="op4">السفرالاعمال</option>
          <option value="op4">الفعاليات والمؤتمرات</option>
        </select>
        <input className="Form_item" type="text" placeholder="* اسم "></input>
        <input className="Form_item" type="email" placeholder="* البريد الالكتروني "></input>
        <input className="Form_item" type="text" placeholder="* رقم الهاتف "></input>
        <input className=" formtext Form_item " type="text" placeholder="* رسالة "></input>
        <button className="Form_BUTTON" type="submit">إرسال</button>
      </div>
    </div>
  );
}
