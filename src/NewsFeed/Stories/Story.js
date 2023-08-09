import React from "react";
import "./Stroy.css";
import ChildStories from "./ChildStories";

const Story = () => {
  return (
    <div>
      <div className="Main__story__container">
        <ChildStories
          user="najaf.shafi"
          postImage={
            "https://im.indiatimes.in/content/2023/Mar/ai-selfie_6419807faa25e.jpg?w=725&h=725"
          }
        />

        <ChildStories
          user="kamran.khan"
          postImage={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnki1RK8x9-5-I7YxtJkQo5Ncus5eSBvlL_yyxI2MSOP5QvyFPil2-EvqXHiHo1_xSDvg&usqp=CAU"
          }
        />
        <ChildStories
          user="waqasjutt"
          postImage={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41Zjn2OXQ17EjlpoPQiWEAYkiN-p9ihk7Hd-kcx2_Mlt6cGHs4TIvhXn7dLuYUXRo56w&usqp=CAU"
          }
        />
        <ChildStories
          user="elonmusk"
          postImage={
            "https://static.vecteezy.com/system/resources/previews/022/251/852/non_2x/young-woman-digital-ai-generated-portrait-free-photo.jpeg"
          }
        />
        <ChildStories
          user="jeffsd"
          postImage={
            "https://www.researchgate.net/profile/Henrik-Saetra/publication/366943371/figure/fig2/AS:11431281112633472@1673502843018/AI-generated-profile-picture-made-with-the-app-Lensaai_Q320.jpgs"
          }
        />
        <ChildStories
          user="markburger"
          postImage={
            "https://pbs.twimg.com/media/Fw1jTvRWwCcYUHF?format=jpg&name=large"
          }
        />
        <ChildStories
          user="ranschers"
          postImage={
            "https://images.nightcafe.studio/jobs/DYnXJho9sPfSi9rJ7LRz/DYnXJho9sPfSi9rJ7LRz--1--il62v.jpg?tr=w-1600,c-at_max"
          }
        />
        <ChildStories
          user="broadway"
          postImage={
            "https://cdn.pixabay.com/photo/2023/06/01/14/11/ai-generated-8033671_1280.png"
          }
        />
        <ChildStories
          user="jack"
          postImage={
            "https://images.nightcafe.studio/jobs/eLMfhyyoBblu0ylHxPBR/eLMfhyyoBblu0ylHxPBR--4--tlbhl.jpg?tr=w-1600,c-at_max"
          }
        />
        <ChildStories
          user="elonmusk"
          postImage={
            "https://static.vecteezy.com/system/resources/previews/022/251/852/non_2x/young-woman-digital-ai-generated-portrait-free-photo.jpeg"
          }
        />
        <ChildStories
          user="jeffsd"
          postImage={
            "https://www.researchgate.net/profile/Henrik-Saetra/publication/366943371/figure/fig2/AS:11431281112633472@1673502843018/AI-generated-profile-picture-made-with-the-app-Lensaai_Q320.jpgs"
          }
        />
        <ChildStories
          user="markburger"
          postImage={
            "https://pbs.twimg.com/media/Fw1jTvRWwCcYUHF?format=jpg&name=large"
          }
        />
        <ChildStories
          user="ranschers"
          postImage={
            "https://images.nightcafe.studio/jobs/DYnXJho9sPfSi9rJ7LRz/DYnXJho9sPfSi9rJ7LRz--1--il62v.jpg?tr=w-1600,c-at_max"
          }
        />
        {/* <div className="Story__Navigation">
          <button onClick={scrollLeft}>
            <NavigateNextOutlinedIcon />
          </button>
</div> */}
      </div>
    </div>
  );
};

export default Story;
