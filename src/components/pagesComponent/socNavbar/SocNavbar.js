import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
export default function SocNavbar({arrName, fontsize ,scrollactve ,scrolvh}) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > scrolvh * window.innerHeight / 100;
      setScrolled(isScrolled);
    };
    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [1]);
  return (
    <div className={`SocNavbar ${scrolled ? "scrolled" : ""} section_margin`}>
      <ul className='SocNavbar_ul'>
        {arrName.map((item) => (
          <li  style={{fontSize:`${fontsize}`}}  className={`SocNavbar_li ${router.pathname === item.ref ? 'activeSoc' : ''}
          ${item.scrollactve ? 'activeSocpackage' : ''}
          `}  key={item.id}>
            <Link href={item.ref}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>


    </div>
  )
}
