import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Carousel from '../carousel';
import JobStaticVisitingCard from '@components/visitingCard/JobstaticVisitingCard';

const ExperiencedThemeSelection = () => {

  const [color, setColor] = useState('red');

  const jobData = {
    currentLocation: "current Locaion",
    department: "Japanese cuisine",
    email: "hello@really.com",
    experience: "2-4 years",
    imageURL: "https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    mobileNumber: "+123-456-7890",
    name: "Yanis petros",
    position: "sous chef",
    preferredLocationOne: "Preferred Location 1",
    preferredLocationTwo: "Preferred Location 2",
    themeColor: color,
    type: 'job',
    experienceType:'fresher'
  }

  const jobDatas = [jobData, jobData, jobData,jobData,jobData];

  return (
      <div className='grid justify-items-center'>
        <div className='grid'>
          {/* <Carousel
            data={jobDatas}
            color={color}
          /> */}
          <JobStaticVisitingCard {...jobData} />
          <div className="grid gap-4 items-center justify-items-center justify-self-center mt-2 text-center">
            <h2 className='text-base font-semibold'>Choose Color</h2>
            <div className="grid grid-flow-col gap-4 pb-4 w-full justify-between">
              <div
                className={`bg-[yellow] cursor-pointer
                              shadow-[0px_4px_4px_0px_#00000040] w-[20px] h-[20px] rounded-[50%]
                              ${color === "yellow"
                    ? "border-2 border-solid border-[#484848]"
                    : ""
                  }  `}
                onClick={() => setColor('yellow')}
              >
                {" "}
              </div>
              <div
                className={`bg-[blue] cursor-pointer
                              shadow-[0px_4px_4px_0px_#00000040] w-[20px] h-[20px] rounded-[50%]
                              ${color === "blue"
                    ? "border-2 border-solid border-[#484848]"
                    : ""
                  }  `}
                onClick={() => setColor('blue')}
              >
                {" "}
              </div>
              <div
                className={`bg-[green] cursor-pointer
                              shadow-[0px_4px_4px_0px_#00000040] w-[20px] h-[20px] rounded-[50%]
                              ${color === "green"
                    ? "border-2 border-solid border-[#484848]"
                    : ""
                  } `}
                onClick={() => setColor('green')}
              >
                {" "}
              </div>
              <div
                className={`bg-[red] cursor-pointer
                              shadow-[0px_4px_4px_0px_#00000040] w-[20px] h-[20px] rounded-[50%]
                              ${color === "red"
                    ? "border-2 border-solid border-[#484848]"
                    : ""
                  }  `}
                onClick={() => setColor('red')}
              >
                {" "}
              </div>
            </div>
            <button className="text-white bg-[#002351] rounded-[0.4rem]  w-max px-28 py-4">
              <p className="text-xl font-bold " onClick={() => { }}>
                Next
              </p>
            </button>
          </div>
        </div>
      </div>
  );
};

export default ExperiencedThemeSelection;
