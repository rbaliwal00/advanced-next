import fresher from '../stories/assets/fresher.png'
import experienced from '../stories/assets/experienced.png'


export interface RoleProps {

    backgroundColor?: string;
    onClick?: () => void;
    id: number;
    banner:any;
    title: string;
    hoverColor?:string;
  }


export const ROLES:RoleProps[] = [{
    id:1,
    banner:fresher.src,
    title:'Fresher',
},
{
    id:2,
    banner:experienced.src,
    title:'Experienced',
},
];