import "../styles/globals.css";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {useEffect, useState} from "react";
import ExpandButton from "../components/ExpandButton";
import CloseButton from "../components/CloseButton";
import coffee from "../public/coffee.jpeg";

function MyApp({Component, pageProps, router}) {
    const [animate, setAnimate] = useState("initial");

    useEffect(() => {
        setAnimate(/oslo/.test(router.pathname) ? "open" : "initial");
        const handleRouteChange = (url) => {
            setAnimate(/oslo/.test(url) ? "open" : "initial");
        };
        router.events.on("routeChangeStart", handleRouteChange);
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router.pathname, router.events]);

    return (
        <motion.div animate={animate} initial={"initial"}>
            <div
                style={{
                    filter: "drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.35))",
                    position: "absolute",
                    inset: "0",
                    overflow: "hidden",
                }}
            >
                <motion.div
                    variants={{
                        initial: {
                            clipPath: "inset(15% 10% 45% 10% round 8px)",
                            scale: 1,
                        },
                        open: {
                            clipPath: "inset(5% 0% 0% 0%)",
                            scale: 1.2,
                        },
                    }}
                    style={{
                        position: "absolute",
                        inset: "0",
                        zIndex: 2,
                    }}
                >
                    <Image
                        priority
                        placeholder="blur"
                        src={coffee}
                        layout="fill"
                        objectFit="cover"
                        style={{filter: "brightness(0.7)"}}
                        alt="coffee bar"
                    />
                </motion.div>
            </div>
            <AnimatePresence>
                {animate === "initial" ? (
                    <div
                        style={{
                            bottom: "8%",
                            position: "absolute",
                            left: 0,
                            right: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            color: "#1f1f1f",
                        }}
                    >
                        <h1 key={"title"}>Lost in Oslo</h1>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Maecenas sed
                            diam eget risus varius blandit sit amet non magna.
                        </p>
                        <ExpandButton onClick={() => router.push("/oslo")}/>
                    </div>
                ) : (
                    <>
                        <motion.h1
                            className="title"
                            style={{
                                position: "absolute",
                                color: "white",
                                bottom: "10%",
                                left: "9%",
                                lineHeight: 0.9,
                                opacity: 0,
                                margin: 0,
                            }}
                            key={"white-title"}
                            variants={{
                                open: {
                                    y: -70,
                                    opacity: 0.9,
                                    transition: {
                                        delay: 0.1,
                                    },
                                },
                            }}
                        >
                            Lost in Oslo
                        </motion.h1>
                        <motion.span
                            className={"byline"}
                            style={{
                                position: "absolute",
                                color: "white",
                                bottom: "10%",
                                left: "9%",
                                opacity: 0,
                            }}
                            key={"byline"}
                            variants={{
                                open: {
                                    y: -20,
                                    opacity: 0.7,
                                    transition: {
                                        delay: 0.2,
                                    },
                                },
                            }}
                        >
                            By Simen Skogen
                        </motion.span>
                        <CloseButton
                            style={{position: "absolute", top: "30px", left: "30px"}}
                            onClick={() => router.push("/")}
                        />
                    </>
                )}
            </AnimatePresence>
            <Component {...pageProps} />
        </motion.div>
    );
}

export default MyApp;
