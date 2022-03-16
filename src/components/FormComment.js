import { Form, FormGroup, Label, Col, Button, Input, FormText } from "reactstrap";
import { Component } from "react";

export default class FormComment extends Component {
    constructor() {
        super();
        this.submitHandler = this.submitHandler.bind(this);

        this.state = {
            isLoading: true,
            alldata: [],
            error: null,
            comment: "my Comment",
            name: "Zeynep",
            title: "my Title",
            mail: "adad@gmail.com"

        };
    }

    submitHandler = (event) => {
        event.preventDefault();
        var data = new FormData(event.target);
        console.log(data)
        debugger
    }
    commentHandler(event) {
        this.setState({ comment: event.target.value });
    }
    nameHandler(event) {
        this.setState({ name: event.target.value });
    }
    titleHandler(event) {
        this.setState({ title: event.target.value });
    }
    componentDidMount() {
        this.getLists();
    }
    getLists = () => {
        this.setState({ loading: true }, () => {
            fetch("http://localhost:3000/comments")
                .then(res => res.json())
                .then(result =>
                    this.setState({
                        loading: false,
                        alldata: result
                    })
                )
                .catch(console.log);
        });
    }

    render() {
        console.log(this.state.alldata);
        return (

            <>
                <Form onSubmit={this.submitHandler} ref={r => { this.Form = r }}>
                    <FormGroup name="mail" row>
                        <Label
                            for="exampleEmail"
                            sm={2}
                        >
                            <FormText>Your Mail</FormText>
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="mail"
                                name="mail"
                                placeholder="Your mail (optional)"
                                type="email"
                                value={this.state.mail}
                            //onChange={this.mailHandler}
                            />
                        </Col>
                    </FormGroup>
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
                                value={this.state.name}
                            //onChange={this.nameHandler}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup name="comment" row>
                        <Label
                            for="Your Comment"
                            sm={2}
                        >
                            <FormText>Comment</FormText>
                        </Label>
                        <Col sm={10}>
                            <Input
                                required
                                id="comment"
                                name="comment"
                                type="textarea"
                                placeholder="Write your comment"
                                value={this.state.comment}
                            //onChange={this.commentHandler}
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

}