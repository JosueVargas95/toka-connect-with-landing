import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatWidget() {
  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg z-50"
      aria-label="Abrir chat"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
