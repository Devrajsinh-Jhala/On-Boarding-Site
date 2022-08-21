/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import classNames from '../../utils/constants/classNames';
import { setSkills } from '../../store/slices/user';

const Skills = () => {
  const dispatch = useDispatch();
  const [skills, setNewSkills] = useState([]);
  const router = useRouter();

  const [dataSet, setDataSet] = useState([
    { name: 'MongoDB', selected: false },
    { name: 'Creative Writing', selected: false },
    { name: 'Blogging', selected: false },
    { name: 'Content Marketing', selected: false },
    { name: 'Public Speaking', selected: false },
    { name: 'Painting', selected: false },
    { name: 'Sales', selected: false },
    { name: 'Teaching', selected: false },
    { name: 'Acting', selected: false },
    { name: 'Interviewing', selected: false },
    { name: 'Investigative Reporting', selected: false },
    { name: 'Social Media Marketing', selected: false },
    { name: 'Video Making', selected: false },
    { name: 'Farm Operations', selected: false },
    { name: 'Crops Management', selected: false },
    { name: 'AutoCAD', selected: false },
    { name: 'Autodesk Revit', selected: false },
    { name: 'Project Management', selected: false },
    { name: 'Accounting', selected: false },
    { name: 'Bioinformatics', selected: false },
    { name: 'Biology', selected: false },
    { name: 'C', selected: false },
    { name: 'C#', selected: false },
    { name: 'Calligraphy', selected: false },
    { name: 'Data Analytics', selected: false },
    { name: 'Data Science', selected: false },
    { name: 'Economics', selected: false },
    { name: 'Embroidery making', selected: false },
    { name: 'Fashion Designing', selected: false },
    { name: 'Fashion Styling', selected: false },
    { name: 'Financial Modeling', selected: false },
    { name: 'History', selected: false },
    { name: 'Immunological Techniques', selected: false },
    { name: 'Internet of Things(IoT)', selected: false },
  ]);

  const [totalSelectedItems, setTotalSelectedItems] = useState(0);
  const [autocomplete, setAutocomplete] = useState({
    disabled: true,
    data: [],
  });
  const [inputValue, setInputValue] = useState('');

  const updateItems = (itemName) => {
    const index = skills.findIndex((x) => x === itemName);
    const temp = [...skills];
    if (index >= 0) {
      temp.splice(index, 1);
      setNewSkills(temp);
      setInputValue('');
      setAutocomplete({
        disabled: true,
        data: [],
      });
      return;
    }
    let flag;
    for (let i = 0; i < dataSet.length; i++) {
      if (dataSet[i].name === itemName && totalSelectedItems < 7) {
        temp.push(itemName);
        setNewSkills(temp);
        flag = 1;
        break;
      }
      flag = 0;
    }
    if (flag === 0) {
      temp.push(itemName);
      setNewSkills(temp);
      const newData = [...dataSet];
      newData.push({ name: itemName });

      setDataSet(newData);
    }
    setInputValue('');
    setAutocomplete({
      disabled: true,
      data: [],
    });
  };

  useEffect(() => {
    setTotalSelectedItems(skills.length);
  }, [skills]);

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === '')
      setAutocomplete({ disabled: true, data: [] });
    else {
      const autocompleteData = [];
      const regex = new RegExp(e.target.value, 'i');

      dataSet.forEach((item) => {
        if (regex.test(item.name)) autocompleteData.push(item.name);
      });

      setAutocomplete({
        disabled: false,
        data: [e.target.value, ...autocompleteData],
      });
    }
  };

  const handleSubmit = () => {
    // console.log(skills);
    dispatch(setSkills(skills));

    setTimeout(() => {
      router.push('/signup/connect');
    }, 500);
  };

  return (
    <div className="flex w-screen h-screen overflow-y-hidden bg-white">
      <div
        className="w-[40%] flex flex-col justify-center !bg-bottom !bg-contain !bg-no-repeat"
        style={{
          background: '#eff2f6',

          backgroundImage: 'url(/images/modal-bottom.b7365c4c.png)',
        }}
      >
        <div className="px-10">
          <h6
            className="my-6 text-2xl font-semibold"
            style={{ lineHeight: '1.875rem' }}
          >
            Create Your Profile
          </h6>
          <p
            className="mb-4 text-sm"
            style={{ color: '#788699', marginTop: '.7rem' }}
          >
            Share your story here.
          </p>
        </div>
      </div>

      <div className="w-[60%] self-center px-4 py-6 overflow-y-scroll h-full md:px-20 2xl:h-[800px] 2xl:my-auto">
        <div className="">
          <div className="w-full max-w-xl pt-8" style={{ color: '#141820' }}>
            <div
              className={classNames('mt-10 flex items-center justify-between')}
            >
              <button type="button" onClick={() => router.back()}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png"
                  height={30}
                  width={30}
                  alt="back"
                  className="cursor-pointer"
                />
              </button>

              <div className="flex mx-auto">
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl pt-12 h-fit my-auto">
          <div className="">
            <p className="mb-2 font-semibold text-md">
              Rank your skills from the list below.
            </p>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 my-2 text-sm text-gray-600 border border-gray-300 rounded-md outline-none"
                placeholder="Example: Java, C++"
                value={inputValue}
                onChange={handleInputValueChange}
              />
              <div
                className={`${
                  autocomplete.disabled ? 'hidden' : ''
                } max-h-64 overflow-y-scroll absolute z-10 border rounded-md border-gray-300 py-1 bg-white ml-1`}
                style={{ width: 'calc(100% + 20px)' }}
              >
                {autocomplete.data.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    className="flex items-center w-full h-8 px-3 mt-1 text-sm font-medium cursor-pointer hover:bg-gray-100"
                    onClick={() => updateItems(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="mt-1">
                {dataSet.map((item, index) => {
                  const i = skills.findIndex((x) => x === item.name);
                  return (
                    <button
                      type="button"
                      key={index}
                      className="inline-block px-4 py-3 mb-3 mr-2 text-sm text-gray-500 border border-gray-300 rounded-full cursor-pointer select-none"
                      style={{
                        background: i >= 0 ? '#61a0ff' : '',
                        color: i >= 0 ? '#fff' : '',
                      }}
                      onClick={() => updateItems(item.name)}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="p-3 mt-3 bg-signup-blue text-white rounded-md text-sm font-medium w-40"
                  onClick={handleSubmit}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="">
    //   <p className="mb-2 font-semibold text-md">
    //     Rank your skills from the list below.
    //   </p>
    //   <div className="relative" style={{ width: '464px' }}>
    //     <input
    //       type="text"
    //       className="w-full px-4 py-2 my-2 text-sm text-gray-600 border border-gray-300 rounded-md outline-none"
    //       placeholder="Example: Java, C++"
    //       value={inputValue}
    //       onChange={handleInputValueChange}
    //     />
    //     <div
    //       className={`${
    //         autocomplete.disabled ? 'hidden' : ''
    //       } max-h-64 overflow-y-scroll absolute z-10 border rounded-md border-gray-300 py-1 bg-white ml-1`}
    //       style={{ width: 'calc(100% + 20px)' }}
    //     >
    //       {autocomplete.data.map((item, index) => (
    //         <button
    //           key={index}
    //           type="button"
    //           className="flex items-center w-full h-8 px-3 mt-1 text-sm font-medium cursor-pointer // hover:bg-gray-100"
    //           onClick={() => updateItems(item)}
    //         >
    //           {item}
    //         </button>
    //       ))}
    //     </div>
    //     <div className="mt-1">
    //       {dataSet.map((item, index) => {
    //         const i = skills.findIndex((x) => x === item.name);
    //         return (
    //           <button
    //             type="button"
    //             key={index}
    //             className="inline-block px-4 py-3 mb-3 mr-2 text-sm text-gray-500 border border-gray-300 rounded-full cursor-pointer select-none //"
    //             style={{
    //               background: i >= 0 ? '#61a0ff' : '',
    //               color: i >= 0 ? '#fff' : '',
    //             }}
    //             onClick={() => updateItems(item.name)}
    //           >
    //             {item.name}
    //           </button>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Skills;
