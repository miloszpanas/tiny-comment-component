import React from "react";

const ApprovalCard = (props) => {
  console.log(props.children);
  //  content held within the component gets passed as and is accessed with props.children 

  return(
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Reject</div>
      </div>
    </div>
  )
};

export default ApprovalCard;