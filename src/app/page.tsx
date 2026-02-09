import { redirect } from "next/navigation";

import { defaultLocale } from "@/i18n/config";

// This page only exists for Next.js routing purposes
// The middleware will handle redirecting to the correct locale
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
