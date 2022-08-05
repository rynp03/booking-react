import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/photos/dublin-by-night-picture-id659151362?b=1&k=20&m=659151362&s=170667a&w=0&h=W0nYIG8x-3-WSFqBQC8QZ5Pw8k7wVj_hZ7SngIlVZsQ="
          alt="dublin"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/66/cd/04/caption.jpg?w=700&h=-1&s=1&cx=1440&cy=949&chk=v1_1dc18af01397ba07dac9"
          alt="austin"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/photos/cityscape-of-the-downtown-reno-nevada-skyline-with-hotels-and-casinos-picture-id1255614481?k=20&m=1255614481&s=612x612&w=0&h=cjBjNSfXnPwglN1gtb1D3j4b3uzB7lfjy4kkLkBw-6A="
          alt="reno"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>532 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
