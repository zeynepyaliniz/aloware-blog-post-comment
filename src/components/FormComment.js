import { Form, FormGroup, Label, Col, Button, Input } from "reactstrap";
export default function FormComment() {
    return (
        <>
            <Form>
                <FormGroup row>
                    <Label
                        for="exampleEmail"
                        sm={2}
                    >
                        Mail(Optional)
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
                    <Label
                        for="Your Name"
                        sm={2}
                    >
                        Your Name
                    </Label>
                    <Col sm={10}>
                        <Input
                            required
                            id="name"
                            name="name"
                            type="textarea"
                            placeholder="Write Your Name"
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
                    check
                    row
                >
                    <Col
                        sm={{
                            offset: 2,
                            size: 10
                        }}
                    >
                        <Button>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </>
    )
}