import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"; // Correct import

export const client = createClient ({
    projectId : "tw7yj4z0",
    dataset : "production",
    apiVersion : "2022-03-25",
    useCdn : true
});

const builder = imageUrlBuilder(client)

export function urlFor ( source : any) {
    return builder.image(source);
}


