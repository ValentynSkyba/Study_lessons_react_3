import { useState } from "react";
import usersData from "../../assets/users.json";
import List from "./List";
import Filters from "./Filters";

const Emploees = () => {
  const [users, setUsers] = useState(usersData);
  const [searchStr, setSearchStr] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [activeSkill, setActiveSkill] = useState("all");

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateBio = (id) => {
    console.log(id);
    setUsers((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, bio: prompt("Enter new bio:") } : item
      )
    );
  };

  const getFilteredData = () => {
    return users
      .filter((user) =>
        user.name.toLowerCase().includes(searchStr.toLowerCase())
      )

      .filter((user) => (isAvailable === false ? user : user.isOpenToWork))

      .filter((user) =>
        activeSkill === "all" ? user : user.skills.includes(activeSkill)
      );
  };

  const FilteredData = getFilteredData();

  return (
    <div>
      <Filters
        searchStr={searchStr}
        isAvailable={isAvailable}
        onChangeAvailable={setIsAvailable}
        setSearchStr={setSearchStr}
        activeSkill={activeSkill}
        onChangeActiveSkill={setActiveSkill}
      />
      <h1>{searchStr}</h1>
      <List
        users={FilteredData}
        onDelete={handleDeleteUser}
        onUpdate={handleUpdateBio}
      />
    </div>
  );
};

export default Emploees;
