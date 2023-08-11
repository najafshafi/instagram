import React from "react";
import { useState } from "react";

const DataContext = React.createContext();

const DataObject = [
  {
    user: "najaf.shafi",
    postImage: "https://www.storypick.com/wp-content/uploads/2022/12/16.jpeg",
    likes: 23,
    caption:
      "a high blue grey and brown cliff with light snow and pink cherry blossom trees + Roger Deakins and Moebius",
    postTime: "2d",
  },
  {
    user: "john.wick",
    postImage:
      "https://img.freepik.com/premium-photo/ai-generated-illustration-smiling-handsome-man-with-cup-coffee_441362-4990.jpg?w=2000",
    likes: 54,
    caption:
      "beautiful city of naboo royal palace architecture with arboretum, megascan concrete texture building, cinematic composition, Jaime Jasso, Craig Mullins",
    postTime: "2hr",
  },
  {
    user: "Era.soon",
    postImage: "https://ai-pro.org/wp-content/uploads/2023/02/old-man-8.png",
    likes: 56,
    caption:
      "forest city, foliage, moonlight, night time, stars, psychocybernetics, cybernetician, mystery sci - fi, starry, larry niven, charles stross, attentive detail, beyond real, amazingly real, intimate lighting",
    postTime: "12hr",
  },
  {
    user: "alon.seo",
    postImage:
      "https://wp.scoopwhoop.com/wp-content/uploads/2023/05/342732964_978258646667652_8487745152492846202_n.jpg?w=819",
    likes: 34,
    caption:
      "fractal dragon head, Dieselpunk, Teslapunk, Spacepunk, Trey Ratcliff, Cindy Sherman, full body portrait, action shot portrait, ultra realistic, photorealisim, deeply real, amazing detail, mind-blowing detail, Moonlight Engine, Unreal Engine, Surrealistic lighting, Volumetric lighting, God rays",
    postTime: "5d",
  },
];

export const DataProvider = ({ children }) => {
  const [data, setdata] = useState(DataObject);
  return (
    <>
      <DataContext.Provider value={{ data, setdata }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export const useData = () => React.useContext(DataContext);
