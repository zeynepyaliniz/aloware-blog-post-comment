import { useEffect, useState } from "react";
import Comment from "./Comment";
import getNestedComments from "../functions/getNestedComments"
import CommentForm from "./CommentForm";

const Comments = (props) => {
    const [comments, setComments] = useState([]);
    console.log("comments: ", comments);

    const parentComments = comments.filter((comment) => comment.parentId === null);
    console.log("parent comments", parentComments);
    const getReplies = id => {
        return getNestedComments(id,comments);
    }
    console.log(getReplies("1"));
    useEffect(() => {
        fetch("http://localhost:3000/comments")
            .then(res => res.json())
            .then(result =>
                setComments(result)
            )
            .catch(console.log);

    }, []);
    return (
        <>
        <CommentForm></CommentForm>
            {parentComments.map((parentcomment) => {
                return <div key={parentcomment.id}>
                    <Comment parentComment={parentcomment}
                        replies={getReplies(parentcomment.id)} allComments = {comments} > </Comment>
                </div>

            })}

        </>
    )
}
export default Comments;