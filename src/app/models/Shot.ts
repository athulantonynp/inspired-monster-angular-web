export interface Shot{
    animated:boolean,
    description:string,
    html_url:string,
    id:number,
    images:ShotImage,
    title:string
}

export class ShotImage{
    hidpi:string
}