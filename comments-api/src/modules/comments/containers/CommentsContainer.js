import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./../actions";

class CommentsContainer extends Component {
  state = {
    comments: [],
    isLoadig: false
  };

  componentDidMount() {
    this.setState({ isLoadig: true });

    this.props.getAllComents().then(res => {
      this.setState({ comments: res.data, isLoadig: false });
    });
  }

  render() {
    const { isLoadig, comments } = this.state;
    console.log("props ", this.props);
    return (
      <div>
        {isLoadig ? (
          <h1>loading ....</h1>
        ) : (
          comments.map(comment => (
            <div key={comment.id}>
              <h3>{comment.name}</h3>
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.comments
  };
};

const mapStateToDispatch = dispatch => {
  return bindActionCreators({ ...actions }, dispatch);
};

export default connect(mapStateToProps, mapStateToDispatch)(CommentsContainer);
