import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const jobs = [
  {
    id: 1,
    img: '360.png',
    company: 'Crypto.com',
    rating: '4.4',
    tag: 'PM',
    title: 'Product Manager',
    date: '1 day ago',
    location: 'Singapore',
    salary: 'S$5,000 - S$7,000 / mth',
    skill: 'Strategy'
  },
  {
    id: 2,
    img: '4637.png',
    company: 'Verily',
    rating: '3.2',
    tag: 'Data Eng',
    title: 'Data Engineer',
    date: '1 day ago',
    location: 'Malaysia',
    salary: 'RM7,000 - RM10,000 / mth',
    skill: 'AWS'
  },
  {
    id: 3,
    img: '167.png',
    company: 'GovTech',
    rating: '4',
    tag: 'Data Sci',
    title: 'Data Scientist',
    date: '1 day ago',
    location: 'Singapore',
    salary: 'S$9,000 - S$10,000 / mth',
    skill: 'Analytics'
  },
  {
    id: 4,
    img: '1072.png',
    company: 'Avanade',
    rating: '4',
    tag: 'Backend',
    title: 'Back-End Developer',
    date: '2 days ago',
    location: 'Malaysia',
    salary: 'RM5,500 - RM7,500 / mth',
    skill: 'Container'
  },
  {
    id: 5,
    img: '378.png',
    company: 'Dyson',
    rating: '3',
    tag: 'DevOps',
    title: 'DevOps Engineer',
    date: '2 days ago',
    location: 'Singapore',
    salary: 'S$5,238 - S$8,214 / mth',
    skill: 'GitLab'
  },
  {
    id: 6,
    img: '1035.png',
    company: 'HCLTech',
    rating: '3.6',
    tag: 'Fullstack',
    title: 'Software Engineer',
    date: '3 days ago',
    location: 'Singapore',
    salary: 'S$7,000 - S$9,000 / mth',
    skill: 'Next.js'
  }
];

function JobsList() {
  const [currentJob, setCurrentJob] = useState(jobs);

  return (
    <div className="h-full bg-[#f3f2ef] lg:h-screen">
      <div className="flex h-full flex-col lg:grid lg:grid-cols-2">
        <div className="lg:no-scrollbar mb-14 lg:mb-8 lg:overflow-auto">
          {jobs.map((job) => (
            <div
              tabindex="0"
              className="mb-2.5 ml-4 mr-3 flex h-40 rounded-lg border-2 border-[#deddda] bg-white p-4 transition duration-200 first:mt-8 last:mb-1 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#dbdad7] lg:ml-[100px] lg:mr-[100px] lg:focus:ring-2 lg:focus:ring-[#1fc76a]"
              onClick={() => {
                setCurrentJob(job);
                if (window.innerWidth < 1024) {
                  window.open(
                    'https://nodeflair.com/companies/' +
                      job.company.toLowerCase().replace('.', '-')
                  );
                }
              }}
            >
              <img src={job.img} alt="" className="mr-3 h-11 rounded" />

              <div className="w-full">
                <div className="text-sm">
                  {job.company} &nbsp;{job.rating} &#9733;
                  <span className="float-right rounded border-none bg-[#ddf7e9] px-[7.5px] py-[4.5px] font-semibold text-[#1fc76a]">
                    {job.tag}
                  </span>
                </div>

                <div className="text-base font-bold">{job.title}</div>

                <div className="text-sm font-bold text-[#1fc76a]">
                  {job.date}&nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: '#838383' }}
                  />
                  <span className="text-sm font-normal text-[#838383]">
                    &nbsp;{job.location}
                  </span>
                </div>

                <div className="text-sm font-medium leading-8">
                  {job.salary}
                  <span className="ml-1.5 rounded bg-[#f1f1f1] px-[6.5px] pb-[2px] font-normal ">
                    EST
                  </span>
                </div>

                <hr className="mb-[5.5px] ml-[-55px] mt-1 h-[1.25px] bg-[#ececec]"></hr>
                <span className="ml-[-55px] rounded bg-[#f1f1f1] px-[7px] pb-[4px] pt-[1.5px] text-sm font-semibold text-[#838383]">
                  {job.skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:my-8 lg:ml-[-80px] lg:mr-[100px] lg:flex lg:rounded-lg lg:border-2 lg:border-[#deddda] lg:bg-white lg:pl-5 lg:pt-4">
          {currentJob.title}
        </div>
      </div>
    </div>
  );
}

export default JobsList;
