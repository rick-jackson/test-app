import { Route, Routes, BrowserRouter } from "react-router-dom";
import PostsPage from "./pages/Posts";
import UsersPage from "./pages/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/user/:userId/posts/" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
