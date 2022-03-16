import { useState } from "react"
import { Form, FormGroup, Label, Col, Button, Input, FormText } from "reactstrap";

export default function FormComponent() {
    const [formValues, setFormValues] = useState({
        name: "",
        title: "",
        comment: "",
        childComments : [{}]
    })
    const [replyAvailable, setReplyAvailable] = useState(false)
    console.log(formValues)
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        setSubmitted(true);
    };
    const handleReply = (event) =>{
        setReplyAvailable(true)
    }
    const handleNameChange = (event) => {
        event.persist();
        setFormValues((formValues) => ({
            ...formValues,
            name: event.target.value,
        }));
    };
    const handleTitleChange = (event) => {
        event.persist();
        setFormValues((formValues) => ({
            ...formValues,
            title: event.target.value,
        }));
    };
    const handleCommentChange = (event) => {
        event.persist();
        setFormValues((formValues) => ({
            ...formValues,
            comment: event.target.value,
        }));
    };
    return (<>
        <>
            <Form >
                <FormGroup name="name" row>
                    <Label sm={2}>
                        <FormText>Your name </FormText>
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Your Name (optional)"
                            type="textarea"
                            value={formValues.name}
                            onChange={handleNameChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup name="title" row>
                    <Label sm={2}>
                        <FormText>Comment Title </FormText>
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Comment Title"
                            type="textarea"
                            value={formValues.title}
                            onChange={handleTitleChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup name="comment" row>
                    <Label for="Your Comment" sm={2}>
                        <FormText>Comment</FormText>
                    </Label>
                    <Col sm={10}>
                        <Input
                            required
                            id="comment"
                            name="comment"
                            type="textarea"
                            placeholder="Write your comment"
                            value={formValues.comment}
                            onChange={handleCommentChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup
                    row
                >
                    <Col
                        sm={8}
                    >
                        <Button onClick={handleReply}>
                            Reply
                        </Button>

                    </Col>
                    <Col
                        sm={4}
                    >
                        <Button type="submit" onClick = {handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </>




    </>)

}