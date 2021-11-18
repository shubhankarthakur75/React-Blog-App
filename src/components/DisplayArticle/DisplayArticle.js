import React, { Component } from "react";
import "./DisplayArticle.css";
import AuthorDetails from "../AuthorDetails/AuthorDetails";
import articleImage from "../../assets/images/lake-image.jpg";
import clappingImage from "../../assets/images/clapping-image-30px.png";

export class DisplayArticle extends Component {
  render() {
    return (
      <div className="display-article">
        <div className="article-title">5 ways to animate a react app</div>
        <div className="author-details-container">
          <AuthorDetails />
        </div>
        <div className="article-image-container">
          <img src={articleImage} className="article-image" alt="article" />
        </div>
        <div className="article-text-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          corrupti. A quisquam nam sapiente voluptate illum deleniti suscipit
          sunt quos consectetur vitae enim dignissimos exercitationem optio,
          omnis odio! Qui, iste impedit! Nemo asperiores facilis excepturi eaque
          minus, quis suscipit beatae aliquam vitae sunt sequi, itaque aut!
          Quam, eius corrupti. Fugiat laborum dolore quos voluptatibus sapiente.
          Vitae velit a cum id doloribus iusto molestias, tenetur consequuntur
          exercitationem voluptate, eos voluptatem illum fugiat consequatur?
          Fuga animi aut, cum ad sint neque quia sunt! Adipisci laudantium
          earum, labore placeat quidem ex voluptatibus cumque velit sapiente
          repudiandae illo, nesciunt autem, veniam voluptates necessitatibus
          quia dolor corrupti. Praesentium fuga ad culpa. Nulla distinctio
          maxime iusto suscipit et omnis nemo quas cupiditate sit eligendi
          beatae veniam illo repellendus eum vero delectus, iure ad quam laborum
          sunt error natus? Laboriosam laudantium rem reiciendis nobis,
          voluptatum magnam eius veritatis magni odit exercitationem inventore
          repellat doloremque quo non. Impedit, ullam illo. Corporis quam
          doloremque possimus explicabo, eos harum iusto magnam rerum aliquam
          minus, quibusdam non similique omnis porro obcaecati labore accusamus
          eligendi. Veniam cum accusantium adipisci eveniet esse incidunt ipsum
          unde? Quasi sint blanditiis optio autem provident repudiandae vel
          adipisci ullam itaque, voluptas architecto obcaecati consequuntur
          libero mollitia vitae.
        </div>
        <div className="keyword-container">
          <button className="keyword-btn">React</button>
          <button className="keyword-btn">Javascript</button>
        </div>
        <div className="article-reactions">
          <img
            src={clappingImage}
            className="reaction-image"
            alt="claping-hands"
          />
          <p>9.3K</p>
          <p>Claps</p>
        </div>
        <div className="author-details-container">
          <AuthorDetails />
        </div>
      </div>
    );
  }
}

export default DisplayArticle;
