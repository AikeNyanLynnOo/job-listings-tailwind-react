const Card = ({ job, addFilter }) => {
  return (
    <div className="rounded-md shadow-lg bg-white py-5 px-8 block md:flex items-center mb-16 md:mb-5 card">
      <img src={job.logo} className="job-logo w-20 mr-6 mb-3 md:mb-0" alt={job.logo} />
      <div className="job-detail flex-grow">
        <div className="heading mb-3">
          <span className="company font-semibold text-sm mr-4">
            {job.company}
          </span>
          {job.new && (
            <span className="new text-white text-xs mr-2 py-1 px-3 rounded-xl">
              NEW!
            </span>
          )}
          {job.featured && (
            <span className="featured text-white text-xs py-1 px-3 rounded-xl">
              FEATURED
            </span>
          )}
        </div>
        <h1 className="position font-semibold mb-3">{job.position}</h1>
        <div className="footer mb-3">
          <span className="postedAt mr-2 text-sm">{job.postedAt}</span> {"."}
          <span className="contract mx-2 text-sm">{job.contract}</span> {"."}
          <span className="location ml-2 text-sm">{job.location}</span>
        </div>
      </div>
      <hr className="block md:hidden my-3 bg-gray-900"/>
      <ul className="job-categiries flex flex-wrap md:justify-center">
        <li
          className="rounded-sm tablet mr-3 my-2 p-2 text-sm font-semibold cursor-pointer inline"
          onClick={() => addFilter(job.role)}
        >
          {job.role}
        </li>
        <li
          className="rounded-sm tablet mr-3 my-2 p-2 text-sm font-semibold cursor-pointer inline"
          onClick={() => addFilter(job.level)}
        >
          {job.level}
        </li>
        {job.languages.map((lang, idx) => {
          return (
            <li
              className="rounded-sm tablet mr-3 my-2 p-2 text-sm font-semibold cursor-pointer inline"
              key={idx}
              onClick={() => addFilter(lang)}
            >
              {lang}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Card;
