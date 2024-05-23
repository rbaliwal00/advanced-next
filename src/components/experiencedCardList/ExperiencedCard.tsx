import { ExperiencedProps } from "../../constants/experienced";
import Image from 'next/image';



const ExperiencedCard = (props: ExperiencedProps) => {

  return (
    <div className="cursor-pointer grid justify-items-center" onClick={props.onClick}>
      <div className="main w-max">
       <Image 
          src={props.banner} 
          width={100} 
          height={100} 
          alt={'role image'} 
          className={`cursor-pointer h-[7rem]`}
         />
      </div>
      <h3 className={`title text-[${props.color}]`}>{props.title}</h3>
      <style jsx>{`
        .main{
            background-color: ${props.color};
            box-shadow: 0px 4px 15px 0px ${props.color};
            text-align: center;
            padding: 1rem 1rem 0rem 1rem;
            border-radius: 1rem;
        }
        .title{
          color: ${props.color};
          font-weight: 600;
          text-align: center;
          padding: 1rem 1rem 0rem 1rem;
          font-size: 20px;
        }
      `}</style>

    </div>
  );
};

export default ExperiencedCard;
