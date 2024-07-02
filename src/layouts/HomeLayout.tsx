// import Sidebar from './Sidebar';
import Home from '../components/Home';

const HomeLayout = () => {
    return (
        <div className="flex-container">
            <div className="sidebar">
                {/* <Sidebar /> */}
            </div>
            <div className="h-100">
                <div className="h-100 pt-3 px-4 content">
                    <Home />
                </div>
            </div>
        </div>
    );
}

export default HomeLayout;
