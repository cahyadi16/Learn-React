import PlaceContentCenter from "./components/PlaceContentCenter";

import Card from "./components/Card";
import Button from "./components/Button";
import { IconBrandGithub } from "@tabler/icons";
import Input from "./components/Input";
import Label from "./components/Label";
export default function App() {
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Sign Up For New Account</Card.Title>
        <Card.Body>
          <div className="mb-6">
            <Label htmlFor="name" value={"Name"} />
            <Input id={"name"} name={"name"} />
          </div>

          <div className="mb-6">
            <Label htmlFor="email" value={"Email"} />
            <Input id={"email"} type={"email"} name={"email"} />
          </div>
        </Card.Body>
        <Card.Footer>
          <Button>
            <IconBrandGithub /> Register
          </Button>
        </Card.Footer>
      </Card>
    </PlaceContentCenter>
  );
}
