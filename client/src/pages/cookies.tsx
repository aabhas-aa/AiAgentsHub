import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export default function Cookies() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Cookies Policy</h1>

          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-purple">
            <p>
              This Cookies Policy explains what cookies are and how AI Agents Hub uses them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use, and the information we collect using cookies and how that information is used. You should also know how to control your cookie preferences.
            </p>
            
            <p>
              For further information on how we use, store, and keep your personal data secure, see our <a href="/privacy">Privacy Policy</a>.
            </p>
            
            <h2>What Are Cookies</h2>
            
            <p>
              Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
            </p>
            
            <h2>How We Use Cookies</h2>
            
            <p>
              As most of the online services, our website uses cookies for various purposes. The main ones are:
            </p>
            
            <ul>
              <li>
                <strong>Essential cookies:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They don't collect or store any personal information.
              </li>
              <li>
                <strong>Statistics cookies:</strong> These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit, etc. These data help us understand and analyze how well the website performs and where it needs improvement.
              </li>
              <li>
                <strong>Functional cookies:</strong> These cookies help to enhance the functionality and personalization on our website, based on your usage. They may be set by us or by third-party providers whose services we have added to our pages.
              </li>
              <li>
                <strong>Marketing cookies:</strong> These cookies track your browsing habits to enable us to show advertising which is more likely to be of interest to you. They also limit the number of times you see an advertisement and help us measure the effectiveness of our advertising campaigns.
              </li>
            </ul>
            
            <h2>Types of Cookies We Use</h2>
            
            <h3>Necessary</h3>
            <p>
              Necessary cookies are essential to the proper functioning of the website and cannot be disabled. They typically include session cookies for user authentication and security.
            </p>
            
            <h3>Preferences</h3>
            <p>
              Preference cookies enable the website to remember information that changes the way the website behaves or looks, like your preferred language or the region you are in.
            </p>
            
            <h3>Analytics and Performance</h3>
            <p>
              Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
            </p>
            
            <h3>Advertising</h3>
            <p>
              Advertising cookies are used to make advertising messages more relevant to you. They help us display targeted advertisements and prevent the same ad from appearing too many times.
            </p>
            
            <h2>Your Cookie Preferences</h2>
            
            <p>
              You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You can do this through your browser settings on each browser and device that you use. Since each browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
            </p>
            
            <p>
              If you turn cookies off, some features will be disabled. Some of the features that make your site experience more efficient may not function properly.
            </p>
            
            <h2>Third-Party Cookies</h2>
            
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
            </p>
            
            <h2>Changes to Our Cookie Policy</h2>
            
            <p>
              We reserve the right to make changes to this Cookie Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Cookie Policy. Any changes or modifications will be effective immediately upon posting the updated Cookie Policy on the Site, and you waive the right to receive specific notice of each such change or modification.
            </p>
            
            <p>
              You are encouraged to periodically review this Cookie Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Cookie Policy by your continued use of the Site after the date such revised Cookie Policy is posted.
            </p>
            
            <h2>Contact Us</h2>
            
            <p>
              If you have any further questions or comments about our Cookie Policy, please contact us at:
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