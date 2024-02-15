
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PostPage from "./components/PostPage";
        

function App() {
  return (
    <div className="App">

      <Navbar />
      <Home />

      <PostPage/>

    </div>
  );
}

export default App;
