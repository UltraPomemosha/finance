export type TextWeight = "m" | "sb" | "b"
export type TextSize = 12 | 14 | 16 | 18 | 20 | 24 | 30 | 32 | 36 | 48 | 60 | 72 | 96 | 128

export interface ITextConfig {
  size: TextSize
  weight?: TextWeight
}

export interface ITextProps {
  tag: HTMLElementTagNameMap
  config: ITextConfig
}
