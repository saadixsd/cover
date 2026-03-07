import { LogOut } from "lucide-react";

const QuickExit = () => {
  const handleExit = () => {
    window.location.replace("https://weather.gc.ca");
  };

  return (
    <button
      onClick={handleExit}
      className="fixed right-3 top-3 z-50 flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground sm:right-4 sm:top-4 sm:text-sm"
      aria-label="Quick Exit — leaves this site immediately"
    >
      <LogOut className="h-3.5 w-3.5" />
      <span className="hidden xs:inline">Quick Exit</span>
      <span className="xs:hidden">Exit</span>
    </button>
  );
};

export default QuickExit;
