import { IconType } from "react-icons";

interface PostDataProps{
    count?:number,
    icon:IconType,
    title?:string,
}
const PostData:React.FC<PostDataProps>=({count, icon:Icon, title})=>{
    return(
        <>
        {!title && count ?
        <div className="flex flex-row gap-2">
            <div><Icon size={24} /></div>
            <div>{count/1000}K</div>
        </div>: title && count ? <div className="flex flex-row gap-2">
            <div><Icon size={24} /></div>
            <div>{count/1000}K</div>
            <div>{title}</div>
        </div>: title && !count ?<div className="flex flex-row gap-2">
            <div><Icon size={24} /></div>
            <div>{title}</div>
        </div>:<></> 
        }
        </>
    )
}

export default PostData;