export class Blog {

    constructor(
        user: {id: string, name: string, username: string},
        title: string,
        image: string,
        description: string,
        modified: Date,
        published: boolean,
        tags: Array<string>
        ) {
        this.user = user;
        this.title = title;
        this.image = image;
        this.description = description;
        this.modified = modified;
        this.published = published;
        this.tags = tags;
    }
    id: string = "0";
    user: {
        id: string;
        name: string;
        username: string;
    };
    title: string;
    image: string;
    description: string;
    modified: Date;
    published: boolean;
    tags: Array<string>

}