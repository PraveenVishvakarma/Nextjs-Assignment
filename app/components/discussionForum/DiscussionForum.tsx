'use client'
import { posts } from "@/utils/posts";
import DiscussionForumItem from "./DiscussionForumItem";

const DiscussionForum=()=>{
    return(
        <div className="flex flex-col mt-4">  
            <div className="flex flex-col gap-10 overflow-auto">
                {posts.map((post)=>{
                    return( <div key={post.userId} className="border-r-2 border-b-2 border-slate-400 rounded-lg w-full shadow-lg p-2" >
                            <DiscussionForumItem post={post}/>
                        </div>)})
                } 
            </div>
        </div>
    )
}

export default DiscussionForum;