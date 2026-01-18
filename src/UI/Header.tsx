import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const nav = 
  [
    {name: 'O nas', link: '#about'},
    {name: 'Trening', link: '#training'},
    {name: 'Opinie', link: '#testimonials'},
    {name: 'Kontakt', link: '#contact'},
  ]

  return (
    <header className={`flex w-full  justify-between p-4 lg:p-6 bg-gray-500/30  uppercase`}>
      <div>logo</div>



      {/* MOBILE NAV */}
      <div className="md:hidden flex flex-col items-end">
          <button onClick={() => setShowNav(!showNav)} className="z-20">
            {showNav ? 
              <X></X>
              :
              <Menu></Menu>
            }
          </button>
            

          {showNav && 
            <ul className="flex flex-col items-end gap-4 mt-4">
                {nav.map((item,index) => (
                  <a key={index} href={item.link}  className="opacity-75 py-2 transition-all duration-300 hover:opacity-100">
                    {item.name}
                  </a>
                ))}
            </ul>
          }
      </div>


      {/* DESKTOP NAV */}
      <ul className="md:gap-4 lg:gap-6 hidden md:flex">   
        {nav.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="opacity-50 transition-all duration-300 hover:opacity-100">{item.name}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header