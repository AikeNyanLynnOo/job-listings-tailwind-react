const FilterBar = ({ selected, removeCat, removeAll }) => {
  return (
    <div className="shadow-lg rounded-md w-11/12 md:w-10/12 min-h-20 bg-white p-5 px-8 items-center hidden md:flex filter-box">
      <ul className="flex-grow flex flex-wrap p-1">
        {selected.map((lang, index) => {
          return (
            <li className="rounded-sm tablet mr-3" key={index}>
              <span className="text-sm font-semibold py-2 px-2 box-border">
                {lang}
              </span>
              <span
                className="remove-btn inline-block px-1 rounded-r-sm cursor-pointer"
                onClick={() => removeCat(index)}
              >
                <img
                  src={"./images/icon-remove.svg"}
                  alt="icon-remove"
                  className="inline"
                />
              </span>
            </li>
          );
        })}
      </ul>
      <span
        className="underline font-semibold clear-btn text-xs cursor-pointer"
        onClick={removeAll}
      >
        Clear
      </span>
    </div>
  );
};
export default FilterBar;
