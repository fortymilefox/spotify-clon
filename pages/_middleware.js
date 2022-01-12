import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //token iwll exist if user is logged in
  const token = await getToken ({req, 
    secret: process.env.JWT_SECRET,
    secureCookie: process.env.NEXTAUTH_URL?.startsWith("https://") ??
    !!process.env.VERCEL_URL,
  });

  const {pathname} = req.nextUrl
  //allow requests if true:
  //-> a request for next-auth session & provider fetching
  //-> token exists

  if(pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  //redirect to login if no token & request a protected route
  if(!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
  }
}