import {ImgHTMLAttributes } from "react";

interface SkillInterface extends ImgHTMLAttributes <HTMLImageElement> {
  hasComponent:boolean
  icon?:React.ReactNode;
  urlImg?:string
  size?:string
  text:string
  color?:string
}

/**
 * Esse **Componente** cria um 'elemento' com ícone e nome da skill (conhecimento), com background pré-definido.
 * @param {boolean} hasComponent *Type: Boolean* - Verifica se receberá um componente (**true**) como imagem ou se é uma url de imagem (**false**).
 * @param {React.ReactNode} icon *Type: Component.* - Componente que será usado como ícone, não deve ser informado caso vá usar url de imagem, propriedade **urlImg**, passar componente com tamanho *"size"*.
 * @param {string} urlImg *Type: string.* - URL da imagem que será usado como ícone, não deve ser informado caso vá usar componente, propriedade **icon**.
 * @param {string} size *Type: string.* - Tamanho que será renderizado a imagem do propriedade **urlImg**, passar **propriedade do Tailwind**, usado dentro da className.
 * @param {string} text *Type: string.* - Texto que será exibido.
 * @param {string} color *Type: string.* - Cor que será usada no ícone do componente passado no propriedade **icon**
 * @returns 
 */
export function Skill ({hasComponent,icon, urlImg, size, text, color,...props}:SkillInterface){
  if(hasComponent){
    return(
      <div className="flex items-center gap-1 border rounded px-1 bg-slate-200 hover:scale-110 text-sm shadow hover:shadow-md hover:shadow-sky-200 duration-100">
        <div className={color} {...props}>
        {icon}
        </div>
        <h3>{text}</h3>
      </div>
    )
  } else{
    return(
      <div className="flex items-center gap-1 border rounded px-1 bg-slate-200 hover:scale-110 text-sm shadow hover:shadow-md hover:shadow-sky-200 duration-100">
        <img src={urlImg} alt="" className={` rounded-sm ${size}`} />
        <h3>{text}</h3>
      </div>
    )
  }
  
}