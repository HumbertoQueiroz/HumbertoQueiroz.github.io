import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  urlImg:string
}

export function Avatar({urlImg, ...props}:AvatarProps){
return(
<div className="w-1/4 bg-blue-900 flex flex-col items-center">
  <img src={urlImg} {...props} className="rounded-full w-3/4 my-4 hover:ring hover:ring-sky-300 hover:animate-pulse" title={props.alt}/>
</div>
)
}