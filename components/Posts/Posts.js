import React, { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker';
import Post from '../Post/Post'

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const posts = [...Array(30)].map((_, i) => ({
            userName: faker.internet.userName().split(".").join("").toLowerCase(),
            userImg: faker.image.avatar(),
            img: faker.image.city(null,null,true),
            caption: faker.hacker.phrase(),
            id:i
        })
        )
        setPosts(posts);
    }, [])
  return (
    <div>
        {/* Post */}
      {posts.map((post) => (<Post id={post.id} userName={post.userName} userImg={post.userImg} img={post.img} caption={post.caption}/>))}

    </div>
  )
}

export default Posts