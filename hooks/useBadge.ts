import { BadgeColors } from "./../components/Badge/Badge"
import badgeStyles from "../components/Badge/Badge.module.scss"

const useBadge = (color: BadgeColors): string => {
  const badgeStylesMap: Record<BadgeColors, string> = {
    BLACK: badgeStyles["badge--black"],
    BLUE: badgeStyles["badge--blue"],
  }
  return badgeStylesMap[color]
}

export { useBadge }
