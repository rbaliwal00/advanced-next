import { FullTime, Internship, OneDay, PartTime } from "@public/assets/icons";

export interface ExperiencedProps {
  onClick?: () => void;
  id: number;
  color: string;
  banner: any;
  title: string;
}

export const JobNearYou: ExperiencedProps[] = [
  {
    id: 1,
    banner: OneDay,
    title: "One Day",
    color: "#FFBF12",
    onClick: () => console.log("Clicked"),
  },
  {
    id: 2,
    banner: Internship,
    title: "Internship",
    color: "#3BD7B1",
    onClick: () => console.log("Clicked"),
  },
  {
    id: 3,
    banner: FullTime,
    title: "Full Time",
    color: "#002351",
    onClick: () => console.log("Clicked"),
  },
  {
    id: 4,
    banner: PartTime,
    title: "Part Time",
    color: "#7538D9",
    onClick: () => console.log("Clicked"),
  },
];
