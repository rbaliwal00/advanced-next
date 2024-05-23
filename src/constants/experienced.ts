import fresher from '../stories/assets/fresher-ex.png'
import FullTime from '../stories/assets/full time.png'
import internship from '../stories/assets/internship.png'
import partTime from '../stories/assets/part-time.png'


export interface ExperiencedProps {

    onClick?: () => void;
    id: number;
    color: string;
    banner:any;
    title: string;
  }


export const ExperiencedType:ExperiencedProps[] = [{
    id:1,
    banner:fresher.src,
    title:'Fresher',
    color: '#EF6F45'
},
{
    id:2,
    banner:FullTime.src,
    title:'Full Time',
    color:'#002351'
},
{
    id:3,
    banner:internship.src,
    title:'Internship',
    color:'#3BD7B1'
},
{
    id:4,
    banner:partTime.src,
    title:'Part-Time',
    color:'#7538D9'
},
];