import { tourList } from "@/constants/constants";
import dot from "../../../../public/icons/dot.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";
import { LuSettings2 } from "react-icons/lu";
import { useRouter } from "next/router";
import Carsoul from "@/components/Carsoul/Carsoul";
import Link from "next/link";
import { useEffect, useState } from "react";

const navarray = tourList;
const SinglePage = ({ object }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://wesamelnagah.com:4000/api/tours/660a4c27749ebc54b3d73842`)
      .then((res) => res.json())
      .then((data) => {
        
        setData(data.data.toursData);
      });
  }, []);
  const router = useRouter();
  const currentPath = router.asPath;
  const goBack = () => {
    router.back();
  };
  return (
    <div className="tourid_container">
      {/* header */}
      <div className="tourid_container_header">
        <div className="tourid_container_header_left">
          <figure onClick={goBack} className="tourid_container_header_left_fig">
            <IoMdArrowForward />
          </figure>
          <div className="tourid_container_header_left_bottons">
            <div className="tourid_container_header_left_botton">
              <span className="tourid_container_header_left_bottons_span">
                <LuArrowUpDown className="button_icon" /> ترتيب حسب
              </span>
            </div>
            <div className="tourid_container_header_left_botton">
              <span className="tourid_container_header_left_bottons_span">
                <LuSettings2 className="button_icon" />
              </span>
              <span> تصنيف</span>
            </div>
          </div>
        </div>

        <div className="tourid_container_header_middel">
          <h3 className="tourid_container_header_middel_title">
            {object.title}
          </h3>
          <span className="tourid_container_header_middel_num">
            {object.act}
          </span>
        </div>
        <figure className="tourid_container_header_back">
          <CiSearch />
        </figure>
      </div>
      {/* end header */}
      <ul className="tourid_container_card_container">
        {data.map((item) => (
          <li className="tourid_container_card_container_li">
            <Link href={`/${currentPath}/${item.id}`}> 
              <div className="tourid_container_card_container_corsul">
                <Carsoul images={item.img} dotbottm="1vw" />
              </div>
              <div className="tourid_container_card_container_textSec">
                <div className="tourid_container_card_container_rightText">
                  <div className="tourid_container_card_container_rightText_1line">
                    <h4>{item.type}</h4>
                    <figure>
                      <Image fill alt="" src={dot} />
                    </figure>
                    <h4>حجز فوري</h4>
                  </div>
                  <h4 className="texth4">{item.title}</h4>
                  <label> الغاء مجاني</label>
                </div>
                <div className="tourid_container_card_container_leftText">
                  <h4>
                    <span> من </span>
                    {item.price}
                  </h4>
                  <span>(شاملاً ضريبة القيمة المضافة)</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = navarray.map((object) => ({
    params: { place: object.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const object = navarray.find(
    (object) => object.id.toString() === params.place
  );

  return { props: { object } };
}

export default SinglePage;
