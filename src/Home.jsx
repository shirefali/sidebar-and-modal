import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();
    console.log(openSidebar);
    return (
        <main>
            <button
                type="button"
                onClick={openSidebar}
                className="sidebar-toggle"
            >
                <FaBars />
            </button>
            <button type="button" onClick={openModal} className="btn">
                show modal
            </button>
        </main>
    );
};

export default Home;
