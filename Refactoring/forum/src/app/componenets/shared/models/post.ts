export interface Post {
    _id: string;
    title: string;
    url: string;
    imageUrl: string;
    description: string;
    author: string;
    _acl: { creator: string }
}