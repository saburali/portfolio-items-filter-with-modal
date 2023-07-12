import React, {useState} from 'react';
import SimpleBar from "simplebar-react";

import Modal from 'react-bootstrap/Modal';
import { motion } from 'framer-motion';

// For Lightbox Gallery
import {
  LightgalleryProvider,
  LightgalleryItem,
} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Images
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.png';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';
import img11 from './images/11.jpg';
import img12 from './images/12.jpg';
import img13 from './images/13.jpg';
import img14 from './images/14.jpg';
import img15 from './images/15.jpg';
import img16 from './images/16.jpg';
import img17 from './images/17.jpg';
import img18 from './images/18.jpg';
import img19 from './images/19.jpg';
import img20 from './images/20.jpg';
import img21 from './images/21.jpg';
import img22 from './images/22.jpg';
import img23 from './images/23.jpg';
import img24 from './images/24.jpg';
import img25 from './images/25.jpg';

// Icons
import {GiClick} from "react-icons/gi";
import {IoIosEye} from "react-icons/io";
import {DiGithubBadge} from "react-icons/di";

const App = () => {
  // const [portfolioItem, setPortfolioItem] = useState([]);
  //
  // useEffect(() => {
  //     fetch('./portfolio.json')
  //         .then(res => res.json())
  //         .then(data => setPortfolioItem(data))
  // }, []);

  // Array Of Object (Data)
  const portfolioItem = {
    sec_title: 'Portfolio',
    destination: 'home',
    btn_txt: 'Home',
    sub_title: 'By clicking on the item according to the category, you will see the detailed information of the project',
    portfolioItems: [
      {
        id: 1,
        thumbTitle: "01 Items",
        projectName: "Project Name 01",
        image: img1,
        imageAlt: "Image 1",
        category: "backend",
        projectTags: ['arduino', 'electronic'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Chargviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Java",
                url: "#Java",
              },
              {
                tag: "React",
                url: "#React",
              },
              {
                tag: "VueJS",
                url: "#VueJS",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactJS",
                url: "#ReactJS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 2,
        thumbTitle: "02 Items",
        projectName: "Project Name 02",
        image: img2,
        imageAlt: "Image 2",
        category: "backend",
        link: "#2",
        projectTags: ['arduino', 'electronic'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি  (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascript",
                url: "#Javacript",
              },
              {
                tag: "React",
                url: "#React",
              },
              {
                tag: "okk",
                url: "#okk",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactJS",
                url: "#ReactJS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 3,
        thumbTitle: "03 Items",
        projectName: "Project Name 03",
        image: img3,
        imageAlt: "Image 3",
        category: "iot",
        link: "#3",
        projectTags: ['arduino', 'electronic'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "ci",
                url: "#ci",
              },
              {
                tag: "Javascript",
                url: "#Javacript",
              },
              {
                tag: "React",
                url: "#React",
              },
              {
                tag: "gu",
                url: "#gu",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactJS",
                url: "#ReactJS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 4,
        thumbTitle: "04 Items",
        projectName: "Project Name 04",
        image: img4,
        imageAlt: "Image 4",
        category: "electronics",
        link: "#4",
        projectTags: ['arduino', 'electronic'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 5,
        thumbTitle: "05 Items",
        projectName: "Project Name 05",
        image: img5,
        imageAlt: "Image 5",
        category: "backend",
        link: "#5",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে।করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascript",
                url: "#Javacript",
              },
              {
                tag: "C",
                url: "#C",
              },
              {
                tag: "ueJS",
                url: "#ueJS",
              },
              {
                tag: "C++",
                url: "#C++",
              },
              {
                tag: "eactJS",
                url: "#eactJS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 6,
        thumbTitle: "06 Items",
        projectName: "Project Name 06",
        image: img6,
        imageAlt: "Image 6",
        category: "frontend",
        link: "#6",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 7,
        thumbTitle: "07 Items",
        projectName: "Project Name 07",
        image: img7,
        imageAlt: "Image 7",
        category: "frontend",
        link: "#7",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 8,
        thumbTitle: "08 Items",
        projectName: "Project Name 08",
        image: img8,
        imageAlt: "Image 8",
        category: "iot",
        link: "#8",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 9,
        thumbTitle: "09 Items",
        projectName: "Project Name 09",
        image: img9,
        imageAlt: "Image 9",
        category: "electronics",
        link: "#9",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 10,
        thumbTitle: "10 Items",
        projectName: "Project Name 10",
        image: img10,
        imageAlt: "Image 10",
        category: "iot",
        link: "#10",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 11,
        thumbTitle: "11 Items",
        projectName: "Project Name 11",
        image: img11,
        imageAlt: "Image 11",
        category: "frontend",
        link: "#11",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 12,
        thumbTitle: "12 Items",
        projectName: "Project Name 12",
        image: img12,
        imageAlt: "Image 12",
        category: "backend",
        link: "#12",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 13,
        thumbTitle: "13 Items",
        projectName: "Project Name 13",
        image: img13,
        imageAlt: "Image 13",
        category: "frontend",
        link: "#13",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 14,
        thumbTitle: "14 Items",
        projectName: "Project Name 14",
        image: img14,
        imageAlt: "Image 14",
        category: "backend",
        link: "#14",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 15,
        thumbTitle: "15 Items",
        projectName: "Project Name 15",
        image: img15,
        imageAlt: "Image 15",
        category: "frontend",
        link: "#15",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 16,
        thumbTitle: "16 Items",
        projectName: "Project Name 16",
        image: img16,
        imageAlt: "Image 16",
        category: "backend",
        link: "#16",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 17,
        thumbTitle: "17 Items",
        projectName: "Project Name 17",
        image: img17,
        imageAlt: "Image 17",
        category: "frontend",
        link: "#17",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 18,
        thumbTitle: "18 Items",
        projectName: "Project Name 18",
        image: img18,
        imageAlt: "Image 18",
        category: "iot",
        link: "#18",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 19,
        thumbTitle: "19 Items",
        projectName: "Project Name 19",
        image: img19,
        imageAlt: "Image 19",
        category: "frontend",
        link: "#19",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 20,
        thumbTitle: "20 Items",
        projectName: "Project Name 20",
        image: img20,
        imageAlt: "Image 20",
        category: "graphics",
        link: "#20",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 21,
        thumbTitle: "21 Items",
        projectName: "Project Name 21",
        image: img21,
        imageAlt: "Image 21",
        category: "frontend",
        link: "#21",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 22,
        thumbTitle: "22 Items",
        projectName: "Project Name 22",
        image: img22,
        imageAlt: "Image 22",
        category: "graphics",
        link: "#22",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 23,
        thumbTitle: "23 Items",
        projectName: "Project Name 23",
        image: img23,
        imageAlt: "Image 23",
        category: "graphics",
        link: "#23",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 24,
        thumbTitle: "24 Items",
        projectName: "Project Name 24",
        image: img24,
        imageAlt: "Image 24",
        category: "iot",
        link: "#24",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
      {
        id: 25,
        thumbTitle: "25 Items",
        projectName: "Project Name 25",
        image: img25,
        imageAlt: "Image 25",
        category: "graphics",
        link: "#25",
        projectTags: ['html', 'css', 'javascript', 'php', 'react', 'vuejs'],
        portfolioModal: [
          {
            livePreview: "#",
            sourceCode: "#",
            companyName: "ITeach",
            startingDate: "15.07.2023",
            endingDate: "10.04.2025",
            challengingPart: ['x', 'y', 'z',],
            myOpinion: "matha kharap kora project",
            durationOfEmployment: "10 Days, 07 Month, 01 Years",
            projectDes: "ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে মেইন কোর্স ফিনিশ করা।",
            modalTags: [
              {
                tag: "Html",
                url: "#Html",
              },
              {
                tag: "Css",
                url: "#Css",
              },
              {
                tag: "Javascrip",
                url: "#Javacrip",
              },
              {
                tag: "Reac",
                url: "#Reac",
              },
              {
                tag: "VueJ",
                url: "#VueJ",
              },
              {
                tag: "Angular",
                url: "#Angular",
              },
              {
                tag: "ReactS",
                url: "#ReactS",
              },
            ],
            projectScreenshots: [img1, img2, img3, img4, img5, img6, img7, img8, img12, img12, img15, img20, img21, img14],
          },
        ],
      },
    ],
  }

  // Modal
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalThumbTitle, setModalThumbTitle] = useState("");
  const [modalProjectName, setModalProjectName] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [modalImageAlt, setModalImageAlt] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (content, thumbTitle, projectName, image, imageAlt) => {
    setModalContent(content);
    setModalThumbTitle(thumbTitle);
    setModalProjectName(projectName);
    setModalImage(image);
    setModalImageAlt(imageAlt);
    setShow(true);
  };

  // Portfolio Item Focus add/remove class in body
  const handleHover = () => {
    document.body.classList.add('portfolio-item-hovered');
  };

  const handleHoverLeave = () => {
    document.body.classList.remove('portfolio-item-hovered');
  };

  // Unique Filter Buttons (Main + Sub Filter)
  const [filterKey, setFilterKey] = useState('*');
  const [subFilterKey, setSubFilterKey] = useState('*');

  const uniqueCategories = [...new Set(portfolioItem.portfolioItems.map((item) => item.category))];
  const uniqueSubCategories = filterKey !== '*' ?
      [...new Set(portfolioItem.portfolioItems.filter((item) => item.category === filterKey).flatMap((item) => item.projectTags))] :
      [];

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    setSubFilterKey('*');
  };

  const handleSubFilterKeyChange = (key) => () => setSubFilterKey(key);

  const filteredData = portfolioItem.portfolioItems.filter((item) => {
    const itemCategoryMatches = filterKey === '*' || item.category === filterKey;
    const itemTagMatches = subFilterKey === '*' || item.projectTags.includes(subFilterKey);
    return itemCategoryMatches && itemTagMatches;
  });

  return (
      <>
        <div className="container-fluid">
            <div className="position-relative px-0-MIN768 portfolio-item-blur-0">
              <SimpleBar
                  style={{ height: '100vh' }}
                  forceVisible="y" autoHide={true}
              >
                <div className="overflow-hidden d-flex align-items-center min-vh-100 my-5 portfolio-section-loader">
                  <div className="container">
                    <h1 className="text-center mb-4">{portfolioItem.sub_title}</h1>

                    {/* Main Filter */}
                    <div className="d-flex justify-content-center portfolio-item-btn mb-3">
                      <ul className="d-flex list-unstyled">
                        <li className={filterKey === '*' ? 'active' : ''} onClick={handleFilterKeyChange('*')}>
                          Show All
                        </li>
                        {uniqueCategories.map((category) => (
                            <li
                                className={filterKey === category ? 'active' : ''}
                                onClick={handleFilterKeyChange(category)}
                                key={category}
                            >
                              {category}
                            </li>
                        ))}
                      </ul>
                    </div>

                    {/* Sub Filter */}
                    {filterKey !== '*' && (
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                          <div className="d-flex justify-content-center portfolio-item-sub-btn mb-3">
                            <ul className="d-flex list-unstyled">
                              <li className={subFilterKey === '*' ? 'active' : ''} onClick={handleSubFilterKeyChange('*')}>
                                Show All
                              </li>
                              {uniqueSubCategories.map((tag) => (
                                  <li
                                      className={subFilterKey === tag ? 'active' : ''}
                                      onClick={handleSubFilterKeyChange(tag)}
                                      key={tag}
                                  >
                                    {tag}
                                  </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                    )}

                    <div className="portfolio-items portfolio-items-size overflow-hidden">
                      <LightgalleryProvider>
                        {filteredData.map((item, index) => (
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -100, opacity: 0 }}
                                transition={{ duration: 0.4 }}

                                className={`filter-item ${item.category}`}
                                data-tags={item.projectTags.join(' ')}
                                key={item.thumbTitle}
                            >
                              <div
                                  className={`portfolio-item position-static ${item.category}`}
                                  onMouseEnter={handleHover}
                                  onMouseLeave={handleHoverLeave}
                                  key={index}
                              >
                                <div className="item-counter">
                                  <LightgalleryItem group="portfolio" src={item.image}>
                                    <img
                                        className="img-fluid"
                                        src={item.image}
                                        alt={item.imageAlt}
                                    />
                                  </LightgalleryItem>

                                  {/* Portfolio Hovered Content */}
                                  <div className="portfolio-item-content">
                                    <h3 className="thumb-title"> {item.thumbTitle} </h3>

                                    {/* Circle Button */}
                                    <div className="circle-container">
                                      <a className="text-decoration-none d-inline-block text-white" href={item.link}
                                         onClick={(e) => {
                                           e.preventDefault();
                                           handleShow(item.portfolioModal, item.thumbTitle, item.projectName, item.image, item.imageAlt);
                                         }}>
                                        <div className="circle">
                                          <GiClick className="fs-22" />
                                          <span className="fs-10 d-block text-uppercase"> details here </span>
                                        </div>
                                      </a>
                                    </div>

                                    {/* Project Tag */}
                                    <div className="tag-container">
                                      <p className="tags">
                                        <span>Tags</span>
                                        {item.portfolioModal[0].modalTags.map((tag, index) => (
                                            <a className="tag text-decoration-none h-mouse-pointer" href={tag.url} key={index}>
                                              {tag.tag}
                                            </a>
                                        ))}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                        ))}
                      </LightgalleryProvider>
                    </div>
                  </div>
                </div>
              </SimpleBar>
            </div>
        </div>

        <Modal
            centered
            show={show}
            backdrop="static"
            keyboard={false}
            onHide={handleClose}
            className="portfolio-modal"
        >
          <Modal.Header className="position-relative" closeButton>
            <Modal.Title> {modalThumbTitle} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="position-relative">
              <img className="img-fluid rounded-circle focus-img" src={modalImage} alt={modalImageAlt} />
            </div>

            <div className="position-relative">
              <h5 className="text-end">{modalProjectName}</h5>
            </div>

            {modalContent &&
            modalContent.map((project) => (
                <div key={project.projectName}>

                  <div className="d-flex justify-content-end text-end">
                    <div style={{transform: 'scale(0.8)', marginRight: '-28px'}}>
                      <a target="_blank" href={project.livePreview} className="icon-btn d-inline-block position-relative overflow-hidden text-decoration-none me-2">
                        <IoIosEye className="i" />
                        <span>Live Preview</span>
                      </a>
                      <a target="_blank" href={project.sourceCode} className="icon-btn d-inline-block position-relative overflow-hidden text-decoration-none">
                        <DiGithubBadge className="i" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>

                  <p> {project.companyName} </p>

                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <p className="m-0"> <strong className="min-w-110p d-inline-block"> Starting Date: </strong>  <span className="date"> {project.startingDate} </span>  </p>
                      <p className="m-0"> <strong className="min-w-110p d-inline-block"> Ending Date: </strong>  <span className="date"> {project.endingDate} </span> </p>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <p className="m-0"> {project.durationOfEmployment} </p>
                    </div>
                  </div>

                  <div className="challenging-part row g-0">
                    <strong className="col-3"> Difficult Part: </strong>
                    <div className="col-8 ml--3">
                      {project.challengingPart.map((challenge, index) => (
                          <span className="me-1 py-0" key={index}>
                                            {challenge}
                                        </span>
                      ))}
                    </div>
                  </div>

                  <div> <strong> My Opinion: </strong> {project.myOpinion} </div>

                  {/* Screenshots */}
                  <div className="challenging-part row g-0">
                    <strong> Screenshots: </strong>
                    <div className="project-screenshots mb-2">
                      <LightgalleryProvider>
                        {project.projectScreenshots.map((screenshot, index) => (
                            <LightgalleryItem group="group1" src={screenshot} key={index}>
                              <div className="images">
                                <img className="img-fluid h-mouse-pointer" src={screenshot} alt={screenshot} key={index} />
                              </div>
                            </LightgalleryItem>
                        ))}
                      </LightgalleryProvider>
                    </div>
                  </div>

                  <div className="mb-3 pb-3 border-0 border-bottom"> <strong> Project Details / Description: </strong> {project.projectDes}</div>

                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <strong
                          className="text-uppercase"
                          style={{'writingMode': 'vertical-rl', 'transform': 'rotate(178deg)'}}>
                        Tags
                      </strong>
                    </div>
                    <div className="flex-grow-1 ms-2 mt--4">
                      {project.modalTags.map((tag, index) => (
                          <a className="tag text-decoration-none text-uppercase btn btn-warning me-1 fs-12i d-inline-block mb-1" href={tag.url} key={index}>{tag.tag}</a>
                      ))}
                    </div>
                  </div>
                </div>
            ))}
          </Modal.Body>
        </Modal>
      </>
  );
}

export default App;
