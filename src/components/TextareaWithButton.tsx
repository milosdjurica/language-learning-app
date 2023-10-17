import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Insert text here to translate it." />
      <Button>Translate</Button>
    </div>
  );
}
