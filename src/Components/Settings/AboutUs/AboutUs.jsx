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
        value={content}
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
