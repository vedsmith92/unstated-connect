import React from "react";
import { Subscribe } from "unstated";

export default containers => mapper => Component => props => (
  <Subscribe to={containers}>
    {(...containers) => (
      <Component
        {...props}
        {...mapper(containers)}
      />
    )}
  </Subscribe>
);
