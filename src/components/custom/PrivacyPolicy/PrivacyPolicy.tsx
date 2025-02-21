import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function PrivacyPolicy() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="bg-[#222629] border-y border-[#222629]" id="privacy">
      <div className="container mx-auto max-w-7xl px-6 flex-grow pt-16 pb-16">
        {/* Privacy Policy Title */}
        <h1
          className="text-center font-semibold text-base md:text-4xl pb-6 md:pb-10 text-[#C0C0C0]"
          data-aos="fade-up"
        >
          Privacy Policy
        </h1>
        {/* Privacy Policy Description */}
        <p
          className="font-normal text-xs md:text-xl leading-relaxed text-[#C0C0C0]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Your privacy matters to us at T-Stackz Rackz. We collect minimal data
          to provide secure trading services. Your information is encrypted,
          never shared, and protected with 2FA & advanced security measures.
          <br />
          We use your data to enhance platform security, improve user
          experience, and comply with regulations. We do not sell or share your
          personal information with third parties. All transactions and personal
          data are safeguarded with end-to-end encryption and real-time fraud
          detection.
          <br />
          You have full control over your data and can request access, updates,
          or deletion at any time. By using our platform, you agree to our data
          policies.
        </p>
      </div>
    </div>
  );
}
