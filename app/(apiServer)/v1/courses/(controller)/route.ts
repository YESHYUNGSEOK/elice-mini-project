import { NextRequest } from "next/server";
import { GETCoursesService } from "@/app/(apiServer)/v1/courses/(service)/CoursesService";

export async function GET(req: NextRequest) {
  try {
    return Response.json(await GETCoursesService(req));
  } catch (error) {
    throw error;
  }
}
