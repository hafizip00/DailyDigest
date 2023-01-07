import { createClient } from 'next-sanity'
export const client = createClient({
    projectId: "20yq843l",
    dataset: "production",
    useCdn: true,
})