import { ExperiencedProps } from "../../constants/experienced";
import ExperiencedCard from "./ExperiencedCard";

interface ExperiencedCardListProps {
  experiencedCardList: ExperiencedProps[],
  // platform: 'desktop' | 'mobile',
  // backgroundColor:string,
  // hoverColor:string
}

const ExperiencedCardList = ({...props}: ExperiencedCardListProps) => {


  return (
    <div
      className={`grid gap-4 grid-flow-col`}
      >
       {props.experiencedCardList.map((card, index) => (
        <ExperiencedCard {...card}/>
    ))}
    </div>
  );
};

export default ExperiencedCardList;
