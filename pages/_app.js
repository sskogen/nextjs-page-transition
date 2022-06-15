import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import ExpandButton from "../components/ExpandButton";
import CloseButton from "../components/CloseButton";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [animate, setAnimate] = useState("hidden");

  useEffect(() => {
    setAnimate(/oslo/.test(router.pathname) ? "visible" : "hidden");
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setAnimate(/oslo/.test(url) ? "visible" : "hidden");
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <motion.div animate={animate} initial={"hidden"}>
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
            hidden: {
              clipPath: "inset(15% 10% 45% 10% round 8px)",
              scale: 1,
            },
            visible: {
              clipPath: "inset(5% 0% 0% 0%)",
              scale: 1.2,
            },
          }}
          style={{
            position: "absolute",
            inset: "0",
            borderRadius: "5px",
            margin: "0 auto",
          }}
        >
          <Image
            priority
            src="/coffee.jpg"
            layout="fill"
            objectFit="cover"
            style={{ filter: "brightness(0.7)" }}
          />
        </motion.div>
      </div>
      {router.pathname === "/" ? (
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
            Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam
            eget risus varius blandit sit amet non magna.
          </p>
          <ExpandButton onClick={() => router.push("/oslo")} />
        </div>
      ) : (
        <CloseButton
          style={{ position: "absolute", top: "30px", left: "30px" }}
          onClick={() => router.push("/")}
        />
      )}
      <AnimatePresence>
        {router.pathname === "/oslo" && (
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
                visible: {
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
                visible: {
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
          </>
        )}
      </AnimatePresence>
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
