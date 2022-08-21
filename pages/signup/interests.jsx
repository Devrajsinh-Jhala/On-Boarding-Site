/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import Error from '../../components/common/InputError';
import classNames from '../../utils/constants/classNames';
import { setRoles } from '../../store/slices/user';

const Interests = () => {
  const dispatch = useDispatch();
  const [next, setNextpage] = useState(false);
  const [roles, setNewRoles] = useState([]);
  const router = useRouter();
  const [dataSet, setDataSet] = useState([
    { name: 'Community Manager' },
    { name: 'Entrepreneur in Residence ' },
    { name: 'Sales & Marketing' },
    { name: 'Research Fellow' },
    { name: 'Biomedical Engineer' },
    { name: 'Biochemist' },
    { name: 'Microbiologist' },
    { name: 'Blockchain Developer' },
    { name: 'Product Designer' },
    { name: 'Fullstack Developer' },
    { name: 'Content Writer' },
    { name: 'Human Resources(HR)' },
    { name: 'Graphic Designer' },
    { name: 'Digital Marketing' },
    { name: 'DevOps Engineer' },
    { name: 'Product Manager' },
    { name: 'Business Development' },
    { name: 'Software Developer' },
    { name: 'Not Sure Yet' },
  ]);

  const [validation, setValidation] = useState(false);

  const [totalSelectedItems, setTotalSelectedItems] = useState(0);
  const [autocomplete, setAutocomplete] = useState({
    disabled: true,
    data: [],
  });
  const [inputValue, setInputValue] = useState('');

  const updateItems = (itemName) => {
    const index = roles.findIndex((x) => x === itemName);
    const temp = [...roles];

    if (index >= 0) {
      temp.splice(index, 1);
      setNewRoles(temp);
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
        setNewRoles(temp);
        flag = 1;
        break;
      }
      flag = 0;
    }
    if (flag === 0) {
      temp.push(itemName);
      setNewRoles(temp);
      const newData = [...dataSet];
      newData.push({ name: itemName });

      setDataSet(newData);
    }
    // console.log(roles);
    setInputValue('');
    setAutocomplete({
      disabled: true,
      data: [],
    });
  };

  useEffect(() => {
    setTotalSelectedItems(roles.length);
  }, [roles]);

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

  const handleSetErrors = (field, value) =>
    setErrors((f) => ({ ...f, [field]: value }));

  const checkErrorsExist = (exists) => {
    if (roles.length >= 2) {
      setValidation(true);
      setNextpage(true);
      handleSetErrors('rolesError', '');
    } else {
      setValidation(false);
      setNextpage(false);
      handleSetErrors('rolesError', 'Please select atleast 2 roles');
    }
  };

  const [errors, setErrors] = useState({
    rolesError: 'Please select atleast 2 roles',
    otpLoad: '',
  });
  useEffect(() => checkErrorsExist(), [roles]);
  function nextPage() {
    // console.log(roles);
    dispatch(setRoles(roles));

    setTimeout(() => {
      router.push('/signup/experience');
    }, 500);
  }

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

      <div className="w-[60%] self-center px-4 py-6 overflow-y-scroll h-full md:px-20 2xl:h-screen 2xl:my-20">
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
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
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

        <div
          className="w-full
         max-w-xl my-auto mt-8"
        >
          <div className="">
            <p className="mb-2 font-semibold text-md">
              Which of these roles are you most interested in?
            </p>

            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 my-2 text-sm text-gray-600 border border-gray-300 rounded-md outline-none"
                placeholder="Example: Sales, Marketing..."
                value={inputValue}
                onChange={handleInputValueChange}
              />
              {errors.rolesError && <Error error={errors.rolesError} />}
              <div
                className={`${
                  autocomplete.disabled ? 'hidden' : ''
                } max-h-64 overflow-y-scroll absolute z-10 border rounded-md border-gray-300 py-1 bg-white ml-1`}
                style={{ width: 'calc(100% + 20px)' }}
              >
                {autocomplete.data.map((item, index) => (
                  <button
                    type="button"
                    key={index}
                    className="flex items-center w-full h-8 px-3 text-sm font-medium text-left cursor-pointer hover:bg-gray-100"
                    onClick={() => updateItems(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="mt-1 h-full scrollbar-hide">
                {dataSet.map((item, index) => {
                  const i = roles.findIndex((x) => x === item.name);
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
                <a>
                  <button
                    onClick={nextPage}
                    type="button"
                    className="p-3 mt-3 bg-black text-white rounded-md text-sm font-medium disabled:bg-gray-600 disabled:cursor-not-allowed w-40 disabled:bg-opacity-50"
                    disabled={!next}
                  >
                    Next
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
