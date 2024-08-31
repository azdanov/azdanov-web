import type { Metadata } from "next";

import { SimpleLayout } from "@/components/SimpleLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | azdanov.dev",
  description:
    "Privacy Policy for https://www.azdanov.dev. Learn about data collection, usage, and protection practices on the website.",
};

export default function PrivacyPolicy() {
  return (
    <SimpleLayout
      title="Privacy Policy"
      intro="I want to be transparent about how I handle information on my website."
    >
      <article className="prose dark:prose-invert">
        <p>
          <time dateTime="2024-08-31">Last updated: August 31, 2024</time>
        </p>

        <section>
          <h2 id="introduction">Hello there!</h2>
          <p>
            I'm Anton, the person behind{" "}
            <a href="https://www.azdanov.dev">azdanov.dev</a>. Your privacy
            matters to me, and I want to explain how I handle information when
            you visit my website.
          </p>
        </section>

        <section>
          <h2 id="information-collected">What is collected</h2>
          <p>
            I use Vercel Web Analytics and Vercel Speed Insights to gather
            anonymous data about website usage and performance. These tools
            don't use cookies or collect personal information. Here's what they
            do track:
          </p>
          <ul>
            <li>Pages you visit</li>
            <li>Where you came from (referring website)</li>
            <li>Your device and browser info</li>
            <li>Your network speed</li>
            <li>Your country (but not specific location)</li>
            <li>How well my website is performing</li>
          </ul>
        </section>

        <section>
          <h2 id="information-usage">How this information is used</h2>
          <p>
            I only use this data to understand website traffic, improve your
            experience, and make my website faster. I don't sell or share this
            with anyone else.
          </p>
        </section>

        <section>
          <h2 id="data-storage">Keeping data safe</h2>
          <p>
            All the data is anonymized and securely stored by Vercel. I can't
            access any information that could identify you personally. For more
            details on how Vercel handles data, check out their{" "}
            <a href="https://vercel.com/docs/analytics/privacy-policy">
              Web Analytics
            </a>{" "}
            and{" "}
            <a href="https://vercel.com/docs/speed-insights/privacy-policy">
              Speed Insights
            </a>{" "}
            privacy policies.
          </p>
        </section>

        <section>
          <h2 id="your-rights">Your rights</h2>
          <p>
            Since I don't collect personal data, there's no personal information
            for you to access, change, or delete. And Vercel doesn't offer any
            functionality to do so either.
          </p>
        </section>

        <section>
          <h2 id="policy-changes">If I change this policy</h2>
          <p>
            I might update this policy sometimes. If I do, I'll post the new
            version here and update the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 id="contact">Questions?</h2>
          <p>
            If you have any questions about how I handle privacy, just write to
            me at <a href="mailto:anton@azdanov.dev">anton@azdanov.dev</a>.
          </p>
        </section>

        <section>
          <h2 id="thanks">Thank you for reading!</h2>
          <p>
            Thanks for taking the time to learn about the privacy policy. I hope
            you enjoy your visit to my website!
          </p>
        </section>
      </article>
    </SimpleLayout>
  );
}
