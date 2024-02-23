import { NextRequest } from "next/server";
import { GETCoursesRepository } from "@/app/(apiServer)/v1/courses/(repository)/CoursesRepository";

export async function GETCoursesService(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const offset = parseInt(searchParams.get("offset") as string);
    const count = parseInt(searchParams.get("count") as string);
    const filterConditions = searchParams.get("filter_conditions") as string;

    return await GETCoursesRepository(offset, count, filterConditions);
  } catch (error) {
    throw error;
  }
}
