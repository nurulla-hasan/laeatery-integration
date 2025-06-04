import HomeContainer from "@/components/home-container/HomeContainer";

const Accessibility = () => {
  return (
    <div>
      <div className=""></div>
      <HomeContainer>
        <section className="text-white py-10">
          <h1 className="text-center text-4xl font-bold mb-16 font-poltawski text-white">Accessibility</h1>

          <div className="space-y-12 leading-8 text-sm text-gray-300">
            <div>
              <h2 className="text-white text-xl font-semibold mb-4">♿Accessibility Statement</h2>
              <p>
                LAEATERV is committed to providing a website that is accessible to the widest possible audience, 
                regardless of ability or technology. We are actively working to ensure our site meets current 
                accessibility standards and provides a positive experience for all users, including those using 
                assistive technologies such as screen readers, keyboard navigation, or voice recognition software.
              </p>
            </div>

            <div>
              <h2 className="text-white text-xl font-semibold mb-4">🔍 Our Accessibility Goals</h2>
              <p>We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA standards, which include:</p>
              <ul className="list-disc ml-6 space-y-4">
                <li>Providing clear and consistent navigation</li>
                <li>Ensuring sufficient color contrast for text and UI elements</li>
                <li>Using descriptive alt text for all images</li>
                <li>Designing for full keyboard operability</li>
                <li>Making interactive elements screen-reader friendly</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-xl font-semibold mb-4">🛠️ Ongoing Improvements</h2>
              <p>
                We're continuously improving the accessibility of LAEATERV. Our team is regularly reviewing the site, 
                conducting audits, and addressing feedback to ensure an inclusive experience for everyone.
              </p>
            </div>

            <div>
              <h2 className="text-white text-xl font-semibold mb-4">📣 Need Help?</h2>
              <p>
                If you experience any difficulty accessing content or features on this site, 
                please let us know so we can improve:
              </p>
              <ul className="list-disc ml-6 space-y-4 mt-4">
                <li>📧 Email: support@laeaterv.com</li>
                <li>🕐 Response time: Within 2 business days</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-xl font-semibold mb-4">❤ Our Commitment</h2>
              <p>
                At LAEATERV, inclusivity is part of our mission. Everyone deserves to discover great food — 
                and we're here to make that journey accessible to all.
              </p>
            </div>
          </div>
        </section>
      </HomeContainer>
    </div>
  );
};

export default Accessibility;