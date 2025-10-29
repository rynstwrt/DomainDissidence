import { Outlet, NavLink } from "react-router";


export default function Layout() {
    return (
        <>
            <header>
                <NavLink to={"/"} end>
                    {/* <div id={"logo-container"}> */}
                    {/*     <img src={"/logo/logotest2.png"} alt={"FindBestDeals logo"} /> */}
                    {/* </div> */}

                    <img src={"/logo/logotest2.png"} alt={"FindBestDeals logo"} />

                </NavLink>
                {/* <NavLink id={"site-name"} to={"/"} end>FindBestDeals</NavLink> */}
                {/* <h3>FindBestDeals</h3> */}

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