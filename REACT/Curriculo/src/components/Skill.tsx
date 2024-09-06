import {ImgHTMLAttributes } from "react";

interface SkillInterface extends ImgHTMLAttributes <HTMLImageElement> {
  hasComponent:boolean
  icon?:React.ReactNode;
  img?:string
  size?:string
  text:string
  color?:string
}
export function Skill ({hasComponent,icon, img, size, text, color,...props}:SkillInterface){
  if(hasComponent){
    return(
      <div className="flex items-center gap-1 border rounded px-1 bg-slate-200 hover:scale-110 text-sm">
        <div className={color} {...props}>
        {icon}
        </div>
        <h3>{text}</h3>
      </div>
    )
  } else{
    return(
      <div className="flex items-center gap-1 border rounded px-1 bg-slate-200 hover:scale-110 text-sm">
        <img src={img} alt="" className={`rounded-full ${size}`} />
        <h3>{text}</h3>
      </div>
    )
  }
  
}