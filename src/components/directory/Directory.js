import React, { useState } from "react";
import MenuItem from "../menu-item/MenuItem";
import "./directory.scss";

function Directory() {
  const [sections, setSections] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: 'hats',
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: '',
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: '',
    },
    {
      title: "women",
      imageUrl: "https://i.ibb.co/GCCdy8t/women.png",
      id: 4,
      linkUrl: '',
      size: 'large'
    },
    {
      title: "men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      linkUrl: '',
      size: 'large'
    },
  ]);
  return (
    <>
      <div className="directory-menu">
        {sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    </>
  );
}

export default Directory;
