import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!Object.keys(this.props.book).length) {
            return <div>Select a book to get started</div>;
        }

        return (
            <div>
                <h4>Selected Book:</h4>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    book: state.activeBook
});

export default connect(mapStateToProps)(BookDetail);
