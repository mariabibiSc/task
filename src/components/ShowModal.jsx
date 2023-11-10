import React, { useState } from "react";

function ShowModal() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => setOpenModal(!openModal)}
          className="rounded-md bg-fuchsia-700 text-[22px] px-6 py-2 mb-3"
        >
          Sign In
        </button>
      </div>
      {openModal && (
        <div className="rounded-md border border-gray-300 shadow-lg">
          <h3> SignIn Form</h3> <input type="text" placeholder="enter name" />
          <input type="email" placeholder="enter mail" />
          <input type="password" placeholder="enter pswd" />
          <div>
            <button
              type="submit"
              onClick={() => setOpenModal(false)}
              className="rounded-md text-[22px] bg-fuchsia-700 px-6 py-2"
            >
              Submit
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="rounded-md text-[22px] bg-fuchsia-700 px-6 py-2"
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowModal;
