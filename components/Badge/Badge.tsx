import React, { FC } from "react"
import { useBadge } from "../../hooks/useBadge"
import styles from "./Badge.module.scss"

export type BadgeColors = "BLUE" | "BLACK"

const Badge: FC<{ content: string; color: BadgeColors }> = ({
  content,
  color = "BLUE",
}) => {
  const badgeStyle = useBadge(color)
  return (
    <mark className={`${styles["badge"]} absolute-center ${badgeStyle}`}>
      {content}
    </mark>
  )
}

export default Badge
