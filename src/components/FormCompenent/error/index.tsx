// import { Grow, Typography } from "@mui/material";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ReactNode } from "react";
import styles from "./error.module.css";

/**
 * Input validation error message component
 *
 * @param param0
 * @returns
 */

export function Error({ children }: { children: ReactNode }) {
  return (
    // TODO: check for how to create my own Grow component that times out
    <div>
      <div className={styles.container}>
        <div className={styles.icon_container}>
          {/* <ErrorOutlineIcon className={styles.icon} /> */}
        </div>

        <span className={styles.text}>{children}</span>
      </div>
    </div>
  );
}
