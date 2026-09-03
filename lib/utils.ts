/** Tiny classname joiner — avoids pulling in clsx/tailwind-merge for a single helper. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
