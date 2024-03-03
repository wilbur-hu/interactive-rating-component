import thankYou from "@/public/images/illustration-thank-you.svg";
import Image from "next/image";

export type ResultCardProps = {
  rate: number;
  className?: string;
};
export default function ResultCard(props: ResultCardProps) {
  return (
    <div className="black-radial-gradient-bg flex flex-col items-center justify-start rounded-[32px]">
      <Image
        src={thankYou}
        alt="thank you illustration"
        className="-ml-[7px] mt-[45px]"
      />

      <p className="mt-[33px] h-[32px] w-[193px] rounded-[22.5px] bg-dark-blue text-center leading-[32px] text-orange">
        You selected {props.rate} out of 5
      </p>

      <h2 className="mt-[43px] text-[28px] font-bold text-white">Thank you!</h2>
      <p className="mb-[45px] ml-[32px] mr-[40px] mt-[16px] text-center text-light-grey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
