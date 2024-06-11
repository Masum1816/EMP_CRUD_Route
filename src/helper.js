// export const Data = (key) => {

//     let data = JSON.parse(localStorage.getItem(key));

//     if(!data){
//         return [];
//     }

//     return data

// }

export const Data = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};
