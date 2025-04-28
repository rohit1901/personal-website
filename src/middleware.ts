// filepath: c:\Users\u463114\work\personal-website\src\middleware.ts
import { get } from "http";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "@website/lib/auth0";
import { cookies } from 'next/headers'
// TODO: fix errors here
export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const auth0Cookie = cookieStore.get("auth0.is.authenticated")?.value;
  if (auth0Cookie) {
    // pass the cookie to the request headers as Authorization
    request.headers.set("Authorization", `Bearer ${auth0Cookie}`);
    console.log("request.headers", request.headers.get("Authorization"));
    return NextResponse.next();
  }
  // if the cookie is not present, call the getToken function to get a new token
  // and set it in the request headers as Authorization
  const token = await getToken();
  if (token) {
    request.headers.set("Authorization", `Bearer ${token.access_token}`);
    // set the token in the cookie for future requests
    cookieStore.set("auth0.is.authenticated", token.access_token);
    return NextResponse.next();
  }
  // if the token is not present, return a 401 Unauthorized response
  return new Response("Unauthorized", { status: 401 });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};