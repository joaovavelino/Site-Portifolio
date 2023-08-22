import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
    <div classname="App">
        <Sidebar />
        <div classname="page">
            <span classname="tags top-tags">&lt;body&gt;</span>

            <Outlet />
            <span classname="tags bottom-tags">
             &lt;/body&gt;
             <br />
             <span classname="bottom-tag-html">&lt;/html&gt;</span>
            </span>
        </div>
    </div>
    )
}

export default Layout