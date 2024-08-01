// We use file.ts for plain TypeScript files and file.tsx for React components

function Message() {
    // JSX: JavaScript XML

    // Under the hood the code in React is converted into Js. See babeljs.io/repl 

    const name = '';

    // Checks if the name is truthy
    if (name)
        // Between {} we can add any JS code that returns a value (eg Variables, Functions...)
        return <h1>Hello {name}!</h1>;
    else
        return <h1>Hello World!</h1>

}

export default Message;