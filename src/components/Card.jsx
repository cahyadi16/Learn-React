function Card({ children }) {
  return (
    <div>
      <div className={"shadow rounded-lg overflow-hidden bg-white"}>
        {children}
      </div>
    </div>
  );
}

function Title({ children }) {
  return (
    <div className={"border-b p-4"}>
      <h1 className={"text-xl"}>{children}</h1>
    </div>
  );
}

function Body({ children }) {
  return <h1 className={"leading-relaxed p-4"}>{children}</h1>;
}

function Footer({ children }) {
  return <div className={"bg-slate-50 p-4"}>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;
export default Card;
