declare interface FlipDownOpts {
    theme?: string;
    headings?: string[];
}

declare class FlipDown {
    constructor(uts: number, el?: string, opt?: FlipDownOpts);

    public start(): void;

    public ifEnded(callback: () => any): void;
}
