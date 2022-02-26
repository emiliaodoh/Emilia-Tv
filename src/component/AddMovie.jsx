import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const AddMovie= ({addMovie}) => {
    const [values, setValues] = useState({
        title: "",
        posterURL: "",
        description: "",
        rating: "",
        video: ""
    })

    function handleChange(e) {
        setValues({...values, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        addMovie(values);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control type="text" name="title" value={values.title} onChange={handleChange} placeholder="Movie Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Poster URL</Form.Label>
                <Form.Control type="text" name="posterURL" value={values.posterURL} onChange={handleChange} placeholder="Poster URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" value={values.description} onChange={handleChange} placeholder="Description" />
            </Form.Group>
            <Form.Select aria-label="Default select example" value={values.rating} onChange={handleChange} name="rating">
                <option>Select ratings</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Video URL</Form.Label>
                <Form.Control type="text" name="video" value={values.video} onChange={handleChange} placeholder="Video URL" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default AddMovie;