import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  );
};
//can have explanation for each question
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => <h2>i</h2>;
const Author = () => <h2>a</h2>;
const Title = () => <h2>t</h2>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
