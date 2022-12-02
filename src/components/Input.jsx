export default function Input({ type = "text", ...props }) {
  return (
    <input
      {...props}
      className={
        "transition duration-300 border-slate-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 shadow-sm rounded-lg"
      }
      name="name"
      id="name"
      type={type}
    />
  );
}


menit ke 6