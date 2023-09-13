// @ts-nocheck
import { useEffect } from "react";
import { useState } from "react";

// @ts-nocheck
const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Blogs;