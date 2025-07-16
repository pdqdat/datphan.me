// import styles from "./Button.module.scss";

// const Button = ({ children }) => {
//     return <button className={styles.btn}>{children}</button>;
// };

// export default Button;
import { forwardRef } from "react";
import styles from "./Button.module.scss";

const Button = forwardRef(({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const combinedClassName = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(" ");

    return <button className={combinedClassName} ref={ref} {...props} />;
});

Button.displayName = "Button";

export default Button;
