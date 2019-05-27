export interface Shot{
    animated: boolean;
    description: string;
    height: number;
    html_url: string;
    id: number;
    images: ShotImage;
    low_profile: boolean;
    tags: string[];
    title: string;
    width: number;
    published_at: string;
    updated_at: string;
    attachments: any[];
    projects: any[];
    video?: any;
}

export interface ShotImage{
    hidpi: string;
    normal: string;
    one_x: string;
    two_x: string;
    teaser: string;
}