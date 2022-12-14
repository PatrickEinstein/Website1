import React from "react";

import MenuItem from "../menu-items/menu-items";

import "./directory.css";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
        },

        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },

        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },

        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },

        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },

        {
          title: "mens",
          imageUrl: "https://i.ibb.co/3F3YMSj/4.png",
          size: "large",
          id: 6,
          linkUrl: "shop/mens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/3F3YMSj/4.png",
          size: "large",
          id: 7,
          linkUrl: "shop/mens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/3F3YMSj/4.png",
          size: "large",
          id: 8,
          linkUrl: "shop/mens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/3F3YMSj/4.png",
          size: "large",
          id: 9,
          linkUrl: "shop/mens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/3F3YMSj/4.png",
          size: "large",
          id: 10,
          linkUrl: "shop/mens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/3F3YMSj/4.png",
          size: "large",
          id: 11,
          linkUrl: "shop/mens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/3F3YMSj/4.png",
          size: "large",
          id: 12,
          linkUrl: "shop/mens",
        },

        {
          title: "mens",
          imageUrl: "https://i.ibb.co/3F3YMSj/4.png",
          size: "large",
          id: 13,
          linkUrl: "shop/mens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/3F3YMSj/4.png",
          size: "large",
          id: 14,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((id, ...othersSectionProps) => (
          <MenuItem key={id} {...othersSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
