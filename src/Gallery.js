import React from "react";

const AWS_BASE_URL = 'https://s3.amazonaws.com/kk-pix.ly';

function Gallery({ imageData }) {

  console.log("IMAGEDATA=", imageData);

  return (

    <div className="Gallery">
      {imageData.map(image => {
        return (
          <img src={`${AWS_BASE_URL}/${image.filename}`} alt={image.filename} />
        );
      })}
    </div>
  );

}

export default Gallery;