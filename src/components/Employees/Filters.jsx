const Filters = ({
  searchStr,
  setSearchStr,
  isAvailable,
  onChangeAvailable,
  activeSkill,
  onChangeActiveSkill,
}) => {
  const skill_list = ["all", "react", "vue", "angular"];
  return (
    <div>
      <h1>Filters</h1>
      <form>
        <label>
          <input
            className="input"
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
            type="text"
            placeholder="Search employees..."
          />
        </label>
        <label>
          <input
            checked={isAvailable}
            onChange={() => onChangeAvailable((prev) => !prev)}
            type="checkbox"
          />
          Show is open to work
        </label>

        <div>
          {skill_list.map((skill) => (
            <label key={skill}>
              <input
                type="radio"
                value={skill}
                checked={skill === activeSkill}
                onChange={() => onChangeActiveSkill(skill)}
                name="skills"
              />
              {skill}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Filters;
