import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    render () {
        const {fields: {title, categories, content}, handleSubmit} = this.props;

        const onCreatePost = (params) => {
            this.props.createPost(params).then((data) => {
                this.context.router.push('/');
            });
        };

        return (
            <form onSubmit={handleSubmit(onCreatePost)}>
                <h3>Create a New Post</h3>

                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">{title.touched ? title.error : ''}</div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">{categories.touched ? categories.error : ''}</div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <input type="textarea" className="form-control" {...content} />
                    <div className="text-help">{content.touched ? content.error : ''}</div>
                </div>

                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </div>
            </form>
        );
    }
}

const validatePost = ({title, categories, content}) => {
    let errors = {};
    if(!title) {
        errors.title = 'Enter a title!';
    }
    if(!categories) {
        errors.categories = 'Enter categories!';
    }
    if(!content) {
        errors.content = 'Enter some content!';
    }
    return errors;
};

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate: validatePost
}, null, {createPost})(PostsNew);
