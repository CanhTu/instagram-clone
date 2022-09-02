import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsis,faHeart,faComment,faPaperPlane,faBookmark,faFaceSmile
} from "@fortawesome/free-solid-svg-icons";


function Post({id,userName,userImg,img,caption}) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
        {/* Header */}
        <div className='flex items-center p-5'>
            <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" alt="" />
            <p className='flex-1 font-bold'>{userName}</p>
            <FontAwesomeIcon className='h-5' icon={faEllipsis}/>
        </div>

        {/* img */}
        <img src={img} className="object-cover w-full" alt="" />

        {/* button */}
        <div className='flex justify-between px-4 pt-4'>
            <div className='flex space-x-4'>
                <FontAwesomeIcon icon={faHeart} className="btn" />
                <FontAwesomeIcon icon={faComment} className="btn" />
                <FontAwesomeIcon icon={faPaperPlane} className="btn" />
            </div>
            <FontAwesomeIcon icon={faBookmark} className="btn" />
        </div>
        
        {/* caption */}
        <p className='p-5 truncate'>
            <span className='font-bold mr-1'>{userName} </span>
            {caption}
        </p>

        {/* input box */}
        <form className='flex items-center p-4'>
            <FontAwesomeIcon className='h-7' icon={faFaceSmile}/>
            <input type="text" placeholder='Add a comment...' className='border-none flex-1 focus:ring-0 outline-none ml-4' />
            <button className='font-semibold text-blue-400'>Post</button>
        </form>
    </div>
  )
}

export default Post