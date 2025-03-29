import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>

          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-purple">
            <p>
              At AI Agents Hub, accessible from aiagentshub.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by AI Agents Hub and how we use it.
            </p>
            
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
            
            <h2>Information We Collect</h2>
            
            <p>
              When you register for an account, we collect personal information which may include:
            </p>
            
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Profile information you choose to provide</li>
            </ul>
            
            <p>
              When you submit an AI agent to our directory, we collect information about the agent including, but not limited to:
            </p>
            
            <ul>
              <li>Agent name</li>
              <li>Description</li>
              <li>Website URL</li>
              <li>Pricing information</li>
              <li>Features and use cases</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            
            <p>
              We use the information we collect in various ways, including to:
            </p>
            
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
            
            <h2>Log Files</h2>
            
            <p>
              AI Agents Hub follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>
            
            <h2>Cookies and Web Beacons</h2>
            
            <p>
              Like any other website, AI Agents Hub uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
            
            <h2>Third Party Privacy Policies</h2>
            
            <p>
              AI Agents Hub's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
            
            <p>
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
            </p>
            
            <h2>Children's Information</h2>
            
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            
            <p>
              AI Agents Hub does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
            
            <h2>Online Privacy Policy Only</h2>
            
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in AI Agents Hub. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>
            
            <h2>Consent</h2>
            
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            
            <p>
              We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
            </p>
            
            <h2>Contact Us</h2>
            
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
            </p>
            
            <ul>
              <li>Email: privacy@aiagentshub.com</li>
              <li>Postal Mail: AI Agents Hub Inc., 123 AI Boulevard, San Francisco, CA 94103, USA</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}