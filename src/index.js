import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail"; 

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        at="Todat at 4pm" 
        image={faker.image.avatar()} 
        text="this is my first post!"
      />
      <CommentDetail 
        author="Brian" 
        at="Todat at 5pm" 
        image={faker.image.avatar()} 
        text="yeah. so is mine"
      />
      <CommentDetail 
        author="Michael"at="Todat at 6pm" 
        image={faker.image.avatar()} 
        text="sure, sure, liers"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
