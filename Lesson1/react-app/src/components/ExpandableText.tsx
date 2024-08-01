import { useState } from "react";

interface Props {
    children: string,
    maxChar?: number,
}
const ExpandableText = ({children, maxChar = 20 } : Props) => {

    if (children.length <= maxChar) 
        return <p>{children}</p>;

    const [showFull, setShowFull] = useState(false);

    let message = showFull ? children : children.substring(0, maxChar);



  return (
    <div>
        {message} <button onClick={() => setShowFull(!showFull)}>Read {showFull == true ? 'More' : 'Less'}</button>
    </div>
  )
}

export default ExpandableText