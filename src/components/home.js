import React, { useEffect, useState, useRef } from "react";
import Header from "./header";

function App() {
    const [posts, setPosts] = useState([]); //, State to store the fetched posts
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const containerRef = useRef(null);

    useEffect(() => {
        // Fetch the data from the API when the component is mounted
        fetch("https://42works.net/wp-json/wp/v2/pages")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // Convert response to JSON
            })
            .then((data) => {
                setPosts(data); // Store the data in the state
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                setError(error); // Catch and store any errors
                setLoading(false);
            });
    }, []);

    // You can implement the handleItemClick function here if needed
    // const handleItemClick = (itemRef) => { ... }

    return (
        <>
            <Header />
            <div className="content container test">
                <h1 className="global-style">Home page</h1>
                {loading && <p>Loading posts...</p>}{" "}
                {/* Show loading message */}
                {error && <p>{`Error: ${error.message}`}</p>}{" "}
                {/* Show error message if any */}
                {!loading && !error && (
                    <div className="posts-list">
                        {posts.map((post) => (
                            <div key={post.id} className="post-item">
                                <a href={`${post.link}`}>
                                    {post.title.rendered}
                                </a>

                                {/* <div
                                    dangerouslySetInnerHTML={{
                                        __html: post.excerpt.rendered,
                                    }}
                                /> */}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
