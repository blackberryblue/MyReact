import React, { useState } from "react";

const SubBottom = (props) => {
  // const [init, setInit] = useState(`SubTop 반영 : ${122}`);

  const { subIncrease } = props;

  return (
    <div>
      <button onClick={subIncrease}>서브 Bottom</button>
    </div>
  );
};

export default SubBottom;
