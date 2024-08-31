import type { Metadata } from "next";

import { SimpleLayout } from "@/components/SimpleLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | azdanov.dev",
  description:
    "Privacy Policy for https://www.azdanov.dev. Learn about our data collection, usage, and protection practices.",
};

export default function PrivacyPolicy() {
  return (
    <SimpleLayout
      title="Privacy Policy"
      intro="Learn about our policies regarding the collection, use, and disclosure of information we receive from users of our site."
    >
      <article className="prose dark:prose-invert">
        <p>
          <time dateTime="2024-08-31">Last updated: August 31, 2024</time>
        </p>

        <section>
          <h2 id="introduction">1. Introduction</h2>
          <p>
            Welcome to <a href="https://www.azdanov.dev/">azdanov.dev</a> ("we",
            "us", or "our"). We are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains
            how we collect, use, and share information about you when you visit
            our website.
          </p>
        </section>

        <section>
          <h2 id="information-collected">2. Information We Collect</h2>
          <p>
            We use Vercel Web Analytics and Vercel Speed Insights to collect
            anonymous usage and performance data. These services do not use
            cookies and do not collect any personal information. The data
            collected includes:
          </p>
          <ul>
            <li>Pages visited</li>
            <li>Referring website</li>
            <li>Device information</li>
            <li>Browser information</li>
            <li>Network speed</li>
            <li>Geographic location (country level only)</li>
            <li>Website performance metrics</li>
          </ul>
        </section>

        <section>
          <h2 id="information-usage">3. How We Use Your Information</h2>
          <p>
            The information collected is used solely for the purpose of
            analyzing website traffic, improving user experience, and optimizing
            website performance. We do not sell or share this information with
            third parties.
          </p>
        </section>

        <section>
          <h2 id="data-storage">4. Data Storage and Security</h2>
          <p>
            All data collected is anonymized and stored securely by Vercel. We
            do not have access to any personally identifiable information
            through these analytics and performance monitoring services. Please
            refer to the{" "}
            <a href="https://vercel.com/docs/analytics/privacy-policy">
              Vercel Web Analytics Privacy & Compliance
            </a>{" "}
            and{" "}
            <a href="https://vercel.com/docs/speed-insights/privacy-policy">
              Vercel Speed Insights Privacy & Compliance
            </a>{" "}
            for information on how Vercel handles data.
          </p>
        </section>

        <section>
          <h2 id="your-rights">5. Your Rights</h2>
          <p>
            As we do not collect personal data, there is no personal information
            for you to access, change, or delete.
          </p>
        </section>

        <section>
          <h2 id="policy-changes">6. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 id="contact">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at: <a href="mailto:anton@azdanov.dev">anton@azdanov.dev</a>
          </p>
        </section>
      </article>
    </SimpleLayout>
  );
}
