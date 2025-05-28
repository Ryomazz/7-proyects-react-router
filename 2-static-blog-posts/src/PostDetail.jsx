import { useParams, Link } from "react-router-dom";

const posts = [
   { text: "Post # 1", id: 1 },
   { text: "Post # 2", id: 2 },
   { text: "Post # 3", id: 3 },
   { text: "Post # 4", id: 4 },
   { text: "Post # 5", id: 5 },
   { text: "Post # 6", id: 6 },
   { text: "Post # 7", id: 7 },
   { text: "Post # 8", id: 8 },
];

function PostDetail() {
   const { id } = useParams();
   const post = posts.find((post) => post.id == id);
   return (
      <div>
         <h1>{post.text} </h1>
         <Link to="/">App</Link>
      </div>
   );
}
export default PostDetail;
