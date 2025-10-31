import { Outlet, NavLink } from "react-router";


export default function Layout() {
    return (
        <>
            <header>
                <NavLink id="logo" to={"/"} end>
                    <img src={"logo/logo-remake2.png"} alt={"FindBestDeals logo"} />
                </NavLink>

                <nav>
                    <NavLink to={"/"} end>Home</NavLink>
                    <NavLink to={"/deals"} end>Deals</NavLink>
                    <NavLink to={"/contact"} end>Contact</NavLink>
                </nav>
            </header>

            <Outlet />
        </>
    );
}