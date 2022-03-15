import { Form, FormGroup, Label, Col, Button, Input, FormText } from "reactstrap";

export default function FormComment() {
    const submitHandler =(event)=>{
        console.log(event);

    }
    return (
        <>
            <Form onSubmit={()=>submitHandler}>
                <FormGroup row>
                    <Label
                        for="exampleEmail"
                        sm={2}
                    >
                    <FormText>Your mail</FormText> 
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="mail"
                            name="mail"
                            placeholder="Your mail (optional)"
                            type="email"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label sm = {2}>
                Your name
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Your Name (optional)"
                            type="textarea"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="Your Comment"
                        sm={2}
                    >
                        Comment
                    </Label>
                    <Col sm={10}>
                        <Input
                            required
                            id="comment"
                            name="comment"
                            type="textarea"
                            placeholder="Write your comment"
                        />
                    </Col>
                </FormGroup>
                <FormGroup
                    row
                >
                    <Col
                        sm={{
                            offset: 2,
                            size: 10
                        }}
                    >
                        <Button >
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </>
    )
}