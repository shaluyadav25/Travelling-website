import { Menu, X } from "lucide-react"
import logo from "../../../assets/logo.png"
import { useState } from "react"

const Navbar = () => {
  const[open,setOpen]=useState(false)
  return (
    <>
    <nav className="absolute top-0 left-0 w-full z-15 bg-white shadow-2xl">
    <div className="flex justify-between items-center  p-5">
      <img src={logo} alt="pic" className="h-15 w-20" />
      <button className="lg:hidden font-semibold" onClick={()=>setOpen(!open)}>{open? <X />: <Menu />}</button>
     
        <ul className="hidden lg:flex gap-7">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#packages">Packeges</a></li>
          <li><a href="#destination">Destination</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" onClick={()=>setOpen(false)} className="hidden text-center text-2xl lg:block bg-orange-600 text-white w-50 p-2 h-12 rounded-2xl">Plan your trip</a>
     


    </div>
          {open && (
<ul className=" flex flex-col gap-7 h-80 items-center lg:hidden shadow-2xl">
          <li><a href="#home" onClick={()=>setOpen(false)}></a>Home</li>
          <li><a href="#about" onClick={()=>setOpen(false)}></a>About</li>
          <li><a href="#packages" onClick={()=>setOpen(false)}></a>Packeges</li>
          <li><a href="#destination" onClick={()=>setOpen(false)}></a>Destination</li>
          <li><a href="#contact" onClick={()=>setOpen(false)}></a>Contact</li>
          <li>
                    <a href="#contact" onClick={()=>setOpen(false)} className=" text-2xl lg:block bg-orange-600 text-white m-3 w-70 p-2 h-10 rounded-2xl">Plan your trip</a>

          </li>
        </ul>
      )}
    </nav>
    </>
  )
}

export default Navbar