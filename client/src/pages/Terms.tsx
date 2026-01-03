import { motion } from "framer-motion";
import { FileText, Mail, Globe } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Last updated: January 2026
          </p>
        </motion.div>

        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-lg p-6 mb-6">
            <p className="text-muted-foreground text-sm">
              By accessing or using GrowithCP services, you agree to the following Terms & Conditions. These terms ensure transparency, fair usage, and smooth project delivery for both GrowithCP and the client.
            </p>
          </div>

          <Section title="1. Services Offered">
            <p>GrowithCP provides done-for-you website design and development services based on the plan selected by the client.</p>
            <p>All projects follow a fixed-scope delivery model, where scope, features, pages, and structure are finalized before work begins. Any request outside the agreed scope is treated as an add-on service.</p>
          </Section>

          <Section title="2. Pricing & Payments">
            <ul>
              <li>All prices are one-time charges, unless explicitly stated.</li>
              <li>Full payment must be completed before project initiation.</li>
              <li>Add-on services are charged separately and executed only after client confirmation.</li>
              <li>Affordable pricing is maintained by strictly following scope, revision, and workflow limits.</li>
            </ul>
          </Section>

          <Section title="3. Revisions Policy">
            <p>Each plan includes a limited number of revisions:</p>
            <ul>
              <li>Starter Plan: 1 revision</li>
              <li>Growth Plan: 2 revisions</li>
              <li>Pro Business Plan: 3 revisions</li>
              <li>Elite AI Plan: Flexible minor revisions</li>
            </ul>
            <p><strong>Revision definition:</strong> A revision means all requested changes shared together in one message or document.</p>
            <p>Additional revisions or changes are billed as per the pricing mentioned on the website.</p>
          </Section>

          <Section title="4. What Is Not Considered a Revision">
            <p>The following are not included as revisions:</p>
            <ul>
              <li>Adding new pages after approval</li>
              <li>Changing the overall design direction</li>
              <li>New features or integrations not listed in the plan</li>
              <li>Major content rewrites after approval</li>
              <li>Competitor-style redesign requests</li>
            </ul>
            <p>These are treated as new scope and may involve additional charges.</p>
          </Section>

          <Section title="5. Content, Assets & Client Responsibility">
            <ul>
              <li>Clients are responsible for providing accurate content, images, logos, and branding materials.</li>
              <li>Once content and layout are approved, further changes are considered revisions or add-ons.</li>
              <li>GrowithCP is not responsible for errors, legal issues, or compliance related to client-provided content.</li>
            </ul>
          </Section>

          <Section title="6. Data Security & Confidentiality">
            <p>GrowithCP respects client data and confidentiality:</p>
            <ul>
              <li>Client data is used only for project execution</li>
              <li>Shared credentials and files are handled securely</li>
              <li>Client data is never sold or shared without consent</li>
            </ul>
            <p>After project handover, clients are responsible for managing and securing their own credentials and data.</p>
          </Section>

          <Section title="7. Hosting, Domain & Third-Party Services">
            <ul>
              <li>Hosting, domain registration, email services, and third-party tools are NOT included, unless explicitly mentioned.</li>
              <li>GrowithCP is not responsible for downtime, data loss, security issues, or failures caused by hosting providers, plugins, APIs, or external platforms.</li>
              <li>Support for third-party services may be provided as guidance or a paid add-on.</li>
            </ul>
          </Section>

          <Section title="8. Delivery Timelines">
            <p>Delivery timelines are estimates and depend on:</p>
            <ul>
              <li>Timely client feedback</li>
              <li>Approval speed</li>
              <li>Scope clarity</li>
            </ul>
            <p>Delays caused by late responses or requirement changes are not the responsibility of GrowithCP.</p>
          </Section>

          <Section title="9. Add-On Services">
            <p>Optional services such as:</p>
            <ul>
              <li>Extra revisions</li>
              <li>New pages</li>
              <li>Feature additions</li>
              <li>Urgent updates</li>
            </ul>
            <p>are billed separately at affordable rates and confirmed before execution.</p>
          </Section>

          <Section title="10. Product Pricing & Commercial Responsibility">
            <ul>
              <li>GrowithCP does not manage or control product or service pricing displayed on client websites.</li>
              <li>All pricing, offers, taxes, and product details are the sole responsibility of the client.</li>
              <li>GrowithCP is not liable for incorrect pricing, disputes, or business losses arising from displayed information.</li>
            </ul>
          </Section>

          <Section title="11. Payments, Commissions & Transactions">
            <ul>
              <li>GrowithCP does not collect commissions from product sales unless explicitly agreed in writing.</li>
              <li>Payment gateways and transaction processing are handled by third-party services.</li>
            </ul>
            <p>GrowithCP is not responsible for:</p>
            <ul>
              <li>Payment failures</li>
              <li>Chargebacks</li>
              <li>Refund disputes</li>
              <li>Commission issues</li>
              <li>Gateway downtime</li>
            </ul>
            <p>Integration support is limited to technical setup only.</p>
          </Section>

          <Section title="12. E-Commerce & Order Handling Disclaimer">
            <p>If the website includes e-commerce or product listings:</p>
            <ul>
              <li>Order processing, delivery, returns, refunds, and customer support are handled entirely by the client</li>
              <li>GrowithCP is not a seller, reseller, or intermediary</li>
              <li>Legal compliance (GST, invoices, consumer laws) is the client's responsibility</li>
            </ul>
          </Section>

          <Section title="13. No Sales or Revenue Guarantee">
            <p>GrowithCP does not guarantee:</p>
            <ul>
              <li>Sales</li>
              <li>Leads</li>
              <li>Traffic</li>
              <li>Conversions</li>
              <li>Revenue growth</li>
            </ul>
            <p>Website performance depends on market conditions, pricing, marketing, and business execution by the client.</p>
          </Section>

          <Section title="14. Client Communication & Conduct">
            <p>GrowithCP maintains a professional and respectful work environment.</p>
            <p>The following behavior is strictly not tolerated:</p>
            <ul>
              <li>Harassment or abusive language</li>
              <li>Threats or intimidation</li>
              <li>Repeated pressure beyond agreed scope</li>
              <li>Unprofessional conduct via calls, messages, or emails</li>
            </ul>
            <p>GrowithCP reserves the right to pause or terminate services without refund in such cases.</p>
          </Section>

          <Section title="15. Refund Policy">
            <ul>
              <li>Payments are non-refundable once work has started.</li>
              <li>No refunds for completed or partially completed projects.</li>
              <li>Client-initiated cancellations do not qualify for refunds.</li>
            </ul>
          </Section>

          <Section title="16. Ownership & Portfolio Usage">
            <ul>
              <li>Website ownership is transferred to the client after full payment.</li>
              <li>GrowithCP may showcase completed projects in its portfolio unless requested otherwise in writing.</li>
            </ul>
          </Section>

          <Section title="17. Limitation of Liability">
            <p>GrowithCP is not liable for:</p>
            <ul>
              <li>Business or revenue losses</li>
              <li>SEO rankings or performance outcomes</li>
              <li>Legal compliance of client content</li>
              <li>Third-party service failures</li>
            </ul>
            <p>GrowithCP provides technical services only.</p>
          </Section>

          <Section title="18. Updates to Terms">
            <p>GrowithCP may update these Terms & Conditions at any time. Continued use of services implies acceptance of updated terms.</p>
          </Section>

          <Section title="19. Contact Information">
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:support@growithcp.com" 
                className="flex items-center gap-2 text-primary hover:underline"
                data-testid="link-terms-email"
              >
                <Mail className="w-4 h-4" />
                support@growithcp.com
              </a>
              <a 
                href="https://growithcp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
                data-testid="link-terms-website"
              >
                <Globe className="w-4 h-4" />
                https://growithcp.com
              </a>
            </div>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-lg p-6 mb-4">
      <h2 className="text-lg font-semibold text-foreground mb-4">{title}</h2>
      <div className="text-sm text-muted-foreground space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-foreground">
        {children}
      </div>
    </div>
  );
}
