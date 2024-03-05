import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import baseAxios from "../../../../Config";
import Swal from "sweetalert2";

const PrivacyPolicy = () => {

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const privacyAndPolicyDataSave = () => {

    let token = localStorage.getItem("token");
    baseAxios
      .post(
        "api/privacy",
        { policy: content },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        Swal.fire("Good job!", res.data.message, "success");
      })
      .catch((err) => {
        console.log(err);
      });
      console.log("cliked 45");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    baseAxios
      .get("api/privacy", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setContent(res.data.data.policy);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="pt-5">
      <JoditEditor
        ref={editor}
        value={"<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\"><strong>Privacy Policy</strong></span></p><p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Runwey values your\n        privacy and is committed to protecting your personal information. This Privacy\n        Policy explains how we collect, use, disclose, and protect your personal\n        information when you use our fashion app.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\"><strong>Information We\n        Collect</strong></span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">We collect personal\n        information that you voluntarily provide to us when you register for an\n        account, create a profile, make a purchase, participate in activities on the\n        app, or otherwise contact us. The personal information that we collect may\n        include:</span></p>\n\n<ul><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Your name,&nbsp;email address,&nbsp;and phone number</span></li><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Your purchase history</span></li><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Your preferences and interests</span></li></ul>\n\n\n\n\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\"><strong>How We Use Your\n        Information</strong></span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">We use your\n        personal information to provide you with the services you request, to improve\n        our app, and to communicate with you about our products and services. We may\n        also use your personal information to:</span></p>\n\n<ul><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Personalize your experience on our app</span></li><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Send you marketing and promotional communications</span></li><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Conduct market research and analyze trends</span></li><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Detect and prevent fraud</span></li></ul>\n\n\n\n\n\n\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\"><strong>Sharing Your\n        Information</strong></span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">We may share your\n        personal information with third-party service providers who assist us in\n        providing our services, such as payment processors, We may also share your\n        personal information with government agencies or other third parties as\n        required by law or in the good faith belief that such disclosure is necessary\n        to:</span></p>\n\n<ul><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Comply&nbsp;with the law</span></li><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Enforce our terms of service</span></li><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Protect our rights or property</span></li><li><span style=\"font-family: Symbol; color: rgb(31, 31, 31); font-size: 13px;\"><span>·<span style=\"font: 9px &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </span></span></span><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Protect the safety of others</span></li></ul>\n\n\n\n\n\n\n\n<p class=\"MsoNormal\" style=\"margin: 0px 0px 10px; font-family: Calibri, &quot;sans-serif&quot;; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">&nbsp;</span><br></p>\n\n\n\n\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\"><strong>Data Security</strong></span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">We use reasonable\n        physical, technical, and administrative safeguards to protect your personal\n        information from unauthorized access, use, disclosure, alteration, or\n        destruction. However, no security system is impenetrable, and we cannot\n        guarantee the absolute security of your personal information.</span></p>\n\n\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\"><strong>Children's Privacy</strong></span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Our app is not\n        intended for use by children under the age of 13. We do not knowingly collect\n        personal information from children under the age of 13.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\"><strong>Changes to This\n        Privacy Policy</strong></span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">We may update this\n        Privacy Policy from time to time. We will notify you of any material changes by\n        posting the updated Privacy Policy on our app. You are responsible for reviewing\n        the Privacy Policy periodically to stay informed of our latest practices.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\"><strong>Contact Us</strong></span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">If you have any\n        questions about this Privacy Policy, please contact us at info@runweymailer.com</span></p>"}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
      <div
        onClick={privacyAndPolicyDataSave}
        className=" cursor-pointer w-full h-12 mt-5 p-2.5 bg-violet-700 rounded-lg justify-center items-center gap-2.5 inline-flex"
      >
        <div className="text-white text-lg font-semibold font-['Montserrat']">
          Save
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
