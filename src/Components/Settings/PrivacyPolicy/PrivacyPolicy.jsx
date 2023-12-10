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
        value={content}
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
