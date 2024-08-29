import { count } from "@/utils/count"

// functions
export const checkName = (name: string): boolean => {
  for (let i = 0; i < name.length; i++) {
    const symbol = name[i]
    if (!isNaN(+symbol) && symbol !== " ") return false
  }
  return true
}

export const checkEmail = (email: string): boolean => {
  const currentMailSymbolAmount = count(email, "@")
  const currentDotAmount = count(email, ".")
  if (currentMailSymbolAmount !== 1) return false
  else if (currentDotAmount !== 1) return false
  else if (email[0] === "@" || email.at(-1) === "@") return false
  else if (email[0] === "." || email.at(-1) === ".") return false
  const mailSymbolIndex = email.indexOf("@")
  const dotIndex = email.indexOf(".")
  if (dotIndex - mailSymbolIndex < 2) return false
  return true
}

export const checkPassword = (password: string): boolean => {
  return true
}
