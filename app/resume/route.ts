import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic'; // Ensures it always redirects to the latest version

export async function GET() {
  const GOOGLE_DOC_ID = process.env.NEXT_PUBLIC_GOOGLE_DOC_RESUME_ID;

  // This magic URL forces Google to export the doc as a PDF
  const pdfUrl = `https://docs.google.com/document/d/${GOOGLE_DOC_ID}/export?format=pdf`;

  redirect(pdfUrl);
}
