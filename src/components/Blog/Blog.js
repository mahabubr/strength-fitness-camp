import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className="blog-container">
                <h2>How Does React Works</h2>
                <p>
                    react is open source client side library. is that do user interface development.react compiled HTML to XML file. that tell babel. react use virtual dom. it was implement version of JavaScript DOM. react virtual dom easy for update and change state. react also use node package manager (NPM).
                </p>
            </div>
            <div className="blog-container">
                <h2>Deference Between Props and State</h2>
                <p>
                    props use to pass data from another components. state used for change virtual dom. it will be changed or not change. props make state reusable. but state not to do that. The state is a set of variables that determine the current condition of the component. Props is short for properties. It is the set of attributes that are passed from a parent to a child component
                </p>
            </div>
            <div className="blog-container">
                <h2>what is the purpose of useEffect hook</h2>
                <p>
                    once in componentDidMount and once in componentDidUpdate. The code related to the timer, setInterval, and clearInterval which are related are put into different code blocks. It will be much better if there is an option to not repeat code at the same time group together related codes in the same block.
                </p>
            </div>
        </div>
    );
};

export default Blog;