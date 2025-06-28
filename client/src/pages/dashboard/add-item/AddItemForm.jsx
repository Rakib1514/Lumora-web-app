import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AddItemForm = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const axiosSecure = useAxiosSecure();

  const { data: categories, isLoading: categoriesFetchLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("/categories");
      if (!res.data.success) {
        console.log("Internal server Error");
      }
      return res.data.categories;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    let { category, ...newItem } = data;

    try {
      if (newCategoryName) {
        const res = await axiosSecure.post("/categories", {
          name: newCategoryName,
        });
        category = res.data.newCategory._id;
      }

      setSuccessMsg("");
      setErrorMsg("");

      const res = await axiosSecure.post("/items", { ...newItem, category });
      console.log(res.data);
      setSuccessMsg("Item added successfully!");
      reset();
      setIsAddingCategory(false);
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to add item. Please try again.");
    }
  };

  if (categoriesFetchLoading) {
    return <span>Loading categories...</span>;
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-gray-50 py-8">
      <div className="w-full px-6">
        <div className="max-w-4xl mx-auto shadow-lg bg-white rounded-xs w-full">
          <div className="p-8">
            <h4 className="text-2xl uppercase font-semibold text-center pb-6">
              Add New Item
            </h4>

            {successMsg && (
              <p className="text-green-600 text-center mb-4">{successMsg}</p>
            )}
            {errorMsg && (
              <p className="text-red-600 text-center mb-4">{errorMsg}</p>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Two-column grid for selected fields */}
              <div className="grid grid-cols-2 gap-4">
                {/* Title */}
                <div className="flex flex-col-reverse gap-2">
                  <input
                    id="title"
                    {...register("title", { required: "Title is required" })}
                    className={`peer outline-1 px-2 py-3 w-full focus:outline-primary ${
                      errors.title ? "outline-red-500" : "outline-gray-300"
                    }`}
                  />
                  <label
                    htmlFor="title"
                    className="text-gray-700 peer-focus:text-primary transition-colors"
                  >
                    Title
                  </label>
                  {errors.title && (
                    <p className="text-red-500 text-sm">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* Price */}
                <div className="flex flex-col-reverse gap-2">
                  <input
                    type="number"
                    id="price"
                    {...register("price")}
                    placeholder="0.00"
                    className="peer outline-1 px-2 py-3 w-full focus:outline-primary outline-gray-300"
                  />
                  <label
                    htmlFor="price"
                    className="text-gray-700 peer-focus:text-primary transition-colors"
                  >
                    Price (USD)
                  </label>
                </div>

                {/* Stock */}
                <div className="flex flex-col-reverse gap-2">
                  <input
                    type="number"
                    id="stock"
                    {...register("stock", {
                      required: "Stock is required",
                      min: { value: 0, message: "Stock cannot be negative" },
                    })}
                    className={`peer outline-1 px-2 py-3 w-full focus:outline-primary ${
                      errors.stock ? "outline-red-500" : "outline-gray-300"
                    }`}
                  />
                  <label
                    htmlFor="stock"
                    className="text-gray-700 peer-focus:text-primary transition-colors"
                  >
                    Stock
                  </label>
                  {errors.stock && (
                    <p className="text-red-500 text-sm">
                      {errors.stock.message}
                    </p>
                  )}
                </div>

                {/* Material */}
                <div className="flex flex-col-reverse gap-2">
                  <select
                    id="material"
                    {...register("material", {
                      required: "Material is required",
                    })}
                    className={`peer outline-1 px-2 py-3 w-full focus:outline-primary ${
                      errors.material ? "outline-red-500" : "outline-gray-300"
                    }`}
                  >
                    <option value="">Select Material</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="diamond">Diamond</option>
                    <option value="platinum">Platinum</option>
                    <option value="bronze">Bronze</option>
                  </select>
                  <label
                    htmlFor="material"
                    className="text-gray-700 peer-focus:text-primary transition-colors"
                  >
                    Material
                  </label>
                  {errors.material && (
                    <p className="text-red-500 text-sm">
                      {errors.material.message}
                    </p>
                  )}
                </div>

                {/* Brand */}
                <div className="flex flex-col-reverse gap-2">
                  <input
                    id="brand"
                    {...register("brand")}
                    className="peer outline-1 px-2 py-3 w-full focus:outline-primary outline-gray-300"
                  />
                  <label
                    htmlFor="brand"
                    className="text-gray-700 peer-focus:text-primary transition-colors"
                  >
                    Brand
                  </label>
                </div>

                {/* Artist */}
                <div className="flex flex-col-reverse gap-2">
                  <input
                    id="artist"
                    {...register("artist")}
                    className="peer outline-1 px-2 py-3 w-full focus:outline-primary outline-gray-300"
                  />
                  <label
                    htmlFor="artist"
                    className="text-gray-700 peer-focus:text-primary transition-colors"
                  >
                    Artist
                  </label>
                </div>
              </div>

              {/* Full-width fields */}
              {/* Description */}
              <div className="flex flex-col-reverse gap-2">
                <textarea
                  id="description"
                  rows={3}
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className={`peer outline-1 px-2 py-3 w-full focus:outline-primary resize-none ${
                    errors.description ? "outline-red-500" : "outline-gray-300"
                  }`}
                ></textarea>
                <label
                  htmlFor="description"
                  className="text-gray-700 peer-focus:text-primary transition-colors"
                >
                  Description
                </label>
                {errors.description && (
                  <p className="text-red-500 text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Image URLs */}
              <div className="flex flex-col-reverse gap-2">
                <input
                  id="image"
                  {...register("image")}
                  placeholder="Comma-separated URLs"
                  className="peer outline-1 px-2 py-3 w-full focus:outline-primary outline-gray-300"
                />
                <label
                  htmlFor="image"
                  className="text-gray-700 peer-focus:text-primary transition-colors"
                >
                  Image URLs
                </label>
              </div>

              {/* Category */}
              <div className="flex flex-col-reverse gap-2">
                {!isAddingCategory ? (
                  <select
                    id="category"
                    {...register("category", {
                      required: "Category is required",
                    })}
                    onChange={(e) => {
                      if (e.target.value === "__new") {
                        setIsAddingCategory(true);
                      }
                    }}
                    className={`peer outline-1 px-2 py-3 w-full focus:outline-primary ${
                      errors.category ? "outline-red-500" : "outline-gray-300"
                    }`}
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option
                        key={cat._id}
                        value={cat._id}
                        className="capitalize"
                      >
                        {cat.name}
                      </option>
                    ))}
                    <option value="__new" className="italic">
                      + Add new category…
                    </option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="Enter new category"
                    className="peer outline-1 px-2 py-3 w-full focus:outline-primary outline-gray-300"
                  />
                )}

                <label
                  htmlFor="category"
                  className="text-gray-700 peer-focus:text-primary transition-colors"
                >
                  Category
                </label>
                {errors.category && !isAddingCategory && (
                  <p className="text-red-500 text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="text-end mt-10">
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-xs"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemForm;
