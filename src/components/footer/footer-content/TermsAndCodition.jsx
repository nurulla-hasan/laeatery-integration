import HomeContainer from "@/components/home-container/HomeContainer";


const Terms = () => {
  return (
    <div>
      <div className=""></div>
      <HomeContainer>
        <section className="text-[#333333] py-10 space-y-12">
          <h1 className="text-center text-4xl font-bold mb-4 text-[#0A0A0A] font-poltawski">
            Terms & Conditions
          </h1>

          <div className="space-y-8 text-sm  leading-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 ">1. Acceptance of Terms</h2>
              <p>
                By accessing or using LAEATERY, you agree to be legally bound by these terms, our Privacy Policy,
                and any other applicable rules or guidelines posted on the site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 ">2. About LAEATERY</h2>
              <p>
                LAEATERY is a digital platform designed to help users discover restaurants in Los Angeles
                based on vibe, cuisine, location, and current trends. We do not own or operate any of the listed restaurants.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 ">3. Use of the Website</h2>
              <p>You agree to use the site for lawful purposes only. You may not:</p>
              <ul className="list-disc ml-6 mt-2 space-y-4">
                <li>Use the site to transmit any harmful, illegal, or offensive content</li>
                <li>Attempt to gain unauthorized access to our systems or interfere with site performance</li>
                <li>Misrepresent information or impersonate another person or entity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 ">4. Restaurant Listings</h2>
              <p>
                All restaurant information, including names, menus, and availability, is subject to change
                and provided for informational purposes only. We do not guarantee the accuracy or availability of any listing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 ">5. Third-Party Services</h2>
              <p>
                Some features, such as restaurant booking, may link to third-party platforms like OpenTable, Resy,
                or the restaurant's official website. LAEATERY is not responsible for the content, availability, or performance of these services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 ">6. Intellectual Property</h2>
              <p>
                All content on LAEATERY, including logos, branding, text, and graphics, is owned by LAEATERY and protected
                under copyright law. You may not copy, modify, or distribute our content without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 ">7. Limitation of Liability</h2>
              <p>
                LAEATERY is provided "as is." We make no warranties or guarantees regarding the reliability, accuracy,
                or suitability of the content or services. We are not liable for any damages resulting from the use of our platform.
              </p>
            </div>
          </div>
        </section>
      </HomeContainer>
    </div>
  );
};

export default Terms;
