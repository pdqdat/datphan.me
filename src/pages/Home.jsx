import { motion } from "motion/react";

import styles from "./Home.module.scss";
import PageTitle from "@comp/PageTitle";

const App = () => {
    return (
        <>
            <PageTitle title="Dat Phan" />
            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
                Dat Phan
            </motion.h1>
            <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }}>
                Hello there! I&apos;m Dat Phan, an IT student from the{" "}
                <span className={styles.highlight}>University of Science, VNUHCM</span>.
            </motion.p>
            <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }}>
                I&apos;m passionate about end-to-end development and creating user-friendly websites.
            </motion.p>
            <motion.h3 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}>
                Find me on <span className={styles.highlight}>socials</span>
            </motion.h3>
            <ul>
                <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.0 }}>
                    <a href="https://www.facebook.com/pdqdat/" target="_blank">
                        Facebook
                    </a>
                </motion.li>
                <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1 }}>
                    <a href="https://www.linkedin.com/in/pdqdat/" target="_blank">
                        LinkedIn
                    </a>
                </motion.li>
                <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }}>
                    <a href="https://github.com/pdqdat/" target="_blank">
                        Github
                    </a>
                </motion.li>
            </ul>
            <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4 }}
                style={{ marginTop: "3rem" }}
            >
                I'm still working on this <span className={styles.highlight}>portfolio</span>, so stay tuned for more{" "}
                <span className={styles.highlight}>updates</span>!
            </motion.h3>
        </>
    );
};

export default App;
