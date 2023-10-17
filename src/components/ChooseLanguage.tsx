import React from "react";
import { Button } from "./ui/button";

export default function ChooseLanguage() {
  return (
    <div className="justify-evenly flex">
      <Button variant="outline">ENG</Button>
      <Button variant="secondary">ESP</Button>
      <Button variant="secondary">SRB</Button>
    </div>
  );
}
