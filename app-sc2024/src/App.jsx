import React from "react";
import "./assets/css/style.css";
import { Navbar } from "./components/navbar/Navbar";
import { Article } from "./components/article/Article";
import { Counter } from "./components/counter/Counter";
import articleImg1 from "./components/article/images/img-brasilia1.jpg";
import articleImg2 from "./components/article/images/img-brasilia2.jpg";
import articleImg3 from "./components/article/images/img-brasilia3.jpg";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Counter />

        <section id="articles">
          <Article
            title="Lorem Ipsum 1"
            subtitle="Subtitle 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet error tempora? Quia, sed! Iure minima reiciendis magnam possimus eveniet dolore cupiditate laboriosam magni doloremque. Aperiam reiciendis exercitationem qui laudantium!"
            thumb={articleImg1}
          />
          <Article
            title="Lorem Ipsum 2"
            subtitle="Subtitle 2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet error tempora? Quia, sed! Iure minima reiciendis magnam possimus eveniet dolore cupiditate laboriosam magni doloremque. Aperiam reiciendis exercitationem qui laudantium!"
            thumb={articleImg2}
          />
          <Article
            title="Lorem Ipsum 3"
            subtitle="Subtitle 3"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet error tempora? Quia, sed! Iure minima reiciendis magnam possimus eveniet dolore cupiditate laboriosam magni doloremque. Aperiam reiciendis exercitationem qui laudantium!"
            thumb={articleImg3}
          />
        </section>
      </>
    );
  }
}

export default App;
