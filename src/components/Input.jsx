import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) { // forwardRef використовується для старих версій реакта (нижче 19)
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold text-stone-500">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} /> // ref вказує що саме цей елемент ми хочемо контролювати з батьківського компонента
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
