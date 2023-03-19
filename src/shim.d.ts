import type { AttributifyAttributes } from "@unocss/preset-attributify";

declare global {
  namespace astroHTML.JSX {
    interface HTMLAttributes extends AttributifyAttributes {}
  }
  namespace svelte.JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}
