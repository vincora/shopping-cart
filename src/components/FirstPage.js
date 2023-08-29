import { useSelector } from "react-redux";
import Category from "./Category";
import CategoryForm from "./CategoryForm";
import ActionElement from "./ActionElement";
import { deleteCategory } from "../store/itemsSlice";
import { useDispatch } from "react-redux";
import { DeleteButton } from "./ActionElement";

const FirstPage = () => {
    const categories = useSelector((state) => state.goods.categories);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-xl font-medium text-center mb-4">
                Shopping assistant
            </h1>
            <div className="grow overflow-y-scroll flex flex-col items-center gap-3 ">
                {categories.map((category) => {
                    const onCategoryDelete = () => {
                        if (
                            !window.confirm(
                                `Do you want to delete ${category.category} category?`
                            )
                        ) {
                            return false;
                        }
                        dispatch(deleteCategory(category.id));
                    };
                    return (
                        <ActionElement
                            key={category.id}
                            onAction={onCategoryDelete}
                        >
                            <Category category={category} />
                            <DeleteButton onClick={onCategoryDelete} />
                        </ActionElement>
                    );
                })}
            </div>
            <div>
                <CategoryForm />
            </div>
        </div>
    );
};

export default FirstPage;
