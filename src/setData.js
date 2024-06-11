// export const setData = (key, ref) => {
//     let refData;

//     if (ref && ref.length > 0) {
//         refData = ref;
//     } else {
//         refData = [];
//     }

//     localStorage.setItem(key, JSON.stringify(refData));
// };

export const setData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
