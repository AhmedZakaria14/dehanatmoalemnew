import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'معلم دهانات في الرياض',
  description: 'نقدم أحدث وأرقى خدمات الدهانات والديكورات في الرياض. جودة عالية وأسعار منافسة.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo bg-slate-50 text-slate-900" suppressHydrationWarning>{children}</body>
    </html>
  );
}
