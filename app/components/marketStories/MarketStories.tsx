
import Image from "next/image";

interface MarketStoriesProps{
    src:string,
    title:string,
    description:string,
}
const MarketStories:React.FC<MarketStoriesProps>=({src, title, description})=>{
    return(
        <div className="flex flex-col items-center w-full overflow-x-auto gap-1">
            <div className="aspect-square overflow-hidden relative  w-full">
                <Image src={src} alt="story image"  fill className="object-contain" />
            </div>
            <div className="text-slate-800 text-lg md:text-xl font-semibold">
                {title}
            </div>
            <div className="p-1 text-justify text-sm md:text-sm mx-1">
                {description}
            </div>
        </div>
    )
}

export default MarketStories;