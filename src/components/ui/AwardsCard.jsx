"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function AwardCard(props) {
  const award = props.award;
  const router = useRouter();
  const awardLink = `/awards/${award.name}`;

  const handleCardClick = () => {
    router.push(awardLink);
  };
  
  return (
    (<Card onClickListener={handleCardClick}>
      <CardTitle>{award.title}</CardTitle>
      <CardDescription>
        {award.sections.achievement.data.text}
      </CardDescription>
    </Card>)
  );
}


export const Card = ({
  className,
  children,
  onClickListener
}) => {
  return (
    (<div
      className={cn(
        "flex flex-col h-full max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )} onClick={onClickListener}>
      {children}
    </div>)
  );
};

export const CardTitle = ({
  children,
  className
}) => {
  return (
    (<h3
      className={cn("text-lg font-semibold text-gray-800 dark:text-white py-2", className)}>
      {children}
    </h3>)
  );
};

export const CardDescription = ({
  children,
  className
}) => {
  return (
    (<p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}>
      {children}
    </p>)
  );
};
