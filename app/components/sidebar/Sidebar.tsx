
'use client'
import { AiFillCaretLeft, AiFillCaretRight, AiFillMessage, } from "react-icons/ai";
import SidebarItem from "./SidebarItem";
import { useState } from "react";
import { MdNotifications } from "react-icons/md";
import Avatar from "../Avatar";

interface SidebarProps{
    selected:boolean,
    handleSelectStory:()=>void;
    handleSelectDiscussion:()=>void;
}

const Sidebar:React.FC<SidebarProps>=({selected,handleSelectStory,handleSelectDiscussion})=>{
    const[isClicked,setIsClicked]=useState<boolean>(false);

    const handleClick=()=>{
        setIsClicked((pre)=>{
            return !pre;
        })
    }
    return(
        <>
        {isClicked?(
        <div className="h-screen fixed text-nowrap  bg-purple-600 z-10 md:static transp flex justify-between text-center">
                <div>
                    <div className="flex text-lg md:text-xl font-semibold flex-row justify-between p-4 py-6">
                        <div className="text-white gap-2 flex">
                            <Avatar src={""} />
                            <div >Hello, User</div>
                        </div>
                        <div className="text-white mr-3">
                            <MdNotifications size={30} />
                        </div>
                    </div>
                    <hr/>
                    <div onClick={handleSelectDiscussion}><SidebarItem title="Disscussion Fourm" selected={selected} icon={AiFillMessage} /></div>
                    <div onClick={handleSelectStory}><SidebarItem title="Market Stories" selected={!selected} icon={AiFillMessage}/></div>
                    <div><SidebarItem title="Sentiment" icon={AiFillMessage}/> </div>
                    <div><SidebarItem title="Market" icon={AiFillMessage}/> </div>
                    <div><SidebarItem title="Sector" icon={AiFillMessage}/> </div>
                    <div><SidebarItem title="Watchlist" icon={AiFillMessage}/> </div>
                    <div><SidebarItem title="Events" icon={AiFillMessage}/> </div>
                    <div><SidebarItem title="News/Interviews" icon={AiFillMessage}/> </div>
                </div>
                <div className=" h-full flex justify-center items-center bg-white">
                    <div className="bg-purple-800 text-white flex justify-center h-20 md:h-32"> 
                    <button onClick={handleClick}> <AiFillCaretLeft/></button>
                    </div>
                </div>
        </div>) :(
        <div className="h-screen flex items-center justify-center">
           <div className="bg-purple-800 text-white flex justify-center h-20 md:h-32">
                <button onClick={handleClick}>
                    <AiFillCaretRight/>
                </button> 
            </div>
        </div>)
        }
        </>
        
    )
}

export default Sidebar;