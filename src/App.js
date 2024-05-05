import "./styles/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Detail from "./pages/Detail";
import store from "./redux/stores/store";
import NotFound from "./pages/NotFound";
import Community from "./pages/Community";
import CommunityUpload from "./pages/CommunityUpload";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/upload" element={<CommunityUpload />} />
            <Route path="/community/post/:postID" element={<PostDetail />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
