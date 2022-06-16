import {motion} from "framer-motion";

export default function ExpandButton({onClick}) {
    return (
        <motion.button
            whileHover={{
                scale: 1.2,
            }}
            whileFocus={{
                scale: 1.2,
            }}
            style={{
                height: "60px",
                width: "60px",
                background: "none",
                border: "none",
                borderRadius: "200px",
                padding: 0,
                cursor: "pointer",
                marginTop: "16px",
            }}
            onClick={onClick}
        >
            <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="30" cy="30" r="30" fill="black"/>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31 23H37V29.003H41V23V22.0764V19H31V23Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29 37.2007H23V31.1977H19V37.2007V38.1243V41.2007H29V37.2007Z"
                    fill="white"
                />
            </svg>
        </motion.button>
    );
}
