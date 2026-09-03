import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#970747] text-white hover:bg-[#83063d] shadow-soft active:bg-[#6f0534]",
  secondary:
    "bg-[#fdf2f6] text-[#970747] border border-[#f8d0df] hover:bg-[#fbe6ee]",
  ghost: "text-[#970747] hover:bg-[#fdf2f6]",
  accent:
    "bg-[#970747] text-white hover:bg-[#83063d] shadow-soft active:bg-[#6f0534]",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
};

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer",
    variants[variant],
    className,
  );

  if (props.href) {
    const { href, ...anchorProps } = props as LinkButtonProps;
    const isExternal = /^https?:/.test(href);

    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} suppressHydrationWarning {...(props as NativeButtonProps)}>
      {children}
    </button>
  );
}
