import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { withRouter } from 'react-router-dom';

class Search extends Component {
    handleFormSubmit = function({query}) {
        this.props.onSubmit(query)
    }

    renderInput(field) {
        return <input className='search__input' type="text" placeholder="&#xf002;  Search DailySmarty" {...field.input} />
    }

    render() {
        const { handleSubmit, type } = this.props;
        return (
            <form className={`search ${type ? type : ''}`} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput}/>
                <p className='search__text'>Press return to search</p>
            </form>
        )
    }
}

Search = reduxForm({
    form: 'searchbar'
})(Search)

Search = withRouter(Search);

export default Search;