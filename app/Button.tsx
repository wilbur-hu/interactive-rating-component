import React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = {
  className?: string;
  onClick: () => void;
  text: string;
};
export default function Button(props: ButtonProps) {
  return (
    <input
      type={"submit"}
      onClick={props.onClick}
      className={cn(
        "bg-orange hover:text-orange rounded-[22.5px] py-[11px] text-center font-bold uppercase tracking-[2px] text-white hover:bg-white",
        props.className,
      )}
      value={props.text}
    />
  );
}
