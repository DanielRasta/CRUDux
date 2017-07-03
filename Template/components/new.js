import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {create%%model_name_camel%%} from '../actions/crud'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

let Create%%model_name_camel%%Form = props => {
  const { handleSubmit } = props

  return (
      <div>
        <form onSubmit={ handleSubmit }>
  
          <Field
            label="SomeField"
            name="SomeField"
            component={renderField}
            type="text"
          />

          
          <button type="submit">Submit</button>

          </form>
      </div>
  )
}

class Create%%model_name_camel%% extends React.Component {

  submit = (values) => {
    this.props.create%%model_name_camel%%(values, () => {
      // do something upon success...
      this.props.history.push("/");
    });
  }

  componentDidMount()
  {
    // maybe something on load..?
  }
  render() {
    return (
      <div>

        <div>
          <h1 className="page-header">
              Create%%model_name_camel%%
          </h1>
        </div>

        <div>
          // show your errors here
        </div>

        <div>
          <Create%%model_name_camel%%Form onSubmit={this.submit} />
        </div>

      </div>
    )
  }
}

Create%%model_name_camel%%Form = reduxForm({
  validate,
  form: 'create-%%model_name_lower%%-form'
})(Create%%model_name_camel%%Form)

function mapStateToProps(state)
{
    // map to your props
    return {}
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({create%%model_name_camel%%}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Create%%model_name_camel%%);



const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      <br/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

function validate(values) {
  const errors = {};

  // enter your validations here
  // if (!values.SomeField) {
  //   errors.SomeField= "SomeField is mandatory";
  // }

  return errors;
}
