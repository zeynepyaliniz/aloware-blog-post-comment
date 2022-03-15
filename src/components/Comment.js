import { useState } from "react";
import FormComment from "./FormComment";

const Comment=(props)=>{
    const[title, setTitle] = useState("");
    const[message, setMessage] = useState("");
    console.log(props);
    return(
        <div><FormComment></FormComment></div>
    )

}
export default Comment;