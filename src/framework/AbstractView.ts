

export interface PageParameters {
    title: string;
    description?: string;
}

export default abstract class {
    pageMeta: PageParameters = {
        title: 'Default Title'
    };

    abstract pageBody():string;
    abstract pageScript():string
    abstract pageStyle():string;
}
