import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

import getNestedComments from "../functions/getNestedComments"
const Comment = ({ parentComment, replies, allComments }) => {
    console.log("Props in parent comment : ", parentComment);
    console.log("Props in replies : ", replies);
    console.log("Props in allComments : ", allComments);
    const _getNestedComments = (id) => {
        return getNestedComments(id, allComments);
    }

    return (
        <div>
            <div className="App">
                <Form className="form">
                    <FormGroup>
                        <Label for="name">Your Name</Label>
                        <Input
                            type="text"
                            value={parentComment.name}
                            name="name"
                            id="name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="comment">Your Comment</Label>
                        <Input
                            type="textarea"
                            value={parentComment.comment}
                            name="comment"
                        />
                    </FormGroup>
                    <Button>Reply</Button>
                </Form>
                {replies.length > 0 && (
                    <div>
                        {replies.map(reply => {
                            return (<div>
                                <Comment parentComment={reply} replies={_getNestedComments(reply.id)} allComments={[]}></Comment>
                            </div>
                            )
                        })}
                    </div>
                )}


            </div>
        </div>
    )

}
export default Comment;