import React from "react";


function UpcomingBatch(){
return(

    <div className="row pad_t50">
    <div className="col-lg-9 col-md-9 col-sm-12">
      <div className="row batchschedule">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="weekday one">
            <h5>Week Day Batches</h5>
            <div className="weekdate">(Mon-Fri)</div>
            <ul>
              <li>
                <img
                  src="images/datedoc.png"
                  alt="Week Day Batches"
                  className="weekdayicon"
                />
                <strong id="js-batch-0">25th Sept 2023</strong> Monday
              </li>
              <li>
                <img
                  src="images/timedoc.png"
                  alt="Week Day Batches"
                  className="weekdayicon"
                />
                <strong>8 AM (IST)</strong> 1hr-1:30hr / Per Session
              </li>
            </ul>
            <a
              href="#"
              className="reqbtn"
              data-toggle="modal"
              data-target="#get_trained"
            >
              Get Course Fees
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="weekday">
            <h5>Week Day Batches</h5>
            <div className="weekdate">(Mon-Fri)</div>
            <ul>
              <li>
                <img
                  src="images/datedoc.png"
                  alt="Week Day Batches"
                  className="weekdayicon"
                />
                <strong id="js-batch-1">27th Sept 2023</strong> Wednesday
              </li>
              <li>
                <img
                  src="images/timedoc.png"
                  alt="Week Day Batches"
                  className="weekdayicon"
                />
                <strong>10 AM (IST)</strong> 1hr-1:30hr / Per Session
              </li>
            </ul>
            <a
              href="#"
              className="reqbtn"
              data-toggle="modal"
              data-target="#get_trained"
            >
              Get Course Fees
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="weekday">
            <h5>Week Day Batches</h5>
            <div className="weekdate">(Mon-Fri)</div>
            <ul>
              <li>
                <img
                  src="images/datedoc.png"
                  alt="Week Day Batches"
                  className="weekdayicon"
                />
                <strong id="js-batch-2">29th Sept 2023</strong> Friday
              </li>
              <li>
                <img
                  src="images/timedoc.png"
                  alt="Week Day Batches"
                  className="weekdayicon"
                />
                <strong>12 PM (IST)</strong> 1hr-1:30hr / Per Session
              </li>
            </ul>
            <a
              href="#"
              className="reqbtn"
              data-toggle="modal"
              data-target="#get_trained"
            >
              Get Course Fees
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="weekday">
            <h5>Week End Batches</h5>
            <div className="weekdate">(Sat-Sun)</div>
            <ul>
              <li>
                <img
                  src="images/datedoc.png"
                  alt="Week Day Batches"
                  className="weekdayicon"
                />
                <strong id="js-batch-3">30th and 1st Sept 2023</strong>{" "}
                Sat-Sun
              </li>
              <li>
                <img
                  src="images/timedoc.png"
                  alt="Week Day Batches"
                  className="weekdayicon"
                />
                <strong>8 AM (IST)</strong> 1hr-1:30hr / Per Session
              </li>
            </ul>
            <a
              href="#"
              className="reqbtn"
              data-toggle="modal"
              data-target="#get_trained"
            >
              Get Course Fees
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center">
      <img
        src="images/upcomingright.svg"
        alt="AWS Upcoming Batch Schedule"
      />
      <h6>Can’t find a batch you were looking for?</h6>
      <a
        href="#"
        className="reqbtn"
        data-toggle="modal"
        data-target="#get_trained"
      >
        Request A Batch
      </a>
    </div>
  </div>



);




}

export default UpcomingBatch; 