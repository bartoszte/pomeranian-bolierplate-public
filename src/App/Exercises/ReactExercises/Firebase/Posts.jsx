import { useEffect, useState } from 'react';
import { db } from '../../../Firebase/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getAllPosts = async (callbac) => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const data = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      data.push(doc.data());
    });
    console.log(data, 'data');
    setPosts(data);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <h2>posts...</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            {post.title}, {post.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
