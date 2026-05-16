import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinOps Architect Toolkit — Fernando Azevedo",
  description:
    "AWS cost calculators, RI vs On-Demand, S3 storage class optimizer, Lambda cost estimator and tagging strategy generator.",
  authors: [{ name: "Fernando Francisco Azevedo", url: "https://fernando.moretes.com" }],
  openGraph: {
    title: "FinOps Architect Toolkit",
    description: "AWS cost calculators and FinOps decision support for solution architects.",
    url: "https://finops.moretes.com",
    siteName: "FinOps Architect Toolkit",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
