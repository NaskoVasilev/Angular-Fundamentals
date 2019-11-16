export interface PostComment {
    _id: string;
    author: string;
    content: string;
    _acl: { creator: string }
}