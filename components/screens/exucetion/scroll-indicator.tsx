"use client"
import { ArrowDownIcon } from "lucide-react"
const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" onClick={() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }}>
      <ArrowDownIcon className="w-10 h-10 text-[#C9A84C] cursor-pointer " />
    </div>
  )
}

export default ScrollIndicator