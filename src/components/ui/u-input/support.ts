import type { InputHTMLAttributes } from "vue"

export interface UInputProps {
  name?: string
  type: InputHTMLAttributes['type']
  error: boolean
}
