import { NextRequest } from "next/server";
import axios from "axios";
import { OrgCourseListResponses } from "@/common/interfaces/course.interface";

const eliceApiUrl = process.env.ELICE_API_URL as string;

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const offset = searchParams.get("offset");
  const count = searchParams.get("count");
  const filterConditions = JSON.parse(
    searchParams.get("filter_conditions") as string
  );
  const title = filterConditions["$and"][0].title;
  const chips = filterConditions["$and"][1]["$or"];

  try {
    const response: { data: OrgCourseListResponses } = await axios.get(
      eliceApiUrl,
      {
        params: {
          filter_conditions: JSON.stringify({
            $and: [{ title: `%${title}%` }, { $or: [...chips] }],
          }),
          offset: offset,
          count: count,
        },
      }
    );
    return Response.json(response.data);
  } catch (error) {
    throw error;
  }
}
