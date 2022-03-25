import { Layout, Menu } from 'antd';
import './App.css';
import './test.css'
import { Route, Routes } from 'react-router-dom';
import HeaderLayout from './components/header/HeaderLayout';
import FooterLayout from './components/footer/FooterLayout';
import Countries from './pages/countries/Countries';
import Home from './pages/home/Home';
import Pricing from './pages/pricing/Pricing';
import Lists from './pages/lists/Lists';
import Features from './pages/features/Features';
import Misc from './pages/misc/Misc';
import Blog from './pages/blog/Blog';
import BlogSingle from './pages/blog/BlogSingle';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderLayout />
        <Content>
          <Routes>
            <Route path="/" exact element={<Countries />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/pricing" exact element={<Pricing />} />
            <Route path="/lists" exact element={<Lists />} />
            <Route path="/features" exact element={<Features />} />
            <Route path="/blogs" exact element={<Blog />} />
            <Route path="/misc" exact element={<Misc />} />
            <Route path="/blog-single" exact element={<BlogSingle />} />
            <Route>404 Not Found</Route>
          </Routes>
        </Content>
        <FooterLayout />
      </Layout>
    </div >
  );
}

export default App;
