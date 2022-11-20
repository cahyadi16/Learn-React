import Card from "./components/Card";
import Button from "./components/Button";
function App() {
  return (
    <div
      className={
        "bg-slate-100 antialiased text-slate-800 tracking-tight flex items-center justify-center min-h-screen"
      }
    >
      <div className="max-w-md w-full">
        <Card>
          <Card.Title>Hallo React Js </Card.Title>
          <Card.Body>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
            voluptatem quibusdam deserunt repudiandae dicta sapiente error quis
            labore praesentium odio minima perferendis nulla tempora molestias,
            delectus similique assumenda! Consequuntur minus libero nobis, dicta
            culpa consequatur odio harum neque autem nam recusandae quis ullam
            adipisci non, quia molestias.
          </Card.Body>
          <Card.Footer>
            <Button>Register</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default App;
