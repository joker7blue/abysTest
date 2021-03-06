import React from "react";
import { withRouter } from "react-router-dom";
import './menuItem.scss';

const MenuItem = ({title, size, imageURL, linkUrl, history}) => {
  return (
    <div className={`menu-item ${size}`} onClick={() => history.push(linkUrl)}>
      <div className="background-image" style={{ backgroundImage: `url(${imageURL})` }}></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
