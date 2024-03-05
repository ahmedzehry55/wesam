import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
export default function SocNavbar({arrName}) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 90;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [1]);
  return (
    <div className={`SocNavbar ${scrolled ? "scrolled" : ""} `}>
      <ul className='SocNavbar_ul'>
        {arrName.map((item) => (
          <li className={`SocNavbar_li ${router.pathname === item.ref ? 'activeSoc' : ''}`} key={item.id}>
            <Link href={item.ref}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>


    </div>
  )
}
