import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"

class StreamCreate extends Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {/*similar to <input onChange={input.onChange} value={input.value}/> */}
        {this.renderError(meta)}
      </div>
    )
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  onSubmit = formValues => {
    console.log(formValues)
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if (!formValues.title) {
    errors.title = "You must enter a title"
  }

  if (!formValues.description) {
    errors.description = "You must enter a description"
  }

  return errors
}

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate)
