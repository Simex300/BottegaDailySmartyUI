import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { withRouter } from 'react-router-dom';

class Search extends Component {

    handleFormSubmit = function({query}) {
        console.log("Handling query...");
        this.props.history.push('/results');
    }

    renderInput(field) {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form className='search' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput}/>
            </form>
        )
    }
}

Search = reduxForm({
    form: 'searchbar'
})(Search)

Search = withRouter(Search);

export default Search;