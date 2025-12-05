const ProjectsSidebar = () => {
  return (
    <aside className="w-1/4 bg-stone-800 p-4 text-stone-50 md:w-72 rounded-r-lg h-full">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 ">
        Your Projects
      </h2>
      <div>
        <button className="bg-stone-700 px-4 py-2 text-xs rounded-md md:text-base text-stone-400 hover:bg-stone-600 hover:text-stone-100 transition-colors w-full mb-4">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectsSidebar;
