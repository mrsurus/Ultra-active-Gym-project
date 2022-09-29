import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-body'>
            <h1 className='show-blog'>Blog</h1>
            <div className="blog">
                <h1>How does react work?</h1>
                <p> The Document Object Model (DOM) 
                    is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a
                     document is accessed and manipulated. 
                    So, React make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. 
                    So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the 
                    most efficient way to update the browser’s DOM.Unlike browser DOM elements, React elements are plain objects and are cheap to create.
                     React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth
                      keeping a DOM tree in it to speed up its manipulation.</p>
            </div>
            <div className="blog">
                <h1>Diferrenc between Props and State</h1>
                <p> The key difference between props and state is that state is internal and controlled by the component itself while props are external and 
                    controlled by whatever renders the component. props (short for “properties”) and state are both plain JavaScript objects. While both hold 
                    information that influences the output of render, they are different in one important way: props get passed to the component (similar to function
                     parameters) whereas state is managed within the component (similar to variables declared within a function).props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).
                    So simply state is limited to your current component but props can be pass to any component you wish.</p>
            </div>
            <div className="blog">
                <h1>What is the uses of 'useEffect' withOut fetching. </h1>
                <p>1. we can cleanup effect by uncluding a return function at the end of the useEffect.</p>
                <p>By using this Hook, you tell React that your component needs to do something after render</p>
                <p></p>
            </div>
        </div>
    );
};

export default Blog;