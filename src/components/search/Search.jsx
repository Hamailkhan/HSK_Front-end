import { SearchOutlined } from "@ant-design/icons";
import Button from "../button/Button";

const Search = () => {
  return (
    <>
      <div
        className="search-container"
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <select
          name="select-category"
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            border: "1px solid #aaa",
            borderRadius: "5px",
            height: "47px",
            background: "#f4f4f4",
            width: "16%",
          }}
          defaultValue="Select Category"
        >
          <option value="">All</option>
          <option value="">Select a category 1</option>
          <option value="">Select a category 2</option>
        </select>
        <input
          type="search"
          className="search-input"
          placeholder="Search Item..."
          style={{
            padding: "15px",
            fontSize: "16px",
            border: "1px solid #aaa",
            borderRadius: "5px",
            width: "60%",
            height: "47px",
            fontWeight: "600",
            letterSpacing: "1px",
            background: "#f4f4f4",
          }}
        />
        <Button className="search-button">
          <SearchOutlined />
        </Button>
      </div>
    </>
  );
};

export default Search;
