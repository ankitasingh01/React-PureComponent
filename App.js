const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.occupation),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React is rendered"),
    React.createElement(
      Person,
      { name: "Ankita", occupation: "Developer" },
      null
    ),
    React.createElement(
      Person,
      { name: "Mike", occupation: "Senior Developer" },
      null
    ),
    React.createElement(
      Person,
      { name: "Ren", occupation: "Business Analyst" },
      null
    ),
  ]);
};
// ReactDOM.render(React.createElement(App), document.getElementById("root"));
//New version uses something like below now
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
