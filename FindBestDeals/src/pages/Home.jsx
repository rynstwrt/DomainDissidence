import "./Home.css";
import { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


export default function Home() {
    const [particlesInit, setParticlesInit] = useState(false);


    useEffect(() => {
        initParticlesEngine(async (engine) => {
           await loadSlim(engine);
        }).then(() => setParticlesInit(true));
    }, []);


    const particlesLoaded = (container) => {
        console.log(container);
    }

    // const options = useMemo(
    //     () => ({
    //         fpsLimit: 120,
    //         interactivity: {
    //             events: {
    //                 onClick: {
    //                     enable: true,
    //                     mode: "push",
    //                 },
    //                 onHover: {
    //                     enable: true,
    //                     mode: "repulse",
    //                 },
    //             },
    //             modes: {
    //                 push: {
    //                     quantity: 4,
    //                 },
    //                 repulse: {
    //                     distance: 200,
    //                     duration: 0.4,
    //                 },
    //             },
    //         },
    //         particles: {
    //             color: {
    //                 // value: "#FF0000",
    //                 value: "#FFF",
    //             },
    //             links: {
    //                 color: "#FFF",
    //                 // color: "#FF0000",
    //                 distance: 150,
    //                 enable: true,
    //                 opacity: 0.5,
    //                 width: 1,
    //             },
    //             move: {
    //                 direction: "none",
    //                 enable: true,
    //                 outModes: {
    //                     default: "bounce",
    //                 },
    //                 random: false,
    //                 speed: 6,
    //                 straight: false,
    //             },
    //             number: {
    //                 density: {
    //                     enable: true,
    //                 },
    //                 value: 80,
    //             },
    //             opacity: {
    //                 value: 0.5,
    //             },
    //             shape: {
    //                 type: "circle",
    //             },
    //             size: {
    //                 value: { min: 1, max: 5 },
    //             },
    //         },
    //         detectRetina: true,
    //     }),
    //     [],
    // );

    const particleOptions = useMemo(() => ({
        particles: {
            color: {
                value: "#FFF"
            },
            shape: {
                type: "circle",
                polygon: {
                    nb_sides: 5
                },
            },
            number: {
                density: {
                    enable: true,
                },
                value: 80,
            },
            size: {
                value: { min: 1, max: 5 },
            },
            move: {
                enable: true,
                speed: 1,
                // direction: "up",
                // straight: true,
                // sync: true,
            }
        },
        detectRetina: true
    }), []);


    return (
        <main>
            <div id={"background"}></div>

            {particlesInit &&
                <Particles id={"landing-particles"}
                           options={particleOptions}
                           particlesLoaded={particlesLoaded} />
            }

            <div id={"landing-content"}>
                <div id={"landing-text"}>
                    <h1>FindBestDeals</h1>
                    <p>Find the best deals for your favorite brands!</p>
                </div>

                <div id={"landing-buttons"}>
                    <button>Check Deals</button>
                </div>
            </div>
        </main>
    );
}