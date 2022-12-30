import React from "react";
import "../styles/Terms.css";

function Terms() {
  return (
    <>
      <terms>
        <div className="terms-container">
          <div className="terms-main">
            <div className="terms-title p-1" style={{ backgroundColor: "#f3efe0" }}>
              <div className="terms-title">Terms of Use </div>
            </div>
            <p>
              These terms of use `&quotTerms&quot` constitute a legally binding
              agreement between you and Real Estate Services Limited `the
              &quotCompany&quot` regarding your use of the website www.realestate.com
              `the &quotSite&quot` and any services offered by the Company including
              but not limited to delivery of content via the Site, any mobile or
              internet connected device or otherwise `the &quotthe Service&quot`.
            </p>
            <div className="terms-title p-1" style={{ backgroundColor: "#f3efe0" }}>
              <div className="terms-title"> Term: </div>
            </div>
            <p>
              These Terms shall continue to form a valid and binding contract between
              the Parties, and shall continue to be in full force and effect until
              the User continues to access and use the Site.
            </p>

            <div className="terms-title p-1" style={{ backgroundColor: "#f3efe0" }}>
              <div className="terms-title">Services: </div>
            </div>
            <p>
              Company provides a number of internet-based services through its
              platform and shall include:{" "}
            </p>
            <ul className="terms_list_content">
              <li>
                Posting User profile or listing for the purpose of sale/rental of
                property, and related property services etc.
              </li>
              <li>Find a property through Realestate.com and its internet links.</li>
              <li>
                Place a print advertisement in any of the group publications through
                the www.Realestate.com site.
              </li>
              <li>Post advertisements on Realestate.com.</li>
              <li>
                Send advertisements and promotional messages through emails and
                messages.{" "}
              </li>
            </ul>
            <p>
              The Services can be purchased through various methods of payments
              offered. The purchase of Services shall be additionally governed by
              specific policies of sale, like subscription fees, payment and Refund
              policy, cancellation policy etc
            </p>

            <div className="terms-title p-1" style={{ backgroundColor: "#f3efe0" }}>
              <div className="terms-title">Eligibility: </div>
            </div>
            <p>
              You hereby represent and warrant to the Company that you are at least
              eighteen (18) years of age or above and are capable of entering,
              performing and adhering to these Terms. While individuals under the age
              of 18 may utilize the Service of the site, they shall do so only with
              the involvement & guidance of their parents and / or legal guardians,
              under such Parent /Legal guardian&quots registered account. You agree
              to register prior to uploading any content and / or comment and any
              other use or services of this site and provide your details including
              but not limited to complete name, age, email address, residential
              address, and contact number.
            </p>
          </div>
        </div>
      </terms>
    </>
  );
}

export default Terms;
