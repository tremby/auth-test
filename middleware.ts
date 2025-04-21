// middleware.ts
// This file is used to configure NextAuth.js middleware
// and protect routes in the application.

import authConfig from "./auth.config";
import NextAuth from "next-auth";

export const { auth: middleware } = NextAuth(authConfig);
