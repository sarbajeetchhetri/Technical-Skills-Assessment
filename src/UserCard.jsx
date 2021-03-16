import React from "react";

export const UserCard = ({ user }) => {
  const photos = user.photos;
  console.log("PHOTOS", photos);
  return (
    <div>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      {photos.map((photo) => {
          console.log("SINGLE PHOTO", photo)
        return <img src={user.photos[0].url} alt={user.firstname} />;
      })}
    </div>
  );
};
