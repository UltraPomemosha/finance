import type { ITextConfig } from "@c/ui/u-text/support"

export interface IULinkProps {
  type: "link" | "a"
  to: string
  titleConfig: ITextConfig
}
