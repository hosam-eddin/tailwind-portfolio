import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";
import WorkCombo01 from "./WorkCombo01";
import WorkCombo02 from "./WorkCombo02";
import WorkCombo03 from "./WorkCombo03";
import WorkCombo04 from "./WorkCombo04";

export default function Works() {
  const [activeTab, setActiveTab] = React.useState("ALL");

  const data = [
    {
      label: "ALL",
      value: "ALL",
      desc: <WorkCombo01 />,
    },
    {
      label: "Brands",
      value: "Brands",
      desc: <WorkCombo02 />,
    },
    {
      label: "Design",
      value: "Design",
      desc: <WorkCombo03 />,
    },
    {
      label: "Graphic",
      value: "Graphic",
      desc: <WorkCombo04 />,
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col items-center py-20 "
      id="works"
    >
      <div className="img-bg relative z-10">
        <h1 className=" text-center font-bold text-5xl text-gray-600 ">
          Portfolio.
        </h1>
      </div>
      <div className="container">
        <div className="py-10">
          <Tabs value={activeTab} className='flex items-center flex-col font-bold' >
            <TabsHeader
              className=" space-x-5 "
              indicatorProps={{
                className:
                  "bg-transparent rounded-none",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={
                    activeTab === value
                      ? "text-gray-900 border-b-2 border-black w-[fit-content]"
                      : "w-[fit-content]"
                  }
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
