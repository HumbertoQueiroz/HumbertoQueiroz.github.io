import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  urlImg:string
}

/**
 * Esse **Componente** cria uma imagem de avatar
 * 
 * Recebe a URL da imagem e pode receber demais propriedades de elementos
 * @param {string} urlImg *Type: string.* - Url da imagem a ser usada como avatar
 * @returns 
 */

export function Avatar({urlImg, ...props}:AvatarProps){
return(
<div className="w-full bg-blue-900 flex flex-col items-center">
  <img src={urlImg} {...props} className="rounded-full w-3/4 my-4 ring-2 ring-sky-300" title={props.alt}/>
</div>
)
}