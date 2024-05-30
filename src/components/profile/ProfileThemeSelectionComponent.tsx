import * as React from 'react';
import {Carousel} from '@components/look';


import { PageContainer } from '@modules/look';

const data = [
  {
    title: "Milan",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0444_city-header_milan_marianna-tomaselli-768x432.jpg"
  },
  {
    title: "Hong Kong",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0378_hong-kong_jisu-choi_final_header-1-768x512.jpg"
  },
  {
    title: "Prague",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/location-page-header-prague-greta-samuel-768x512.jpg"
  },
  {
    title: "Florence",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0440_florence_giordano-poloni_final_header-768x512.jpg"
  },
  {
    title: "Venice",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0449_venice_marianna-tomaselli_final_header-768x432.jpg"
  },
  {
    title: "Los Angeles",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/venice-beach_final-768x512.jpg"
  },
  {
    title: "Milan",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0444_city-header_milan_marianna-tomaselli-768x432.jpg"
  },
  {
    title: "Hong Kong",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0378_hong-kong_jisu-choi_final_header-1-768x512.jpg"
  },
  {
    title: "Prague",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/location-page-header-prague-greta-samuel-768x512.jpg"
  },
  {
    title: "Florence",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0440_florence_giordano-poloni_final_header-768x512.jpg"
  },
  {
    title: "Venice",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0449_venice_marianna-tomaselli_final_header-768x432.jpg"
  },
  {
    title: "Los Angeles",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/venice-beach_final-768x512.jpg"
  }
];



const ProfileThemeSelectionComponent = ({})=>{
    return (
        <PageContainer>
            <Carousel
                autoplay={false}
                autoplaySpeed={3000}
                slideNum={3}
                data={data}
                label={"Travel"}
                heading={"Places to travel to in 2022"}
                subheading={"2022 is going to be epic!"}
                centerMode={true}
            />
        </PageContainer>
    )
}

export default ProfileThemeSelectionComponent;