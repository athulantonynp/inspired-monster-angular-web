export interface Shot{
    animated:boolean,
    description:string,
    html_url:string,
    id:number,
    images:ShotImage,
    title:string
}

export interface ShotImage{
    hidpi:string,
    normal:string
}