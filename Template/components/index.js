import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getAll%%model_name_camel%%,delete%%model_name_camel%% } from "../actions/crud";
import {%%model_name_camel%%Instance} from './instance'
import { Link } from "react-router-dom";


class %%model_name_camel%%Index extends Component {
  componentDidMount() {
    this.props.getAll%%model_name_camel%%();
  }

  renderList() {
    return _.map(this.props.instances, obj => {
      return (
        <li className="list-group-item" key={obj.id}>
          <%%model_name_camel%%Instance id={obj} />
          <Link to={`/%%model_name_camel%%/${obj.id}`}>Update</Link>
          <Button value="Delete" onClick={() => this.deleteObject(obj.id)} />
        </li>
      );
    });
  }

  deleteObject(id)
  {
    this.props.delete%%model_name_camel%%(id);
    // do something about the delete operation
  }

  render() {
    return (
      <div>
        <h3>%%model_name_camel%%Index</h3>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // use your master reducer to map state to props here
  return {
    instances: []
  };
}

export default connect(mapStateToProps, { getAll%%model_name_camel%%,delete%%model_name_camel%% })(%%model_name_camel%%Index);
