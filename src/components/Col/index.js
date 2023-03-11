import React from "react";

function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  const gutter = props.gutter.split(" ").map(gutter => "py-" + gutter).join(" ");

  // can I get the classes to work in CSS instead?
  
  return <div className={`${size} ${gutter} d-flex justify-content-center`}>{props.children}</div>;
}

export default Col;
