import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function WhatsAppWidget() {
  // Replace with your actual WhatsApp Business number
  // Format: Country code + Number (no + or spaces)
  // Example: 2348012345678
  const phoneNumber = "2348000000000"; 
  const message = encodeURIComponent("Hello BridgeX! I have a question about your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center"
          >
            {/* Pulse effect */}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 duration-1000"></span>
            
            <Button 
              size="icon" 
              className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 border-2 border-white"
            >
              <MessageCircle className="h-8 w-8 text-white fill-white" />
            </Button>
            
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">
              1
            </span>
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-white text-foreground font-medium px-4 py-2 shadow-xl border-border/50">
          <p>Chat with us on WhatsApp!</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
