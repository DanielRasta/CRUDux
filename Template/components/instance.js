import React, { Component } from "react";
import { connect } from "react-redux";
import { get%%model_name_camel%% } from "../actions/crud";

class %%model_name_camel%%Instance extends Component {
  componentDidMount() {
    // use real-time?
    // this.props.getModelName(this.props.id);
  }

  render() {
    return (
      <div>
        // design your own display of an instance
        this.props.id
      </div>
    );
  }
}

function mapStateToProps(state) {
  // use your master reducer to map state to props here
  return
  {
    instance: []
  };
}

export default connect(mapStateToProps, { get%%model_name_camel%% })(%%model_name_camel%%Instance);
