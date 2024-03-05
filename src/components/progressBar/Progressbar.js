import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress === 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 1000);
      router.events.on("routeChangeComplete", () => {
        clearInterval(interval);
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

const ProgressComp = () => {
  return (
    <div>
      <ProgressBar />
    </div>
  );
};

export default ProgressComp;
