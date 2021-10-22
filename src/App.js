import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Navbar from './Header/Navbar';
import HomeProfile from './Body/HomeProfile';
import Post from './Body/Post';
import Trending from './Body/Trending';
import FeedPosts from './Body/FeedPosts';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div class="container wrapper">
      <div class="row">
          <HomeProfile></HomeProfile>
        <div class="col-md-6">
          <Post></Post>
          <FeedPosts></FeedPosts>
        </div>
        <Trending></Trending>
      </div>
    </div>
    </>
  );
}

export default App;
