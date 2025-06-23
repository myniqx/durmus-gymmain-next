export const isValidEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email)

export const isValidPhone = (phone: string): boolean => /^\+?\d{7,15}$/.test(phone)

export const clearMessageAfterDelay = (clearFn: (message: string) => void, delay = 2000): void => {
  setTimeout(() => {
    clearFn("")
  }, delay)
}

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ")
}
