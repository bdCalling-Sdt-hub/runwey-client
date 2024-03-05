import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import baseAxios from "../../../../Config";

const TermsAndCondition = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const TermsAndConditionDataSave = () => {
    let token = localStorage.getItem("token");
    baseAxios
      .post(
        "api/termCondition",
        { termAndCondition: content },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        Swal.fire("Good job!", res.data.message, "success");
      })
      .catch((err) => {
        Swal.fire("Oops!", err.response.data.message, "error");
      });
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    baseAxios
      .get("api/termCondition", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setContent(res.data.data.termAndCondition);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pt-5">
      <JoditEditor
        ref={editor}
        value={"<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\"><strong>Terms of Service</strong></span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">1. Introduction</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">These Terms of\n        Service govern your access to and use of Runwey fashion provided by MI Runwey Corp.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">2. Acceptance of\n        Terms</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">By accessing or\n        using the App, you agree to be bound by these Terms. If you do not agree to\n        these Terms, you may not access or use the App.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">3. Description of\n        Services</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">The App provides a\n        platform for users to explore short clips of trending fashion ideas for variety of outing occasions from popular\n        fashion content creators</span></p><p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\"> 4. Account Creation and Use</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">To use certain\n        features of the App, you may need to create an account. You agree to provide\n        accurate and complete information when creating your account and to keep your\n        account information up-to-date. You are responsible for maintaining the\n        confidentiality of your account password and for all activities that occur\n        under your account.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">5. User Conduct</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">You agree to use\n        the App in accordance with these Terms and all applicable laws and regulations.\n        You agree not to:</span></p>\n\n<ul><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Use the App for any illegal or unauthorized purpose.</span></li><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Upload,&nbsp;post,&nbsp;transmit,&nbsp;or distribute&nbsp;any content\n        that is unlawful, harmful,&nbsp;threatening, abusive, harassing, tortious,\n        defamatory, vulgar, obscene, libelous, invasive of another's&nbsp;privacy,\n        hateful, racially, ethnically, or otherwise objectionable.</span></li><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Disrupt or interfere with the App or the servers or networks connected\n        to the App.</span></li><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Impersonate any person or entity,&nbsp;including any Company employee or\n        representative.</span></li><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Use the App to spam,&nbsp;phish,&nbsp;distribute malware,&nbsp;or engage\n        in any other form of harmful or malicious activity.</span></li></ul>\n\n\n\n\n\n\n\n\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">6. Intellectual\n        Property</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">All intellectual\n        property rights in the App, including but not limited to trademarks,\n        copyrights, and trade secrets, are owned by the Company or its licensors. You\n        agree not to copy, distribute, modify, or create derivative works of the App\n        without the prior written consent of the Company.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">7. User-Generated\n        Content</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Any content that\n        you upload, post, transmit, or otherwise make available through the App (your\n        \"User Content\") is your sole responsibility. You grant the Company a\n        non-exclusive, worldwide, royalty-free license to use, reproduce, modify,\n        adapt, publish, translate, create derivative works of, distribute, and display\n        your User Content in connection with the App. You also agree that the Company\n        may share your User Content with third-party partners for marketing or\n        advertising purposes.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">8. Fees and\n        Payments</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Certain features of\n        the App may require you to pay fees. You will be responsible for paying any\n        applicable fees.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">9. Links to\n        Third-Party Websites</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">The App may contain\n        links to third-party websites. These links are provided for your convenience\n        only and do not imply any endorsement or affiliation with those websites. The\n        Company is not responsible for the content of any third-party websites.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">10. Disclaimer of\n        Warranties</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">The Company makes\n        no representations or warranties about the App, including but not limited to\n        its accuracy, completeness, or timeliness. The App is provided on an \"as\n        is\" and \"as available\" basis. The Company disclaims all\n        warranties, express or implied, including but not limited to warranties of\n        merchantability, fitness for a particular purpose, and non-infringement.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">11. Limitation of\n        Liability</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">The Company's\n        liability for any damages arising out of or in connection with your use of the\n        App is limited to the amount you paid for the App, if any. In no event shall\n        the Company be liable for any indirect, special, consequential, or punitive\n        damages.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">12. Termination</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">The Company may\n        terminate your access to the App at any time for any reason, without notice.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">13. Entire\n        Agreement</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">These Terms\n        constitute the entire agreement between you and the Company regarding your use\n        of the App.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">14. Changes to\n        Terms</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">The Company may\n        modify these Terms at any time. You are responsible for reviewing these Terms\n        periodically to stay informed of any changes. Your continued use of the App\n        after any changes to these Terms will be deemed your acceptance of those\n        changes.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">15. Contact Us</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">If you have any\n        questions about these Terms, please contact us at info@runweymailer.com</span></p>"}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
      <div
        onClick={TermsAndConditionDataSave}
        className=" cursor-pointer w-full h-12 mt-5 p-2.5 bg-violet-700 rounded-lg justify-center items-center gap-2.5 inline-flex"
      >
        <div className="text-white text-lg font-semibold font-['Montserrat']">
          Save
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
