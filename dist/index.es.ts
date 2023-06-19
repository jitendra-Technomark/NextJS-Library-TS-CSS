import React from 'react';

var MyComponent = function MyComponent(_a) {
  // const [Selection, setSelect] = useState("hello");
  // console.log(Selection);
  var name = _a.name;
  return /*#__PURE__*/React.createElement("div", {
    className: ' bg-blue-700'
  }, "Hello, ", name, "!");
};

export { MyComponent };
