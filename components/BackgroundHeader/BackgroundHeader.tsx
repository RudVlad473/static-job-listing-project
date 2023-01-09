import Image from "next/image"
import React from "react"
import styles from "./BackgroundHeader.module.scss"
import breakpoints from "../../styles/abstracts/breakpoints/_breakpoints.module.scss"

const mobileBg = require("../../public/images/bg-header-mobile.svg").default.src

const BackgroundHeader = () => {
  return (
    <picture className={styles["bg-image-wrapper"]}>
      <source
        media={`(max-width: ${breakpoints["small"]})`}
        srcSet={mobileBg}
      />
      <Image
        src={require("../../public/images/bg-header-desktop.svg")}
        alt={"Background header image"}
      />
    </picture>
  )
}

export default BackgroundHeader
