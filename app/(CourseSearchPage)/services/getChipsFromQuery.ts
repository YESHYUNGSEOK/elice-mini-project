import { COURSE_FILTER } from "@/common/constants/filter.constant";
import { ReadonlyURLSearchParams } from "next/navigation";

export const getChipsFromQuery = (searchParams: ReadonlyURLSearchParams) => {
  const newChips = [];
  for (const chips of COURSE_FILTER) {
    for (const chip of chips.items) {
      if (searchParams.getAll(chip.query_key).includes(chip.query_value)) {
        newChips.push(chip);
      }
    }
  }
  return newChips;
};
