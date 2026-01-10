import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/4 bg-stone-800 p-4 text-stone-50 md:w-72 rounded-r-lg h-full">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 ">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
