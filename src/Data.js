import {atom} from 'recoil'
export const DataState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: [
        {
            phone : '09299994312' ,
            firstName : 'Nguyen',
            lastName : 'Huy Giap' ,
            email : 'giapptit2102@gmail.com' 
        },
        {
            phone : '09299923412' ,
            firstName : 'Nguyen',
            lastName : 'Van Nam' ,
            email : 'Nam2102@gmail.com' 
        },
    ],
  });