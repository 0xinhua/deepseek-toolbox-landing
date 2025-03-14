import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Privacy Policy - DeepSeek Toolbox',
  description: 'Privacy policy for DeepSeek Toolbox - A browser extension enhancing your DeepSeek AI experience',
}

const privacyContentHTML = `
<h1 id="privacypolicy">Privacy Policy</h1>
<p>Last updated: ${new Date().toLocaleDateString()}</p>
<h2 id="summaryintroduction">Summary Introduction</h2>
<p>DeepSeek Toolbox is a browser extension designed to enhance your DeepSeek AI experience. This privacy policy aims to transparently explain how we collect, use, and protect your personal information. We are committed to safeguarding your data security and ensuring users have control over their personal information.</p>
<ul>
<li><strong>We will never sell or share your personal data with anyone.</strong></li>
<li><strong>We will not collect any information beyond what's necessary for extension functionality.</strong></li>
<li><strong>We will not collect any AI platform usage data, including conversations, user data, or copied/pasted content.</strong></li>
<li><strong>We are committed to data minimalism, collecting only the essential information required for our service.</strong></li>
<li><strong>Our browser extension is designed to enhance your DeepSeek AI experience while respecting your privacy.</strong></li>
<li><strong>All your personal information is securely stored and transmitted using modern encryption technologies.</strong></li>
<li><strong>Users always have complete control and the right to know about their personal data.</strong></li>
<li><strong>We promise operational transparency and welcome users to understand how their data is used at any time.</strong></li>
<li><strong>Product-related communications will strictly follow user preferences and never harass users.</strong></li>
<li><strong>We continuously update security protocols to protect users from potential data risks.</strong></li>
</ul>
<h2 id="definitions">Definitions</h2>
<ul>
<li><strong>Service</strong>: Refers to the DeepSeek Toolbox browser extension and website</li>
<li><strong>User</strong>: Individuals using our DeepSeek Toolbox extension</li>
<li><strong>Personal Information</strong>: Data that can identify an individual</li>
<li><strong>DeepSeek</strong>: The AI platform that our toolbox is designed to enhance</li>
</ul>
<h2 id="typesofdatacollected">Types of Data Collected</h2>
<h3 id="browserextensiondata">Browser Extension Data</h3>
<p>Our extension is designed to enhance your DeepSeek AI experience. During usage, we may collect:</p>
<ol>
<li>Basic browser information necessary for extension functionality</li>
<li>Extension interaction data with DeepSeek platform</li>
<li>User preferences and settings of the extension</li>
<li>In the future, we may introduce an account system that collects basic user information (avatar, username, email) through Google/login credentials.</li>
<li>We do not collect any AI platform usage data, including conversations, user data, or copied/pasted content.</li>
</ol>
<h3 id="usagedata">Usage Data</h3>
<p>The usage data we may collect includes:</p>
<ol>
<li>IP address</li>
<li>Browser type and version</li>
<li>Access time</li>
<li>Extension interaction patterns</li>
</ol>
<h2 id="purposeofdatacollection">Purpose of Data Collection</h2>
<p>We collect data solely for the following purposes:</p>
<ol>
<li>Enhancing your DeepSeek AI experience</li>
<li>Providing and improving the extension functionality</li>
<li>Maintaining service quality</li>
<li>Personalizing user experience</li>
</ol>
<h2 id="dataprotectioncommitments">Data Protection Commitments</h2>
<h3 id="nosensitiveinformationcollection">No Sensitive Information Collection</h3>
<ul>
<li>We do not process sensitive personal information</li>
<li>We do not collect any information beyond what's necessary for extension functionality</li>
<li>We do not store your DeepSeek conversation content</li>
</ul>
<h3 id="datasecurity">Data Security</h3>
<ul>
<li>We use industry-standard security measures to protect your data</li>
<li>Your personal information will not be sold or leased to any third party</li>
<li>We will not share your personal information with third parties without your consent</li>
</ul>
<h3 id="browserextensionpermissions">Browser Extension Permissions</h3>
<p>When you use our browser extension:</p>
<ul>
<li>We only request permissions necessary for enhancing your DeepSeek experience</li>
<li>We will not store your sensitive data</li>
<li>We will not access information unrelated to DeepSeek functionality</li>
</ul>
<h2 id="userrights">User Rights</h2>
<p>As a user, you have the right to:</p>
<ol>
<li>View the personal information we collect</li>
<li>Request deletion of your personal information</li>
<li>Disable or remove the extension at any time</li>
<li>Control extension permissions</li>
</ol>
<h2 id="contactus">Contact Us</h2>
<p>If you have any questions about this privacy policy, please contact us through:</p>
<ul>
<li>Website: https://deepseektoolbox.com</li>
<li>Email: support@deepseektoolbox.com</li>
</ul>
<h2 id="policyupdates">Policy Updates</h2>
<p>We may update this privacy policy from time to time. Significant changes will be notified to users via the extension or email.</p>
<p>If you have questions about this Privacy Policy, please contact us at support@deepseektoolbox.com</p>
`

const PrivacyPolicy = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
        <a href="/" className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-[#013DC4] to-[#0129A3] rounded-xl p-1.5">
            <Image
              src="/logo.svg"
              alt="DeepSeek Toolbox Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
          </div>
          <span className="text-xl font-bold text-gray-800">DeepSeek Toolbox</span>
        </a>
      </nav>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <div className="prose prose-slate prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-a:text-[#013DC4] hover:prose-a:text-[#0129A3] max-w-none prose-headings:mb-6 prose-p:mb-4 prose-ul:mb-4 prose-ol:mb-4 prose-li:mb-2 prose-h2:mt-8">
            <div 
              className='markdown-content flex flex-col gap-4'
              dangerouslySetInnerHTML={{
                __html: privacyContentHTML
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
