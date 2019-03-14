export interface BlogEntrys {
    introduction: Introduction;
    blogEntrys: BlogEntry[];
}

export interface BlogEntry  {
    id: number;
    headline: string;
    teaseredContent?: string;
    content: string;
    route: string;
    image: string;
    created: Date;
    flag?: string;
}

interface Introduction {
    headline: string;
    teaser: string;
    tags: string[];
}
