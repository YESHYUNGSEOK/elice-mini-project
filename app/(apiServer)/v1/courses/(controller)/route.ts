import { NextRequest } from "next/server";
import { GETCoursesService } from "@/app/(apiServer)/v1/courses/(service)/CoursesService";

export async function GET(req: NextRequest) {
  try {
    const params = req.nextUrl.searchParams;
    return Response.json(await GETCoursesService(params));
  } catch (error) {
    throw error;
  }
}
