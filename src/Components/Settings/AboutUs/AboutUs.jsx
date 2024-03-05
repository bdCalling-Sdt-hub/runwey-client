import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import baseAxios from "../../../../Config";
import Swal from "sweetalert2";

const AboutUs = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const aboutUsDataSave = () => {
    let token = localStorage.getItem("token");
    baseAxios
      .post(
        "api/aboutus",
        { aboutUs: content },
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
      .get("api/aboutus", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setContent(res.data.data.aboutUs);

        console.log(res.data.data.aboutUs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pt-5">
      <JoditEditor
        ref={editor}
        value={"<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\"><strong>About us:</strong></span></p><p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Embrace Your Style\n        with Runwey</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">At Runwey, we\n        believe that fashion is about expressing yourself, not conforming to trends.\n        We're passionate about creating a platform that empowers you to discover your\n        unique style and find the perfect pieces to showcase it.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Our app is designed\n        to be your personal style guide, offering a seamless fashion experience that\n        caters to your preferences and inspires you to experiment with new trends. We provide\n        access to fashion ideas for any occasion from emerging and reputable fashion bloggers. Explore wide variety of short clips featuring styled outfits for any outing occasion.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Join the runwey\n        Community.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Download the Runwey\n        app today and embark on a journey of self-discovery and fashion exploration.\n        Let us help you unleash your inner fashionista and embrace your unique style.</span></p>\n\n<p class=\"MsoNormal\" style=\"font-family: Calibri, &quot;sans-serif&quot;; margin: 24px 0px; line-height: normal; background: white; font-size: 15px;\"><strong><span style=\"font-family: Arial, &quot;sans-serif&quot;; color: rgb(31, 31, 31); font-size: 16px;\">Runwey: The fashion Bible</span></strong></p>"}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
      <div
        onClick={aboutUsDataSave}
        className=" cursor-pointer w-full h-12 mt-5 p-2.5 bg-violet-700 rounded-lg justify-center items-center gap-2.5 inline-flex"
      >
        <div className="text-white text-lg font-semibold font-['Montserrat']">
          Save
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
