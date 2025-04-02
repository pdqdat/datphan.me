import { motion } from "motion/react";
import { Link } from "react-router";

import "./App.scss";
import PageTitle from "@comp/PageTitle";

const App = () => {
    return (
        <>
            <PageTitle title="Dat Phan" />
            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
                Dat Phan is building his website
            </motion.h1>
            <motion.h3 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }}>
                Stay tuned!
            </motion.h3>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }}>
                <Link to="/about">
                    <motion.button className="btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        About Dat Phan
                    </motion.button>
                </Link>
            </motion.div>
        </>
    );
};

export default App;
