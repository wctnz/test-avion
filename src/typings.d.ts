declare module "*.module.css" {
    interface IclassNames {
    [className: string]: string
    }
    const classNames: IclassNames;
    export = classNames;
    }

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg"