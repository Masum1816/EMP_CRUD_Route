import { Data } from "./helper";

const Category = () => {

    const category = Data("MyData");

    const categories = category.map((rec) => {
        return rec.empDepartement
    })

    const categoryData = new Set(categories);

    return Array.from(categoryData);

}

export default Category;