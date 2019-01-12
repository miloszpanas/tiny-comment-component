import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail"; 
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          at="Todat at 4pm" 
          image={faker.image.avatar()} 
          text="this is my first post!"
        />
      </ApprovalCard> 
      <ApprovalCard>
        <CommentDetail 
          author="Brian" 
          at="Todat at 5pm" 
          image={faker.image.avatar()} 
          text="yeah. so is mine"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Michael"at="Todat at 6pm" 
          image={faker.image.avatar()} 
          text="sure, sure, liers"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
