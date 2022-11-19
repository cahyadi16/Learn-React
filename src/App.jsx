import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons";
import clsx from "clsx";

export default function App() {
  const type = "submit";
  const onClick = () => console.log("login with another style");
  return (
    <div className={"bg-slate-900 grid place-content-center min-h-screen"}>
      <div className={"flex gap-x-2"}>
        <Button {...{ type, onClick }}>Login biasa</Button>
        <Button
          className={"bg-blue-600"}
          onClick={() => console.log("Login with facebook")}
          type="submit"
        >
          <IconBrandFacebook />
          Login
        </Button>
        <Button
          className={"bg-blue-900"}
          onClick={() => console.log("Login with Twitter ")}
          type="button"
        >
          <IconBrandTwitter />
          Login
        </Button>
        <Button
          className={"bg-black"}
          onClick={() => console.log("Login with github")}
        >
          <IconBrandGithub />
          Login
        </Button>
      </div>
    </div>
  );
}

function Button(props) {
  // pada clasname dibautkan default parameter untuk mengisi warna, dan mengisi default type
  const { className = "bg-blue-600", children, text, type = "submit" } = props;
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1   flex items-center gap-x-2 text-white px-4 py-2 rounded"
      )}
    >
      {text || children}
    </button>
  );
}
