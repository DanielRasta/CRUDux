import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {update%%model_name_camel%%} from '../actions/crud'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

let Update%%model_name_camel%%Form = props => {
  const { handleSubmit, obj } = props

  return (
      <div>
        <form onSubmit={ handleSubmit }>
          <Field
            label="SomeField"
            name="SomeField"
            component={renderField}
            value={obj.SomeField}
            type="text"
          />

          <button type="submit">Submit</button>

          </form>
      </div>
  )
}

class Update%%model_name_camel%% extends React.Component {

  submit = (values) => {
    this.props.update%%model_name_camel%%(values, () => {
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
              Update %%model_name_camel%%
          </h1>
        </div>

        <div>
          // show your errors here
        </div>

        <div>
          <Update%%model_name_camel%%Form onSubmit={this.submit} obj={this.props.object}/>
        </div>

      </div>
    )
  }
}

Update%%model_name_camel%%Form = reduxForm({
  validate,
  form: 'update-%%model_name_camel%%-form'
})(Update%%model_name_camel%%Form)

function mapStateToProps(state)
{
    // map to your props
    return {}
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({update%%model_name_camel%%}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Update%%model_name_camel%%);



const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} value={value}/>
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
