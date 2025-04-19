// auth.config.ts
// This file is responsible for configuring authentication providers and settings.

import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default { providers: [Google] } satisfies NextAuthConfig;
