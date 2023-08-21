import "./Timeline.css";
import Post from "./Post/Post";
import { useData } from "../DataProvider/Data";

const Timeline = () => {
  const { data } = useData();

  return (
    <div className="Post__Timeline">
      <div className="Post">
        {data.map((post) => (
          <Post
            user={post.user}
            postImage={post.postImage}
            likes={post.likes}
            caption={post.caption}
            postTime={post.postTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
