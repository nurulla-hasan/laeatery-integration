
import HomeContainer from '@/components/home-container/HomeContainer';
import Link from 'next/link';

const HelpAndSupport = () => {
  return (
    <div>
      <div className=""></div>
      <HomeContainer>
        <section className="text-[#333333] py-10">
          {/* Main Title */}
          <h1 className="text-center text-3xl font-bold mb-8 text-[#0A0A0A]">Help & Support</h1>
          
          {/* Help Center Introduction */}
          <div className=" mb-10 mx-auto">
            <h2 className="text-[22px] font-semibold mb-4">🙋Help Center</h2>
            <p className="  text-sm leading-relaxed">
              Welcome to the LAEATERY Help Center - your go-to spot for answers, guidance, and assistance. 
              Whether you're having trouble finding a restaurant, exploring features, or just need some quick answers, 
              we're here to help!
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-10 mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold">🔍 Frequently Asked Questions</h2>
            </div>
            <p className="  text-sm mb-4">
              Before reaching out, visit our FAQ section for quick answers to commonly asked questions, including:
            </p>
            <ul className="list-disc pl-6 space-y-2   text-sm mb-4">
              <li>How do I search for restaurants by vibe or cuisine?</li>
              <li>Do you offer restaurant reservations?</li>
              <li>How are trending restaurants selected?</li>
              <li>Do I need an account to use LAEATERY?</li>
            </ul>
            <p className="">
              Check our <Link href="/FAQs" className="text-blue-700 underline">FAQ page</Link> for more details.
            </p>
          </div>

          {/* Technical Support */}
          <div className="mb-10  mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold">🛠 Need Technical Support?</h2>
            </div>
            <p className="  text-sm mb-2">
              Having trouble with the site loading, filters not working, or broken links?
            </p>
            <p className="  text-sm mb-4">
              Please clear your browser cache or try switching devices. Still stuck?
            </p>
            <div className="flex items-center gap-2   text-sm">
              <span>📧 Email Tech Support: <a href="mailto:support@leattery.com" className=" underline">support@leattery.com</a></span>
            </div>
            <p className=" mt-1">🕐 Response Time: Within 24-48 hours</p>
          </div>

          {/* General Inquiries */}
          <div className="mb-10  mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold">📣 General Inquiries or Feedback</h2>
            </div>
            <p className="  text-sm mb-4">
              Want to collaborate, share feedback, or ask a general question? We'd love to hear from you.
            </p>
            <div className="flex items-center gap-2   text-sm">
              <span>📧 General Contact: <a href="mailto:hello@leattery.com" className=" underline">hello@leattery.com</a></span>
            </div>
          </div>

          {/* Closing Message */}
          <div className="mx-auto">
          <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold">🙌 We're Here to Help</h2>
            </div>
            <p className="  text-sm">
              LAEATERY is all about making food discovery easier and more fun. If you ever feel lost, 
              just reach out - we're just a click away!
            </p>
          </div>
        </section>
      </HomeContainer>
    </div>
  );
};

export default HelpAndSupport;