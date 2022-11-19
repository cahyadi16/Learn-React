import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons";

export default function App() {
  return (
    <div className={"bg-slate-900 grid place-content-center min-h-screen"}>
      <div className={"flex gap-x-2"}>
        <Button
          onClick={() => console.log("Login biasa")}
          type="submit"
          text="Login"
        />
        <Button
          className={"bg-blue-600"}
          onClick={() => console.log("Login with facebook")}
          type="submit"
        >
          <IconBrandFacebook />
          Login
        </Button>
        <Button className={"bg-blue-900"} type="button">
          <IconBrandTwitter />
          Login
        </Button>
        <Button
          className={"bg-black"}
          onClick={() => console.log("Login with github")}
          type="submit"
        >
          <IconBrandGithub />
          Login
        </Button>
      </div>
    </div>
  );
}

function Button(props) {
  // pada clasname dibautkan default parameter untuk mengisi warna
  const { className = "bg-blue-600", children, text } = props;
  return (
    <button
      {...props} //untuk membuat fungsi bawaan dari button dapat berfungsi, seperti onClick, onChange, Type dll
      className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1   flex items-center gap-x-2 text-white px-4 py-2 rounded`}
    >
      {text || children}
    </button>
  );
}

// lanjut ke menit ke 16
