import React, { useState, useEffect } from 'react';

function ApiData() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const [increment, setIncrement] = useState(0)
  
    useEffect(() => {
      fetchPosts();
    }, []);
  
    const fetchPosts = () => {
      setIsLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_start=${posts.length}`)
        .then(response => response.json())
        .then(data => {
          setPosts(prevPosts => [...prevPosts, ...data]);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
        });
    };

const incrementFun = () => {
  if(
    increment<10
  ){
    setIncrement(increment + 1)
  }
  else{
    setIncrement(increment - 1)
  } 
}

const decrementFun = () => {
 if(
   increment>0
 ){
  setIncrement(increment - 1)
 } 
}

  return (
    <div className='post-data'>
    <h1>Posts</h1>

    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>

    <h1> {increment} </h1>
    <button onClick={incrementFun}> Increment</button>
    <button onClick={decrementFun}> Increment</button>

    {isLoading && <p>Loading...</p>}
    {posts.length < 1000 && (
      <button onClick={fetchPosts}>Load More</button>

    )}
  </div>
);
}


export default ApiData;