import { Layout } from "@/layout/Layout";
import React from "react";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import { packages } from "@/constants/constants";
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
  return (
    <Layout menuDis="none">
      <BreadcrumbList breadcrumbsArrayname={breadcrumb1} />
      <div style={{ justifySelf: "flex-start" }}></div>

      <Pagescomponent
        textAlignProp="center"
        arryName={packages}
        just="center"
        title="باقات السياحة"
        span="سواء كنت رحالة تحب البحث عن كنوز التاريخ المخفية في المملكة العربية السعودية أو من عُشاق المغامرة دائمي البحث عن التجارب المثيرة، فإن باقات عطلات المسافر هي حتماً ما تبحث عنه! إذا كنت تريد اكتشاف الوجهات المحلية، فنحن نوفر لك باقاتٍ تأخذك إلى وجهات جميلة داخل المملكة حيث يمكنك الاستمتاع بالمناظر الخلابة والأنشطة المثيرة. أما إذا كنت تميل نحو اكتشاف الوجهات العالمية، فنحن أيضاً نساعدك في التخطيط لمسار رحلتك بينما تفكر ما إذا كنت تريد استكشاف أشهر الوجهات بمفردك أو برفقة أحبائك. هل تريد البدء بالتخطيط لرحلة قريباً أو تريد الانطلاق بها الآن؟ مهما كان اختيارك، نحن مستعدون لخدمتك!"
      />
    </Layout>
  );
}

export default TravelPrograms;
