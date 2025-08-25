import { cn } from "@/libs/utils";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "link";
  href?: string; 
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const styles = cn(
    "font-medium px-4 cursor-pointer py-2 inline-block transition-colors",
    variant === "primary" &&
      "bg-transparent border border-primary hover:bg-primary",
    variant === "secondary" && "bg-transparent border border-grey text-grey hover:text-white hover:bg-grey",
    variant === "link" && "bg-transparent hover:text-primary p-0",
    className
  );

  if (href) {
    // If href is provided → render Next.js Link
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
