import { Link } from "react-router-dom";

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

function App() {
   return (
      <div>
         <h1>App</h1>
         <nav>
            <ul>
               {posts.map((post) => {
                  return (
                     <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.text}</Link>
                     </li>
                  );
               })}
            </ul>
         </nav>
      </div>
   );
}
export default App;
