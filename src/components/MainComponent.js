import React from "react";
import Card from "./Card";
import FilterBar from "./FilterBar";

// const
import { JOBS } from "../shared/data";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
    this.removeCat = this.removeCat.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.addFilter = this.addFilter.bind(this);
  }

  removeCat(index) {
    this.setState({
      selected: this.state.selected.filter((lang, idx) => idx !== index),
    });
  }
  removeAll() {
    this.setState({
      selected: [],
    });
  }

  addFilter(lang) {
    const isExist = this.state.selected.find((lg) => lg === lang);
    if (!isExist) {
      this.setState({
        selected: [...this.state.selected, lang],
      });
    } else {
      return;
    }
  }

  checkFilter(filtersArr) {
    let checker = (arr, target) => target.every((v) => arr.includes(v));
    if (checker(filtersArr, this.state.selected)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let filteredJobs = JOBS.filter((job) => {
      if (this.checkFilter([job.role, job.level, ...job.languages])) {
        return true;
      } else {
        return false;
      }
    });
    const updateJobs = filteredJobs.length > 0 ? filteredJobs : JOBS;

    return (
      <div className="main">
        <div className="header">
          <img
            src={"./images/bg-header-desktop.svg"}
            alt="bg-header-desktop"
            className="bg-img"
          />
          {(this.state.selected.length > 0 && (
            <FilterBar
              selected={this.state.selected}
              removeCat={this.removeCat}
              removeAll={this.removeAll}
            />
          )) || <></>}
        </div>
        <div className="content pt-16 overflow-y-scroll">
          <ul className="w-11/12 md:w-10/12 mx-auto">
            {updateJobs.map((job, index) => {
              return (
                <li className="list-item" key={index}>
                  <Card job={job} addFilter={this.addFilter} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Main;
