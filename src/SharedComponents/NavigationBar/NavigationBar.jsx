import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className="navbar justify-between bg-base-100 border-b border-red-600">
            <div className="md:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn content-center md:inline-flex hidden btn-ghost normal-case text-xl"><img className="w-14 h-14" src="https://i.ibb.co/MVgkP8Z/400129-removebg-preview.png" />Way of the Dragon</Link>
            </div>
            <Link to="/" className="btn content-center btn-ghost inline-flex md:hidden navbar-center normal-case text-xl"><img className="w-14 h-14" src="https://i.ibb.co/MVgkP8Z/400129-removebg-preview.png" /></Link>
            <div className="md:navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="md:navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavigationBar;