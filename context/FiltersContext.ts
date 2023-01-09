import { createContext, Dispatch } from "react"
import { FilterTagsActions } from "../pages"

type FiltersContext = Dispatch<FilterTagsActions>

// Create a context
export const FiltersContext = createContext<FiltersContext>(() => {})
