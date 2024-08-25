import { cn } from "@/shared";
import { LoaderCircle } from "lucide-react";
import { FC, useLayoutEffect, useState } from "react";

export const MainPageLoader: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={cn(
        "flex justify-center items-center h-full w-full absolute inset-0 z-50 bg-white transition-opacity duration-500",
        !isLoading && 'opacity-0 pointer-events-none'
      )}
    >
      <LoaderCircle className={cn("animate-spin h-32 w-32 text-our-blue transition-all", !isLoading && 'h-0 w-0')} />
    </div>
  );
};
