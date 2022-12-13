import {useState} from "react";
import ReactMarkdown from "react-markdown";
import {useDispatch} from "react-redux";
import Button from "react-bootstrap/Button";
import {createBlogThunk} from "./blog-thunks";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BlogCreate = () => {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const createBlog = () => {
        if (summary === '') {

        } else {
            dispatch(createBlogThunk({
                "title": title,
                "blog" : summary
            }))
            navigate('/blog')
        }

    }
    return(
        <div>
            <Link to={'/blog'} className={'text-decoration-none text-secondary'}>
                <i className="bi bi-arrow-left me-1"></i>Back
            </Link>
            <h2>Write a blog</h2>


            <Container>
                <Row className={'mb-3 mt-2'} >
                    <Col md={6} >
                        <span className={'text-muted'}>Write your blog here</span>
                        <Form>
                            <FloatingLabel controlId="blogTitle"
                                           label="Title"
                                           className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    value={title}
                                    placeholder="Title"
                                onChange={(event) => setTitle(event.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="blogBody" label="Body">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Body"
                                    style={{ height: '15rem' }}
                                    value={summary}
                                    onChange={(event) => setSummary(event.target.value)}
                                />
                            </FloatingLabel>
                            <Form.Text id="passwordHelpBlock" muted>
                                Write your blog using Markdown.</Form.Text>
                        </Form>

                    </Col>

                    <Col>
                        <hr className={'d-block d-md-none'} />
                        <span className={'text-muted'}>Preview</span>
                        <h3>{title}</h3>
                        <ReactMarkdown children={summary}/>
                    </Col>
                </Row>

                <Button onClick={createBlog} className={'mb-3'}>Publish Blog</Button>







            </Container>


        </div>
)}

export default BlogCreate;