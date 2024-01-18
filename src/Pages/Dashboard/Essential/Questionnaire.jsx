import React, { useEffect, useState } from "react";
import SignleQuestions from "../../../Components/Essential/SignleQuestions";
import { Modal } from "antd";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { QuestionnaireData } from "../../../ReduxSlices/QuestionnaireSlice";
import baseAxios from "../../../../Config";

const Questionnaire = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.QuestionnaireData.QuestionnaireList
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [quid, setQuid] = useState("");

  let token = localStorage.getItem("token");
  const [reload, setReload] = useState(1);
  const [question, setQuestion] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal2 = (id, question) => {
    setQuid(id);
    setQuestion(question);
    setIsModalOpen2(true);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  useEffect(() => {
    let data = {
      page: 1,
    };
    dispatch(QuestionnaireData(data));
  }, [reload]);

  const handleAddQuestion = () => {
    // api/question this endpoint post
    baseAxios
      .post(
        "/api/question",
        {
          question: question,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Question added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsModalOpen(false);
        setReload(reload + 1);
      })
      .catch((err) => {
        if (err.response.data.message === "Invalid token") {
          localStorage.removeItem("token");
          localStorage.removeItem("yourInfo");
        }
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      });
  };

  const handleQuestionDelete = (id) => {
    console.log(id);
    baseAxios
      .delete(`/api/question/${id}`)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Question deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setReload(reload + 1);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "Invalid token") {
          localStorage.removeItem("token");
          localStorage.removeItem("yourInfo");
        }
      });
  };

  const handleQuestionEdit = () => {
    // patch
    baseAxios
      .patch(`/api/question/${quid}`, {
        question: question,
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Question Update successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsModalOpen2(false);
        setReload(reload + 1);
      })
      .then((err) => {
        console.log(err);
        if (err.response.data.message === "Invalid token") {
          localStorage.removeItem("token");
          localStorage.removeItem("yourInfo");
        }
      });
  };

  return (
    <div className="mt-[24px] border-secondary border-[1px] h-[780px] rounded-2xl ">
      <div className="p-[30px]">
        <div className="flex justify-between items-center border-b-[1px] border-primary pb-[30px]">
          <h1 className="text-3xl font-semibold font-['Montserrat'] text-primary ">
            Questionnaire
          </h1>
          <div
            onClick={showModal}
            className="w-36 group  h-9 cursor-pointer p-2.5 border-primary border-[1px] hover:bg-white bg-primary rounded-lg justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white group-hover:text-primary text-sm font-semibold font-['Montserrat']">
              Add Questions
            </div>
          </div>
        </div>
        <div className="h-[670px] overflow-y-scroll">
          {data.map((item, index) => {
            return (
              <SignleQuestions
                key={index}
                question={item.question}
                answer={item.answer}
                id={item._id}
                reload={reload}
                setReload={setReload}
                handleQuestionDelete={handleQuestionDelete}
                showModal2={showModal2}
              />
            );
          })}
        </div>
      </div>

      <Modal
        open={isModalOpen}
        title={
          <div className="text-2xl py-2 border-b-2 border-primary font-semibold font-['Montserrat'] text-primary">
            <span>Add Question</span>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={1000}
      >
        <div className="flex flex-col">
          <div className="mb-4 w-full">
            <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
              Question
            </p>
            <input
              className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="text"
              defaultValue={question}
              placeholder="Write your question"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          {/* <div className="mb-4 w-full">
            <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
              Answer
            </p>
            <textarea
              defaultValue={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className=" border rounded-[10px] h-[150px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Write your answer"
            />
          </div> */}
          <div onClick={handleAddQuestion} className="cursor-pointer">
            <div className="w-full h-10 p-2.5 bg-violet-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-lg font-semibold font-['Montserrat']">
                Save
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={isModalOpen2}
        title={
          <div className="text-2xl py-2 border-b-2 border-primary font-semibold font-['Montserrat'] text-primary">
            <span>Update Question</span>
          </div>
        }
        onCancel={handleCancel2}
        centered
        footer={[]}
        width={1000}
      >
        <div className="flex flex-col">
          <div className="mb-4 w-full">
            <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
              Question
            </p>
            <input
              className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="text"
              defaultValue={question}
              placeholder="Write your question"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <div onClick={handleQuestionEdit} className="cursor-pointer">
            <div className="w-full h-10 p-2.5 bg-violet-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-lg font-semibold font-['Montserrat']">
                Update
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Questionnaire;
