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
        value={content}
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
