export function count(target: string | unknown[], search: any) {
  let res = 0
  for (let i = 0; i < target.length; i++) if (search === target[i]) res++
  return res
}
