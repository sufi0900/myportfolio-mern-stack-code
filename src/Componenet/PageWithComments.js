import React, { Component } from "react";
import commentBox from "commentbox.io";

class PageWithComments extends Component {
  componentDidMount() {
    // Initialize the CommentBox.io widget with your project ID
    this.removeCommentBox = commentBox("5707725409353728-proj");
  }

  componentWillUnmount() {
    // Remove the CommentBox.io widget when the component is unmounted
    this.removeCommentBox();
  }

  render() {
    return <div className="commentbox" />;
  }
}

export default PageWithComments;
