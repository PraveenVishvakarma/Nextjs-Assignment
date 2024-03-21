"use client"
import {IconType} from "react-icons"
import { AiFillCaretDown } from "react-icons/ai";
interface SidebarItemProps{
    title:string,
    icon:IconType,
    selected?:boolean,
}
const SidebarItem:React.FC<SidebarItemProps>=({title, icon:Icon, selected,})=>{
    return(
        <div className={`flex text-white flex-row border-b-[1.5px] text-sm md:text-lg border-slate-600 bg-purple-600 gap-4 md:gap-3 p-3 pl-4 text-center items-center cursor-pointer hover:opacity-80 ${selected ?'bg-purple-800':"bg-purple-600"}`}>
            <div className="flex items-center text-center mr-10 md:mr-16 flex-row gap-2">
                <Icon size={24} />
                <p>{title}</p>
            </div>
            <div>
                {selected &&<AiFillCaretDown />}
            </div> 
        </div>
    )
}

export default SidebarItem;