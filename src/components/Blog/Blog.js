import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='blo-container'>
            <div className='blog'>
                <p className='blog-question'> <strong>Question:</strong> How does React work?</p>
                <p><strong className='blog-answer'>Answer:</strong> React is a JavaScript library developed by Facebook for building user interfaces. It follows a declarative and efficient approach to UI development. React employs a virtual DOM to optimize rendering performance, enabling developers to create complex interfaces with ease. It primarily focuses on the view layer of an application and facilitates component-based architecture. React's design philosophy emphasizes simplicity, efficiency, and flexibility.</p>
            </div>
            <div className='blog'>
                <p className='blog-question'> <strong>Question:</strong> What is the difference between props and state?</p>
                <p><strong className='blog-answer'>Answer:</strong> Props and state are fundamental concepts in React for managing component data. Props are immutable and are used to pass data from parent to child components, resembling HTML attributes. On the other hand, state is mutable and represents a component's internal data, which can change over time in response to user interactions or system events. While props are read-only, state can be modified using the setState() method, ensuring that components can manage their data effectively.</p>

            </div>
            <div className='blog'>
                <p className='blog-question'> <strong>Question:</strong> What is the purpose of the useEffect hook in React?</p>
                <p><strong className='blog-answer'>Answer:</strong> The useEffect hook in React enables developers to perform side effects in functional components. It serves as a replacement for lifecycle methods in class components, allowing for better organization of component logic. When used without loading data from an API, useEffect can be utilized for tasks such as updating the DOM and managing timers. By accepting dependencies as an optional second argument, useEffect ensures that side effects are executed efficiently and in a controlled manner.</p>
            </div>
        </div>
    );
};

export default Blog;