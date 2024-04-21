import { FC, ReactElement } from "react";
import { TButton } from "./type";
import { clsx } from "clsx";
import { P, match } from "ts-pattern";
import Link from "next/link";

export const Button: FC<TButton> = ({
  variant = "primary",
  size = "sm",
  variantType = "solid",
  state = "default",
  ...props
}): ReactElement => {
  const className = clsx(
    "rounded-lg hover:opacity-80 font-semibold",
    "disabled:cursor-not-allowed disabled:hover:opacity-80 disabled:bg-grey-200",
    {
      "border bg-transparent": variantType === "outline",
      "border-none": variantType === "solid",
    },
    {
      "border-bg-primary text-primary":
        variant === "primary" && variantType === "outline",
      "border-bg-primary-2 text-primary-2":
        variant === "secondary" && variantType === "outline",
      "border-bg-success text-success":
        variant === "success" && variantType === "outline",
      "border-bg-error text-error":
        variant === "error" && variantType === "outline",
      "border-bg-warning text-warning":
        variant === "warning" && variantType === "outline",
      "border-bg-info text-info":
        variant === "info" && variantType === "outline",
    },
    {
      "bg-rose": variant === "primary" && variantType === "solid",
      "bg-rose-foam": variant === "secondary" && variantType === "solid",
      "bg-rose-surface text-rose-text":
        variant === "success" && variantType === "solid",
      "bg-rose-love": variant === "error" && variantType === "solid",
      "bg-rose-gold": variant === "warning" && variantType === "solid",
      "bg-rose-pine": variant === "info" && variantType === "solid",
    },
    {
      "text-sm px-2 py-1": size === "sm",
      "text-md px-4 py-2": size === "md",
      "text-lg px-6 py-3": size === "lg",
    },
  );

  const buttonState = match(state)
    .with("default", () => props.children)
    .with("loading", () => "Loading...")
    .exhaustive();

  return match(props.href)
    .with(undefined, () => (
      <button className={className} {...props}>
        {buttonState}
      </button>
    ))
    .with(P.string, (link) => (
      <Link href={link}>
        <button className={className} {...props}>
          {buttonState}
        </button>
      </Link>
    ))
    .exhaustive();
};
