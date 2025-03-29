import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Service</h1>

          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-purple">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the AI Agents Hub website operated by AI Agents Hub Inc.
            </p>
            
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            
            <p>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            
            <h2>1. Accounts</h2>
            
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
            </p>
            
            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h2>2. Links To Other Web Sites</h2>
            
            <p>
              Our Service may contain links to third-party websites or services that are not owned or controlled by AI Agents Hub.
            </p>
            
            <p>
              AI Agents Hub has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that AI Agents Hub shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>
            
            <p>
              We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
            </p>
            
            <h2>3. Termination</h2>
            
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
            
            <h2>4. Agent Submissions</h2>
            
            <p>
              When you submit an AI agent to our directory, you affirm that you have the right to do so and that you are not infringing on any third party's intellectual property rights.
            </p>
            
            <p>
              AI Agents Hub reserves the right to review, approve, edit, or remove any submissions at our sole discretion.
            </p>
            
            <p>
              By submitting content to our directory, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display the information you provide for the purpose of featuring the agent in our directory.
            </p>
            
            <h2>5. Limitation Of Liability</h2>
            
            <p>
              In no event shall AI Agents Hub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
            
            <h2>6. Governing Law</h2>
            
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
            
            <h2>7. Changes</h2>
            
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
            
            <h2>8. Contact Us</h2>
            
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <ul>
              <li>Email: legal@aiagentshub.com</li>
              <li>Postal Mail: AI Agents Hub Inc., 123 AI Boulevard, San Francisco, CA 94103, USA</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}