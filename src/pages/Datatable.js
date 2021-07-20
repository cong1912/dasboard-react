import React from "react";
import Slider from "../components/Slider";

function Datatable() {
  return (
    <div className="main-container" id="container">
      <div className="overlay"></div>
      <div className="search-overlay"></div>
      <Slider />

      {/* <!--  BEGIN CONTENT AREA  --> */}
      <div id="content" className="main-content">
        <div className="layout-px-spacing">
          <div className="row layout-top-spacing">
            <div className="col-xl-12 col-lg-12 col-sm-12  layout-spacing">
              <div className="widget-content widget-content-area br-6">
                {/* <table
                  className="multi-table table table-hover"
                  style="width:100%"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Salary</th>
                      <th className="text-center  dt-no-sorting">Status</th>
                      <th className="text-center dt-no-sorting">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>$320,800</td>
                      <td>
                        <div
                          className="t-dot bg-primary"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Normal"
                        ></div>
                      </td>
                      <td className="text-center">
                        {" "}
                        <button className="btn btn-primary btn-sm">
                          view
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Cedric Kelly</td>
                      <td>Senior Javascript Developer</td>
                      <td>Edinburgh</td>
                      <td>22</td>
                      <td>$433,060</td>
                      <td>
                        <div
                          className="t-dot bg-warning"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Low"
                        ></div>
                      </td>
                      <td className="text-center">
                        {" "}
                        <button className="btn btn-primary btn-sm">
                          view
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Sonya Frost</td>
                      <td>Software Engineer</td>
                      <td>Edinburgh</td>
                      <td>23</td>
                      <td>$103,600</td>
                      <td>
                        <div
                          className="t-dot bg-secondary"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Medium"
                        ></div>
                      </td>
                      <td className="text-center">
                        {" "}
                        <button className="btn btn-primary btn-sm">
                          view
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Quinn Flynn</td>
                      <td>Support Lead</td>
                      <td>Edinburgh</td>
                      <td>22</td>
                      <td>$342,000</td>
                      <td>
                        <div
                          className="t-dot bg-danger"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="High"
                        ></div>
                      </td>
                      <td className="text-center">
                        {" "}
                        <button className="btn btn-primary btn-sm">
                          view
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Dai Rios</td>
                      <td>Personnel Lead</td>
                      <td>Edinburgh</td>
                      <td>35</td>
                      <td>$217,500</td>
                      <td>
                        <div
                          className="t-dot bg-primary"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Normal"
                        ></div>
                      </td>
                      <td className="text-center">
                        {" "}
                        <button className="btn btn-primary btn-sm">
                          view
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Gavin Joyce</td>
                      <td>Developer</td>
                      <td>Edinburgh</td>
                      <td>42</td>
                      <td>$92,575</td>
                      <td>
                        <div
                          className="t-dot bg-danger"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="High"
                        ></div>
                      </td>
                      <td className="text-center">
                        {" "}
                        <button className="btn btn-primary btn-sm">
                          view
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Martena Mccray</td>
                      <td>Post-Sales support</td>
                      <td>Edinburgh</td>
                      <td>46</td>
                      <td>$324,050</td>
                      <td>
                        <div
                          className="t-dot bg-secondary"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Medium"
                        ></div>
                      </td>
                      <td className="text-center">
                        {" "}
                        <button className="btn btn-primary btn-sm">
                          view
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Jennifer Acosta</td>
                      <td>Junior Javascript Developer</td>
                      <td>Edinburgh</td>
                      <td>43</td>
                      <td>$75,650</td>
                      <td>
                        <div
                          className="t-dot bg-danger"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="High"
                        ></div>
                      </td>
                      <td className="text-center">
                        {" "}
                        <button className="btn btn-primary btn-sm">
                          view
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Shad Decker</td>
                      <td>Regional Director</td>
                      <td>Edinburgh</td>
                      <td>51</td>
                      <td>$183,000</td>
                      <td>
                        <div
                          className="t-dot bg-warning"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Low"
                        ></div>
                      </td>
                      <td className="text-center">
                        {" "}
                        <button className="btn btn-primary btn-sm">
                          view
                        </button>{" "}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Salary</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </tfoot>
                </table> */}

                <table
                  className="multi-table table table-striped table-bordered table-hover non-hover"
                  style={{ width: 100 + "%" }}
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Progress</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Salary</th>
                      <th className="text-center dt-no-sorting">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Hermione Butler</td>
                      <td>Regional Director</td>
                      <td>
                        <div className="progress br-30">
                          <div
                            className="progress-bar br-30 bg-primary"
                            role="progressbar"
                            style={{ width: 29.56 + "%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td>London</td>
                      <td>47</td>
                      <td>$356,250</td>
                      <td className="text-center">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink11"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-more-horizontal"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink11"
                          >
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              View
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>Hermione Butler</td>
                      <td>Regional Director</td>
                      <td>
                        <div className="progress br-30">
                          <div
                            className="progress-bar br-30 bg-primary"
                            role="progressbar"
                            style={{ width: 29.56 + "%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td>London</td>
                      <td>47</td>
                      <td>$356,250</td>
                      <td className="text-center">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink11"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-more-horizontal"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink11"
                          >
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              View
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Progress</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Salary</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className="footer-section f-section-1">
            <p className="">
              Copyright © 2021{" "}
              <a target="_blank" href="https://designreset.com">
                DesignReset
              </a>
              , All rights reserved.
            </p>
          </div>
          <div className="footer-section f-section-2">
            <p className="">
              Coded with{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
      {/* <!--  END CONTENT AREA  --> */}
    </div>
  );
}

export default Datatable;
