import { AiFillLike} from "react-icons/ai";
import Avatar from "../Avatar";
import PostData from "../PostData";
import { MdComment, MdShare, MdViewQuilt } from "react-icons/md";

interface DiscussionForumItemProps{
    post:{
        userId:string,
        description:string,
        userPic:string,
        likes:number,
        views:number,
        comments:number,
        sector:string,
    }
}

const DiscussionForumItem:React.FC<DiscussionForumItemProps>=({post})=>{
    return(
        <div className="flex flex-row justify-center gap-1 overflow-auto">
            <div className="pl-2"><Avatar src={""} /></div>
            <div className="flex flex-col gap-1 ">
                <div className="flex items-center text-center gap-3">
                    <div className="md:text-lg font-semibold">{post.userId}</div>
                    <div className="bg-blue-700 text-sm md:text-base rounded-xl px-2">{post.sector}</div>
                </div>
                <div className="text-sm lg:text-justify">{post.description}</div>
                <div className="flex text-gray-600 flex-row justify-between gap-2">
                    <PostData count={post.likes} icon={AiFillLike} />
                    <PostData count={post.likes} icon={MdViewQuilt} />
                    <PostData count={post.likes} icon={MdComment} title="Comments" />
                    <PostData icon={MdShare} title="Share" />
                </div>
            </div>
            <div className="text-teal-600 text-nowrap text-xs md:text-sm"><p>2 min ago</p></div>
        </div>
    )
}

export default DiscussionForumItem;