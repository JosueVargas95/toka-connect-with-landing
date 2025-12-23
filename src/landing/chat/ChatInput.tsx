import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function ChatInput() {
  return (
    <div className="flex gap-2 p-4 border-t">
      <Input placeholder="Escribe tu mensaje..." />
      <Button size="icon">
        <Send className="h-4 w-4" />
      </Button>
    </div>
  );
}
