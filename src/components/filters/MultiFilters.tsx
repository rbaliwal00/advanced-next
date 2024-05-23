import { useEffect, useState } from 'react';
import Button from '../button';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

export interface FilterDataProps{
  title:string;
  isSelected: boolean;
  id: number;

}

export interface FilterProps {
  label: string;
  buttonTitle: string;
  buttonFunction?: () => void;
  handleClose?: () => void;
  dataOption:FilterDataProps[];
  triggerFunction?:()=>void;
  value:any[];

}

const MultiFilter = ({...props}:FilterProps) => {

  const [data,setData] = useState<any[]>([]);
 
  useEffect(() => {
    setData(props.dataOption);
  }, []);
  
  useEffect(() => {
    props.value = data.filter((doc:any)=>doc.isSelected===true);
  }, [data]);

  const handleFilter =(doc:any)=>{
    setData((prevItems:any) =>
      prevItems.map((item:any) =>
        item.id === doc.id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  }
  return (
          <div className='p-4 rounded-[10px]'>
            <div className="flex gap-2 pb-4 border-b-[#F3F4F6] border-b border-solid">
              <button onClick={props.handleClose}>
                <CloseIcon />
              </button>
              <h3>{props.label}</h3>
            </div>
            <div className='p-4 grid grid-cols-[repeat(3,1fr)] gap-4'>
              {data?.map((item:any) =>
                    <button 
                      className={` ${item.isSelected ? 'bg-[#FE8B4C] text-white':'text-[#637381] border-[gray] hover:bg-gray-4'} inline-flex items-center justify-center rounded-full border  px-[1.3rem] py-[0.3rem] text-center text-base font-medium   disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:border-dark-2 dark:text-white dark:hover:bg-dark-3`}
                      onClick={()=>handleFilter(item)}
                      >
                      {item.title}
                      <div>{item.isSelected ? <CloseIcon />:<AddIcon />}</div>
                    </button> 
                )
              }
            </div>
            <Button title={props.buttonTitle} onClick={props.buttonFunction}  />
          </div>
  );
};

export default MultiFilter;
