"use client"
import Sidebar from "./components/sidebar/Sidebar";
import DiscussionForum from "./components/discussionForum/DiscussionForum";
import MarketStories from "./components/marketStories/MarketStories";
import { stories } from "@/utils/posts";
import { useState } from "react";

export default function Home() {

  const [select, setSelect]=useState(true);

  const handleSelectDiscussion=()=>{
    setSelect(true)
  }
  const handleSelectStory=()=>{
    setSelect(false);
  }
  return (
    <main className="flex justify-between">
      <div className="">
        <Sidebar  selected={select} handleSelectDiscussion={handleSelectDiscussion} handleSelectStory={handleSelectStory} />
      </div>
      <div className="grid grid-cols-1 visible md:hidden md:grid-cols-3">
        <div className="col-span-2">
          <div className=" flex justify-evenly p-2">
            <div className={`cursor-pointer flex justify-center rounded-l-md border-r-2 text-white border-gray-600 bg-purple-800 w-1/2 text-sm md:text-xl lg:text-2xl font-bold ${select ?'opacity-100':"opacity-50"}`}>
              <button className="w-full text-lg"  onClick={handleSelectDiscussion}>
                Discussion Fourm
              </button>
            </div>
            <div className={`cursor-pointer text-white  flex justify-center
            rounded-r-md border-l-2 border-gray-600 bg-purple-800 p-2 w-1/2 text-sm md:text-xl lg:text-2xl font-bold ${!select ?'opacity-100':"opacity-50"}`}>
              <button className="w-full text-lg" onClick={handleSelectStory}>Market Stories</button>
            </div>
          </div>
          { select ?<DiscussionForum/>:""}
        </div>
        {!select &&
        <div className="flex col-span-1 mt-2  non md:block flex-col  ml-0 md:ml-12 lg:ml-16 gap-3 p-2 ">
          <hr />
          {stories.map((story)=>{
                return <div className="border rounded-lg " key={story.title}>
                    <MarketStories title={story.title} description={story.description} src={story.image}/> 
                </div>
          })}
        </div>
        }
      </div>


      <div className=" hidden md:visible md:grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 mt-3">
          <div className="text-2xl mb-3 uppercase lg:text-3xl font-bold bg-slate-300">
                Disscussion Fourm
          </div>
          <hr/>
          <DiscussionForum/>
        </div>
        <div className="flex col-span-1 mt-2 flex-col mr-4 ml-0 md:ml-12 lg:ml-16 gap-3 p-2 ">
          <div className="text-sm md:text-xl lg:text-3xl uppercase font-bold"> <p className="bg-slate-300" >Market Stories</p> </div>
          <hr />
          {stories.map((story)=>{
                return <div className="border rounded-lg " key={story.title}>
                    <MarketStories title={story.title} description={story.description} src={story.image}/> 
                </div>
          })}
        </div>
      </div>
    </main>
  );
}
