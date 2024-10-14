import { useEffect } from "react";

type useTitleProps = {
  title: string;
};
export const useTitle = ({ title }: useTitleProps) => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "VaibhavWrites";
    };
  }, [title]);
  return;
};
