import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Select, Space } from "antd";
import { useRef, useState } from "react";
import useCategories from "../../../hooks/useCategories";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddItemForm2 = () => {
  const [newCategory, setNewCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const { categories, isCategoriesLoading, refetchCategories } =
    useCategories();
  const axiosSecure = useAxiosSecure();

  // Add new Category functions onChange and on submit
  const onNewCategoryNameChange = (event) => {
    setNewCategory(event.target.value);
  };
  const addCategory = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axiosSecure.post("/categories", {
        name: newCategory,
      });

      console.log(newCategory, "response ==", res);

      setNewCategory("");
      refetchCategories();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Material select input options
  const materialsOptions = [
    // Popular
    { title: "Gold", value: "gold" },
    { title: "Diamond", value: "diamond" },
    { title: "Platinum", value: "platinum" },
    { title: "Pearl", value: "pearl" },
    { title: "Ruby", value: "ruby" },
    { title: "Emerald", value: "emerald" },
    { title: "Sapphire", value: "sapphire" },
    // The rest
    { title: "Polki", value: "polki" },
    { title: "Amethyst", value: "amethyst" },
    { title: "Zircon", value: "zircon" },
    { title: "Garnet", value: "garnet" },
    { title: "Agate", value: "agate" },
    { title: "Aquamarine", value: "aquamarine" },
    { title: "Alexandrite", value: "alexandrite" },
    { title: "Beryl", value: "beryl" },
    { title: "Malachite", value: "malachite" },
    { title: "Moonstone", value: "moonstone" },
    { title: "Morganite", value: "morganite" },
    { title: "Onyx", value: "onyx" },
    { title: "Opal", value: "opal" },
    { title: "Peridot", value: "peridot" },
    { title: "Tanzanite", value: "tanzanite" },
    { title: "Turquoise", value: "turquoise" },
    { title: "Aventurine", value: "aventurine" },
    { title: "Quartz", value: "quartz" },
    { title: "Coral", value: "coral" },
    { title: "Tourmaline", value: "tourmaline" },
  ];

  // Form Submit
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (isCategoriesLoading) {
    return <span>Loading</span>;
  }

  return (
    <div className="mt-12 bg-white p-6">
      <Form
        name="add-item"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        {/* First Row  Title, Artist, Brand input*/}
        <div className="flex gap-4">
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input Product Title!" }]}
            style={{ width: "100%" }}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Artist" name="artist" style={{ width: "50%" }}>
            <Input />
          </Form.Item>
          <Form.Item label="Brand" name="brand" style={{ width: "50%" }}>
            <Input />
          </Form.Item>
        </div>

        {/* 2nd Row Category input */}
        <div className="flex gap-4 *:w-full">
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please select a category" }]}
          >
            <Select
              loading={isCategoriesLoading}
              style={{ width: 300 }}
              placeholder="Select a category"
              popupRender={(menu) => (
                <>
                  {menu}
                  <Divider style={{ margin: "8px 0" }} />
                  <Space style={{ padding: "0 8px 4px" }}>
                    <Input
                      placeholder="Please enter new category"
                      ref={inputRef}
                      value={newCategory}
                      onChange={onNewCategoryNameChange}
                      onKeyDown={(e) => e.stopPropagation()}
                    />
                    <Button
                      type="text"
                      icon={<PlusOutlined />}
                      onClick={addCategory}
                      loading={isLoading}
                    >
                      Add item
                    </Button>
                  </Space>
                </>
              )}
              options={categories?.map((category) => ({
                label: category.name[0].toUpperCase() + category.name.slice(1),
                value: category._id,
              }))}
            />
          </Form.Item>
          <Form.Item
            label="Material"
            name="material"
            rules={[
              { required: true, message: "Please input share material used!" },
            ]}
          >
            <Select
              showSearch
              loading={isCategoriesLoading}
              placeholder="Select material used"
              options={materialsOptions}
            />
          </Form.Item>
        </div>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddItemForm2;
