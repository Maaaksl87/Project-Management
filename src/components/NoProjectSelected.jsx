import Button from "./Button";

function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      {/* <img src="" alt="An empty task list image" className="" /> */}
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Please select a project from the sidebar to view its details.
      </p>
      <p>
        <Button onClick={onStartAddProject}>Create a Project</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
