import { useRef } from "react";
import Modal from "./Modal.jsx";

import Input from "./Input.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const entredTitle = title.current.value;
    const entredDescription = description.current.value;
    const entredDueDate = dueDate.current.value;

    if (
      entredTitle.trim() === "" ||
      entredDueDate.trim() === "" ||
      entredDescription.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: entredTitle,
      description: entredDescription,
      dueDate: entredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">Please fill all fields.</p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
