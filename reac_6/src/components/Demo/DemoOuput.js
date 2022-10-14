import React from "react";
import Mypargarph from "./Mypargarph";
const DemoOuput = React.forwardRef((props, ref) => {
  return <Mypargarph>{props.show ? "hi" : ""}</Mypargarph>;
});

export default React.memo(DemoOuput);
