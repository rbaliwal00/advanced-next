import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

type tabArray = {
  label: string,
}
type Props = {
  tabArray: tabArray[]
}
const TabButton = ({ tabArray }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    console.log('clicked tab');
  };
  return (
    <div>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        TabIndicatorProps={{
        //   style: { backgroundColor: 'transparent' },
        //   children: <span style={{ borderBottom: '2px solid #FE8B4C' }} />
        }}
      >
        {
          tabArray && tabArray.map((tab: any) => (
            <Tab key={tab.id} label={tab.label} sx={{
              '&.Mui-selected': {
                color: '#FE8B4C',
                backgroundColor: '#FFF1E6',
                borderBottom: '2px solid #FE8B4C'
              },
            }} />
          ))
        }

      </Tabs>

      
    </div>
  );
}

export default TabButton;