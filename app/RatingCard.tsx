"use client";

import { cn, range } from "@/lib/utils";
import iconStar from "@/public/images/icon-star.svg";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { RatingCircle } from "@/app/RatingCircle";
import Button from "@/app/Button";
import { handleRating } from "@/app/server";

export type RatingCardProps = {
  className?: string;
};
export default function RatingCard(props: RatingCardProps) {
  const [rate, setRate] = useState(0);

  const handleClick = (value: number) => {
    setRate(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (rate !== 0) {
      await handleRating(rate);
    }
  };

  return (
    <form
      className={cn(
        "black-radial-gradient-bg flex flex-col items-stretch rounded-[30px] p-[32px]",
        props.className,
      )}
      onSubmit={handleSubmit}
    >
      <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-dark-blue">
        <Image src={iconStar} alt="star icon" />
      </div>

      <h2 className="mt-[34px] text-[28px] font-bold leading-[43px] text-white">
        How did we do?
      </h2>

      <p className="mt-[7px] text-light-grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="mt-[24px] flex justify-between">
        {range(1, 5).map((value) => {
          return (
            <RatingCircle
              key={value}
              checked={rate === value}
              onClick={handleClick}
              value={value}
            />
          );
        })}
      </div>

      <Button
        onClick={() => {}}
        text={"submit"}
        className="mr-[6px] mt-[30px]"
      />
    </form>
  );
}
