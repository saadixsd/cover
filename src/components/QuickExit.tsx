import { LogOut } from "lucide-react";

const QuickExit = () => {
  const handleExit = () => {
    window.location.replace("https://weather.gc.ca");
  };

  return (
    <button
      onClick={handleExit}
      className="fixed right-3 top-[4.5rem] z-50 flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground sm:right-4 sm:top-[4.75rem] sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
      aria-label="Quick Exit — leaves this site immediately"
    >
      <LogOut className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">Quick Exit</span>
      <span className="sm:hidden">Exit</span>
    </button>
  );
};

export default QuickExit;
