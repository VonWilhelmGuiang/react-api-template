/*
    params
        email_address  
            : string
*/
export const validEmail  = (email_address = '') => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email_address)?false :  true;