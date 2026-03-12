/**
 * Resolves a path to the main creeadores-app.
 */
const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? "https://creeadores.com").replace(/\/$/, "")

export function appLink(path: string) {
  return `${APP_URL}${path}`
}
