export default function Button({ children, ...props }) {
  return (
    <button
    className="bg-stone-700 px-4 py-2 text-xs rounded-md md:text-base text-stone-400 hover:bg-stone-600 hover:text-stone-100 transition-colors mb-4"
    {...props}
    >
      {children}
    </button>
  );
}
