import { motion } from "motion/react";

import PageTitle from "@comp/PageTitle";
import "./AboutPage.scss";

const AboutPage = () => {
    return (
        <>
            <PageTitle title="About Dat Phan" />
            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
                About Dat Phan
            </motion.h1>
            <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }}>
                An IT student from University of Science, VNUHCM
                <br />
                Based in HCMC
            </motion.p>
            <motion.h3 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }}>
                Dat Phan on <span className="highlight">Socials</span>
            </motion.h3>
            <ul>
                <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}>
                    <a href="https://www.facebook.com/profile.php?id=100011347858353" target="_blank">
                        Facebook
                    </a>
                </motion.li>
                <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }}>
                    <a href="https://www.linkedin.com/in/pdqdat/" target="_blank">
                        LinkedIn
                    </a>
                </motion.li>
                <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.0 }}>
                    <a href="https://github.com/pdqdat/" target="_blank">
                        Github
                    </a>
                </motion.li>
            </ul>
        </>
    );
};

export default AboutPage;
