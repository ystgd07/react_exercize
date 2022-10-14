import React from "react";
//prevent Dom Soup Situation
function Wraaper(props) {
  return props.children;
}

export default Wraaper;
