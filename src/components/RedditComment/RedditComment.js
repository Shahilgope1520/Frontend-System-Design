import React from "react";
import CommentBox from "./CommentBox";
import { commentData } from "../../utlis/utils";

const RedditComment = () => {
  return (
    <div>
      <CommentBox data={commentData} />
    </div>
  );
};

export default RedditComment;
