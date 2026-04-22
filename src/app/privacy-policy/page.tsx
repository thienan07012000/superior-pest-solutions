import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Superior Pest Solutions',
  description: 'Privacy Policy describing how Superior Pest Solutions collects, uses, and protects your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Decorative background elements matching the site's premium design */}
      <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-[var(--brand-red)]/5 rounded-bl-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 left-0 w-1/4 h-[400px] bg-black/5 rounded-r-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 max-w-[1600px] mx-auto z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--brand-red)]/10 text-[var(--brand-red)] mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Privacy <span className="text-[var(--brand-red)]">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            How We Protect Your Data
          </p>
          <p className="text-sm text-black font-medium">
            Effective Date: 25 June 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-32 px-6 lg:px-12 max-w-[1600px] mx-auto relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-black/40">
          <div className="prose prose-lg max-w-none text-foreground/80 prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[var(--brand-red)] prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed">
            <p className="text-xl font-medium text-foreground mb-10">
              This privacy policy describes how your personal information is collected, used, and shared when you visit <Link href="/" className="text-[var(--brand-red)] underline">https://superiorpestsolutionsnwa.com</Link>.
            </p>

            <h2 className="text-2xl mt-12 mb-6 border-b border-black/5 pb-4">Personal Information We Collect</h2>
            <p>
              When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            </p>
            <p>
              Additionally, as you browse the site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the site, and information about how you interact with the site. We refer to this automatically-collected information as "Device Information".
            </p>

            <p className="font-semibold text-foreground mt-8">We collect Device Information using the following technologies:</p>
            <ul className="list-disc pl-6 space-y-4 mb-10 mt-4">
              <li>
                <strong>"Cookies"</strong> are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">http://www.allaboutcookies.org</a>.
              </li>
              <li>
                <strong>"Log files"</strong> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
              </li>
              <li>
                <strong>"Web beacons"</strong>, <strong>"tags"</strong>, and <strong>"pixels"</strong> are electronic files used to record information about how you browse the Site.
              </li>
            </ul>

            <h2 className="text-2xl mt-12 mb-6 border-b border-black/5 pb-4">How Do We Use Your Personal Information?</h2>
            <p>
              We use your personal information generally to fulfill any requests placed through the site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use your personal information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 mt-4">
              <li>Communicate with you</li>
              <li>Screen our orders for potential risk or fraud</li>
              <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
            </ul>
            <p>
              We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
            </p>

            <h2 className="text-2xl mt-12 mb-6 border-b border-black/5 pb-4">Sharing Your Personal Information</h2>
            <p>
              We may transfer your personal information to an affiliate, a subsidiary or a third party in the event of any reorganization, merger, acquisition or sale, joint venture, assignment, transfer or other disposition of all or any portion of our business, assets or stock, including, without limitation, in connection with any bankruptcy or similar proceeding.
            </p>
            <p>
              We also use Google Analytics to help us understand how our customers use the site — you can read more about how Google uses your personal information here: <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer">https://www.google.com/intl/en/policies/privacy/</a>. You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.
            </p>
            <p>
              Finally, we may also share your personal information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful requests for information we receive, or to otherwise protect our rights.
            </p>

            <h2 className="text-2xl mt-12 mb-6 border-b border-black/5 pb-4">Do Not Track</h2>
            <p>
              Please note that we do not alter our site&apos;s data collection and use practices when we see a Do Not Track signal from your browser.
            </p>

            <h2 className="text-2xl mt-12 mb-6 border-b border-black/5 pb-4">Data Retention</h2>
            <p>
              We will maintain your personal information for our records unless and until you ask us to delete this information.
            </p>

            <h2 className="text-2xl mt-12 mb-6 border-b border-black/5 pb-4">Changes</h2>
            <p>
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
            </p>

            <h2 className="text-2xl mt-12 mb-6 border-b border-black/5 pb-4">What Rights You Have Over Your Data</h2>
            <p>
              You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
            </p>

            <h2 className="text-2xl mt-12 mb-6 border-b border-black/5 pb-4">Where We Send Your Data</h2>
            <p>
              Visitor comments may be checked through an automated spam detection service.
            </p>

            <h2 className="text-2xl mt-12 mb-6 border-b border-black/5 pb-4">Contact Us / Questions?</h2>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:dalton_stanley@hotmail.com">dalton_stanley@hotmail.com</a>
            </p>

            {/* Back to Home Link */}
            <div className="mt-16 pt-8 border-t border-black/5">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-[var(--brand-red)] font-medium transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
