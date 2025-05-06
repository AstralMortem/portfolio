import type { Stack } from "~/types"
import stackJSON from '@/assets/stack.json'


export const useStack = () => {
  const stack = computed<Array<Stack>>(() => stackJSON)

  const findStack = (title: string) => {
    return stack.value.find(s => s.title.toLowerCase() === title.toLowerCase())
  }

  const getStacksByCategory = (category: string) => {
    return stack.value.filter(s => s.category === category)
  }

  return {stack, findStack, getStacksByCategory}
}
