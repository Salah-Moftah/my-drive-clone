import {
  MdOutlineCreateNewFolder,
  MdUploadFile,
  MdDriveFolderUpload,
} from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";

export const sidebarList = [
  { id: 1, name: "Home", iconName: "home" },
  { id: 2, name: "My Drive", iconName: "folder" },
  { id: 3, name: "Computers", iconName: "cpu" },
  { id: 4, name: "Shared with Me", iconName: "share" },
  { id: 5, name: "Recent", iconName: "clock" },
  { id: 6, name: "Starred", iconName: "star" },
  { id: 7, name: "Spam", iconName: "alert-circle" },
  { id: 8, name: "Trash", iconName: "trash" },
  { id: 9, name: "Storage", iconName: "database" },
];

export const sidePanelIcons = [
  {
    id: 1,
    name: "Google_Calenda",
    h4: 'Calenda',
    h2: 'Thr, Jul 14',
    icon: "/imgs/Google_Calenda.svg.png",
    colorBackground: "blue",
  },
  {
    id: 2,
    name: "Google_Keep",
    h4: 'Keep',
    h2: 'Notes',
    icon: "/imgs/Google_Keep.svg.png",
    colorBackground: "yellow",
  },
  {
    id: 3,
    name: "Google_Tasks",
    h4: 'Tasks',
    h2: 'ToDo',
    icon: "/imgs/Google_Tasks_2021.svg.png",
    colorBackground: "blue",
  },
  {
    id: 4,
    name: "Google_Contacts",
    h4: '',
    h2: 'Contacts',
    icon: "/imgs/Google_Contacts_icon_(2022).svg",
    colorBackground: "blue",
  },
];

export const navList = [
  {
    id: 1,
    name: "offline",
    icon: "/imgs/offline.svg",
    colorBackground: "gary",
  },
  {
    id: 2,
    name: "help",
    icon: "/imgs/help.svg",
    colorBackground: "gary",
  },
  {
    id: 3,
    name: "settings",
    icon: "/imgs/settings.svg",
    colorBackground: "gary",
  },
  {
    id: 4,
    name: "apps",
    icon: "/imgs/apps.svg",
    colorBackground: "gray",
  },
];

export const filterList = [
  { id: 1, name: "Type" },
  { id: 2, name: "People" },
  { id: 3, name: "Modified" },
  { id: 4, name: "Source" },
];

export const fileList = [
  {
    id: 1,
    name: "CV-Salah Moftah.pdf",
    owner: "me",
    date: "Jul 3, 2024",
    size: "133 KB",
  },
  {
    id: 2,
    name: "CV-Salah Moftah.pdf",
    owner: "me",
    date: "Jul 3, 2024",
    size: "133 KB",
  },
  {
    id: 3,
    name: "CV-Salah Moftah.pdf",
    owner: "me",
    date: "Jul 3, 2024",
    size: "133 KB",
  },
  {
    id: 4,
    name: "CV-Salah Moftah.pdf",
    owner: "me",
    date: "Jul 3, 2024",
    size: "133 KB",
  },
  {
    id: 5,
    name: "CV-Salah Moftah.pdf",
    owner: "me",
    date: "Jul 3, 2024",
    size: "133 KB",
  },
  {
    id: 6,
    name: "CV-Salah Moftah.pdf",
    owner: "me",
    date: "Jul 3, 2024",
    size: "133 KB",
  },
];


export const dropdownItems = [
  {
    icon: <MdOutlineCreateNewFolder className="icon" />,
    title: "New folder",
    shortcut: "Alt+C then F",
  },
  { type: "divider" },
  {
    id: "file-upload",
    icon: <MdUploadFile className="icon" />,
    title: "File upload",
    shortcut: "Alt+C then U",
  },
  {
    icon: <MdDriveFolderUpload className="icon" />,
    title: "Folder upload",
    shortcut: "Alt+C then I",
  },
  { type: "divider" },
  {
    icon: <img src="/imgs/txt.png" className="icon" />,
    title: "Google Docs",
    arrow: <RiArrowRightSFill />,
  },
  {
    icon: <img src="/imgs/sheets.png" className="icon" />,
    title: "Google Sheets",
    arrow: <RiArrowRightSFill />,
  },
  {
    icon: <img src="/imgs/slides.png" className="icon" />,
    title: "Google Slides",
    arrow: <RiArrowRightSFill />,
  },
  {
    icon: <img src="/imgs/forms.png" className="icon" />,
    title: "Google Forms",
    arrow: <RiArrowRightSFill />,
  },
  {
    icon: <div className="icon" />,
    title: "More",
    arrow: <RiArrowRightSFill />,
  },
];