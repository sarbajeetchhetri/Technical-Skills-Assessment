import React from "react";

export const UserCard = ({ user }) => {
  const photos = user.photos;

  let obj = {};

  let newPhotos = [];

  //Priority rank: ["google", “linkedin”, "facebook", "twitter", "office365”, undefined]
  let priorityPhotos = {
    google: 0,
    linkedin: 1,
    facebook: 2,
    twitter: 3,
    office365: 4,
    undefined: 5,
  };



  let finalPhotos;

  photos.forEach((element) => {
    obj[element.source] = obj[element.source]?.length
      ? obj[element.source]
      : [];

    obj[element.source] = [...obj[element.source], element.url];

    newPhotos[priorityPhotos[element.source]] = {
      [element.source]: obj[element.source],
    };
    finalPhotos = newPhotos.filter(() => {
      return true;
    });
  });

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        border: "1px solid black",
        justifyContent: "space-between",
        padding: "5px",
        maxWidth:"300px"
      }}
    >
      <span>{user.firstName} </span>
      <span>{user.lastName}</span>
      
      
      <img
        style={{ height: "100px", width: "100px", borderRadius: "50%" }}
        src={Object.values(finalPhotos[0])[0]}
        alt={user.firstName}
      />
    </div>
  );
};