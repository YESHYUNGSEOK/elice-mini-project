import { NextRequest } from "next/server";
import axios from "axios";

const eliceApiUrl = process.env.ELICE_API_URL as string;

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const offset = searchParams.get("offset");
  const count = searchParams.get("count");

  const response = await axios.get(eliceApiUrl, {
    params: {
      count,
      offset,
    },
  });
  return Response.json(response.data);
}
