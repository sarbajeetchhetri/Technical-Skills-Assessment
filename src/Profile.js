import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserCard } from "./UserCard";

function Profile() {
//   const [firstname, setFirstname] = useState("");
  const [items, setItems] = useState([]);
//   const [lastname, setLastname] = useState("");
//   const [profileimage, setprofileImage] = useState([]);

  const profileData = async () => {
    try {
      const res = await axios.get(
        "https://gist.githubusercontent.com/roxcity/300697399059a6f54a983d1e9af5f459/raw/d81a2c42f8de6ca439f3cd3a5b0e809fd34f31bc/users.json"
      );
    //   setFirstname(res.data)
    setItems(res.data)
    // setprofileImage(res.data);

      console.log(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);


  console.log("RESPONSE", items);
  return (
    <>
      <div className="profile">
      {items.map(item => (
         <UserCard user={item} />
        ))}
        
      {/* {profileimage.map(item => (
          <p key={item.id}>
            {item.photos[0]}  <br/>
          </p>
        ))} */}




      {/* <h1>{firstname}</h1> */}
      {/* <h1>{lastname}</h1>
        <img src={profileimage} style={{width: "100%"}} alt="profilepic"/> */}
      </div>
    </>
  );
}

export default Profile;
