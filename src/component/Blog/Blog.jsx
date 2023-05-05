import React from 'react';
import './Blog.css'


const Blog = () => {
    return (
       <div className='blog-container'>
        <h1 className='text-success text-center mb-5 bg-dark p-5'>My Blog</h1>
<div className='single-question'>
            <h4>The differences between uncontrolled and controlled components.</h4>
            <div>
              <p>In React, a controlled component is a component that renders based on the state passed down from its parent component, while an uncontrolled component is a component that maintains its own internal state.</p>
              <p>Here are some key differences between controlled and uncontrolled components:</p>
              <ol>
                <li>State: In a controlled component, the state is managed by the parent component and passed down to the child component via props. In an uncontrolled component, the state is managed internally by the component itself.
                </li>
                <li>User Input: In a controlled component, user input is handled via the state change event handlers passed down from the parent component. In an uncontrolled component, user input is handled via internal event handlers of the component.
                </li>
                <li>Refs: In a controlled component, refs are passed down from the parent component to the child component via props. In an uncontrolled component, refs are created and managed internally by the component.
                </li>
                <li>Performance: Controlled components can be less performant than uncontrolled components because they require more rendering cycles and re-renders, especially if they have complex state structures.
                </li>
                <li>Validation: Controlled components are easier to validate because the state is managed by the parent component, making it easier to perform validation on the data before it is submitted. With uncontrolled components, validation can be more difficult because the state is managed internally by the component.
                </li>
              </ol>
              <p>In summary, controlled components are preferred for more complex applications where state needs to be managed carefully, while uncontrolled components can be more efficient for simple applications where state management is not critical.
              </p>
            </div>
</div>
<div className='single-question'>
            <h4>How to validate React props using PropTypes</h4>
            <div className='answer2'> 
           <p>
In React, you can use PropTypes to validate the types of props that are passed to a component. PropTypes helps in ensuring that the component receives the correct type of props, thus reducing potential errors and bugs.</p>
           <p>To use PropTypes, you first need to install it as a dependency:</p>
           <img src="./prop.jpg" alt="" />
           <p>Then, you can import and use it in your component:</p>
           <img src="./jsx.jpg" alt="" />
           <p>In the above example, we're validating that the title and content props are both strings and are required. If the props are not provided or are not of the correct type, React will display a warning in the console.</p>
           <p>There are several PropTypes validators available, including string, number, bool, array, object, func, and more. You can also create custom PropTypes validators if needed.</p>
            </div>
</div>
<div className='single-question'>
    <h4>Tell us the difference between nodejs and express js.</h4>
    <p>Node.js is an open-source JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript code outside the browser on the server-side. Node.js is used for building scalable, high-performance network applications and is widely used for backend development.</p>
    <p>Express.js is a lightweight, open-source web application framework for Node.js. It provides a set of features for building web applications and APIs quickly and easily. It provides a robust set of HTTP utility methods and middleware for handling HTTP requests and responses. Express.js is often used in conjunction with other libraries and frameworks to build full-stack web applications</p>
    <p>In essence, Node.js is a runtime environment that allows JavaScript code to run on the server-side, while Express.js is a web application framework that runs on top of Node.js and provides a set of features for building web applications and APIs.</p>
</div>
<div>
    <h4>What is a custom hook, and why will you create a custom hook?</h4>
    <p>In React, a custom hook is a JavaScript function that starts with the prefix "use" and encapsulates a specific set of logic that can be reused across multiple components. It allows you to extract repeated code and share it between components, improving code reuse and reducing duplication.</p>
    <p>Custom hooks are useful in situations where you have a set of related logic that needs to be shared between multiple components. For example, you might create a custom hook to handle form validation, API data fetching, or managing stateful logic across multiple components.</p>
    <p>By using a custom hook, you can keep your code clean, reusable, and easy to maintain. You can also improve the readability of your code by abstracting away the complexity of the logic and giving it a descriptive name.

</p>
    <p>Overall, creating custom hooks is an effective way to manage and reuse your code in a more efficient way, while keeping your components clean and focused on their specific responsibilities.</p>
</div>
    </div>
      );
    }

export default Blog;