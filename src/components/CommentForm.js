
import { useState, useEffect } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
export default function CommentForm() {
    const [message, setMessage] = useState({
        name: "",
        comment: "",
        id: "",
        parentId: null,
        createdAt: new Date()
    });
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        setSubmitted(true);
        console.log(message);
        debugger;

        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        }).then(
            setMessage("")
        );

    }
    const handleNameChange = (event) => {
        event.persist();
        setMessage((message) => ({
            ...message,
            name: event.target.value,
        }));
    };
    const handleMessageChange = (event) => {
        event.persist();
        setMessage((message) => ({
            ...message,
            comment: event.target.value,

        }));
    };


    return (
        <>
            <div className="App">
                <Form className="form" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="name">Your Name</Label>
                        <Input
                            onChange={handleNameChange}
                            type="text"
                            value={message.name}
                            name="name"
                            id="name"
                            placeholder="write your name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="comment">Your Comment</Label>
                        <Input
                            onChange={handleMessageChange}
                            type="textarea"
                            value={message.comment}
                            name="comment"
                            id="comment"
                            placeholder="Write your comment here"
                        />
                    </FormGroup>
                    <Button>Write</Button>
                </Form>
            </div>
        </>

    );
}