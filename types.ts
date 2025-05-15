export interface Stack {
    title: string
    description: string | null
    icon: string
    procent: number
    exp: number
    link: string | null
    category: 'backend' | 'frontend' | 'database' | 'ci/cd' | 'other'
}