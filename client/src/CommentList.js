// @ts-nocheck
import React, { useEffect, useState } from "react";
import axios from 'axios';

export default ({ postId }) => {
  const [comments, setComments] = useState([])

  const fetchdata = async() => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

    setComments(res.data);
  };

  useEffect(() => {
    fetchdata();
  });


  const renderedComments = comments.map((comment) =>{
    return <li key={comment.id}>{comment.content}</li>;
  });

  return  <ul>{renderedComments}</ul>;
};