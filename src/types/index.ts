export type Job = {
    id: number,
    title: string,
    location: string,
    salary: number
}

export type OrderTerm = 'title'|'salary'|'location'
