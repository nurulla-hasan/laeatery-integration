import HomeContainer from "@/components/home-container/HomeContainer";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className=""></div>
      <HomeContainer>
        <section className="text-[#333333] py-10">
          <h1 className="text-center text-4xl font-bold mb-16 font-poltawski text-[#0A0A0A]">Privacy Policy</h1>

          <div className="space-y-12 leading-8 text-sm ">
            <div>
              <h2 className=" text-xl font-semibold mb-4">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc ml-6 space-y-4">
                <li><strong>a. Personal Information</strong><br />Name, email address, or contact info (if you contact us or sign up for updates)</li>
                <li><strong>b. Usage Data</strong><br />Pages visited, time spent, clicks, browser type, and other analytics</li>
                <li><strong>c. Device & Technical Info</strong><br />IP address, location (approximate), device type, and cookies</li>
              </ul>
              <p className="mt-4">We do not collect sensitive personal data like payment information unless integrated through a secure third-party service.</p>
            </div>

            <div>
              <h2 className=" text-xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p>We use collected data to:</p>
              <ul className="list-disc ml-6 space-y-4">
                <li>Provide and improve the functionality of our website</li>
                <li>Respond to inquiries or feedback</li>
                <li>Personalize your browsing experience</li>
                <li>Send newsletters or promotional emails (only with your consent)</li>
                <li>Analyze user behavior to improve site content and usability</li>
              </ul>
            </div>

            <div>
              <h2 className=" text-xl font-semibold mb-4">3. Cookies & Tracking Technologies</h2>
              <p>
                We use cookies and similar technologies (e.g., Google Analytics) to improve user experience and track performance.
                You may choose to disable cookies via your browser settings.
              </p>
            </div>

            <div>
              <h2 className=" text-xl font-semibold mb-4">4. Sharing Your Information</h2>
              <p>We do not sell or rent your personal data.</p>
              <p>We may share information with:</p>
              <ul className="list-disc ml-6 space-y-4">
                <li>Trusted third-party services (like analytics providers)</li>
              </ul>
            </div>
          </div>
        </section>
      </HomeContainer>
    </div>
  );
};

export default PrivacyPolicy;
