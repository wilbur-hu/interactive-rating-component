import { cn } from "@/lib/utils";

export type RatingCircleProps = {
  className?: string;
  checked: boolean;
  onClick: (value: number) => void;
  value: number;
};

export function RatingCircle(props: RatingCircleProps) {
  const statefulClass = {
    "bg-medium-grey": props.checked,
    "bg-dark-blue": !props.checked,
    "text-white": props.checked,
  };

  return (
    <div
      className={cn(
        "flex h-[51px] w-[51px] items-center justify-center rounded-full font-bold leading-[24px] text-medium-grey",
        "hover:bg-orange hover:text-white",
        statefulClass,
        props.className,
      )}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </div>
  );
}
