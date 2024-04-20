import { Layout } from "@/layout/Layout";
import React, { useEffect, useState } from "react";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import Pagescomponent from "@/components/pagesComponent/Main";
const breadcrumb1 = [
  {
    breadcrumbs: [
      { label: "الرئيسية", path: "/" },
      { label: "البرامج السياحية", path: "/packages" },
    ],
  },
];
function TravelPrograms() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://wesamelnagah.com:4000/api/maincategory')
      .then((res) => res.json())
      .then((data) => {
        
        setData(data.data);
      });
  }, []);
  return (
    <Layout menuDis="none">
    
      <BreadcrumbList breadcrumbsArrayname={breadcrumb1} />
      <div style={{ justifySelf: "flex-start" }}></div>
      <Pagescomponent
        textAlignProp="center"
        arryName={data}
     
        just="center"
        title="باقات السياحة"
        span="سواء كنت رحالة تحب البحث عن كنوز التاريخ المخفية في المملكة العربية السعودية أو من عُشاق المغامرة دائمي البحث عن التجارب المثيرة، فإن باقات عطلات المسافر هي حتماً ما تبحث عنه! إذا كنت تريد اكتشاف الوجهات المحلية، فنحن نوفر لك باقاتٍ تأخذك إلى وجهات جميلة داخل المملكة حيث يمكنك الاستمتاع بالمناظر الخلابة والأنشطة المثيرة. أما إذا كنت تميل نحو اكتشاف الوجهات العالمية، فنحن أيضاً نساعدك في التخطيط لمسار رحلتك بينما تفكر ما إذا كنت تريد استكشاف أشهر الوجهات بمفردك أو برفقة أحبائك. هل تريد البدء بالتخطيط لرحلة قريباً أو تريد الانطلاق بها الآن؟ مهما كان اختيارك، نحن مستعدون لخدمتك!"
      />
    </Layout>
  );
}

export default TravelPrograms;
