const Schedule = require("../models/schedule.model.js");
const schedule = require("node-schedule");
const axios = require('axios');
const twilio = require("twilio");

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

let scheduleList = [];
// Create and Save a new Schedule (alternative method to register)
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Schedule
  const schedule = new Schedule({
    user_id: req.body.user_id,
    title: req.body.title,
    lead_id: req.body.lead_id,
    script_id: req.body.script_id,
    date: req.body.date,
  });

  // Save Schedule in the database
  Schedule.create(schedule, (err, data) => {
    if (err)
      res.send({
        message:
          err.message || "Some error occurred while creating the Schedule.",
        success: false,
      });
    else {
      res.send({
        message: data,
        success: true,
      });
      Schedule.getSchedules((err, scheduleList) => {
        if (err == null) {
          updateSchedule(scheduleList);
        }
      });
    }
  });
};

// Retrieve all Users from the database (with condition).
exports.findAll = (req, res) => {
  const user_id = req.query.user;

  Schedule.getAll(user_id, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
        success: false,
      });
    else res.send({ message: data, success: true });
  });
};

// Find a single Schedule by Id
exports.findOne = (req, res) => {
  Schedule.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Schedule with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Schedule with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Update a Schedule identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log({ object: req.body });
  Schedule.updateById(req.params.id, new Schedule(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Schedule with id ${req.params.id}.`,
          success: false,
        });
      } else {
        res.status(500).send({
          message: "Error updating Schedule with id " + req.params.id,
          success: false,
        });
      }
    } else res.send({ message: data, success: true });
  });
};

// Delete a Schedule with the specified id in the request
exports.delete = (req, res) => {
  Schedule.remove(req.query.title, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.send({
          message: `Not found Schedule with id ${req.params.id}.`,
          success: false,
        });
      } else {
        res.send({
          message: "Could not delete Schedule with id " + req.params.id,
          success: false,
        });
      }
    } else
      res.send({
        message: `Schedule was deleted successfully!`,
        success: true,
      });
  });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  Schedule.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while removing all users.",
      });
    else res.send({ message: `All Users were deleted successfully!` });
  });
};

// Create and Save a new Schedule (alternative method to register)
exports.insert = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
      success: false,
    });
    return;
  }

  // Create a Schedule
  const schedule = {
    user_id: req.body.user_id,
    title: req.body.title,
    schedule: req.body.schedule,
  };
  // Save Schedule in the database with upsert
  Schedule.insert(schedule, (err, data) => {
    if (err) {
      res.send({
        message:
          err.message || "Some error occurred while creating the Schedule.",
        success: false,
      });
    } else {
      res.send({ message: data, success: true });
    }
  });
};

exports.getDetail = (req, res) => {
  Schedule.getDetail(req.query.title, req.query.user_id, (err, data) => {
    console.log(req.query.title, req.query.user_id);
    if (err) {
      res.send({ message: err.message, success: false });
    } else {
      res.send({ message: data, success: true });
    }
  });
};

const updateSchedule = (scheduleListDB) => {
  scheduleList.forEach((sch) => {
    schedule.cancelJob(sch.job);
  });
  scheduleList = [];
  scheduleListDB.forEach((scheduleDB) => {
    const eventDate = new Date(scheduleDB.date.replace(" ", "T"));
    // Schedule the job
    const job = schedule.scheduleJob(eventDate, function () {
      if(scheduleDB.script == "") {
        client.messages
        .create({
          body: scheduleDB.sms,
          from: `+1${process.env.TWILIO_PHONE_NUMBER}`, // Your Twilio phone number
          to: "+1" + scheduleDB.phone_number, // The recipient's phone number
        })
        .then((message) => console.log(`SMS sent with SID: ${message.sid}`))
        .catch((error) => console.error(`Failed to send SMS: ${error}`));

      } else {
        const headers = {
          Authorization: process.env.BLAND_AUTH,
        };
        // Data
        const data = {
          phone_number: "+1" + scheduleDB.phone_number,
          from: "+17277611053",
          task: `${scheduleDB.script} \n replace [Law Firm Name] to ${scheduleDB.law_firm_name}, [Contact Name] to ${scheduleDB.person_name}, [your website URL] to ${scheduleDB.site}, [Main Problem] to ${scheduleDB.modifier}`,
          model: "enhanced",
          language: "en",
          voice: "nat",
          voice_settings: {},
          local_dialing: false,
          max_duration: 12,
          answered_by_enabled: false,
          wait_for_greeting: false,
          record: true,
          amd: false,
          interruption_threshold: 100,
          voicemail_message: null,
          temperature: null,
          transfer_list: {},
          metadata: {},
          pronunciation_guide: [],
          start_time: null,
          request_data: {},
          tools: [],
          webhook: "https://webhook.site/cf474280-e868-414d-b8b7-242149cedc6a",
          calendly: {},
        };
  
        //  API request
        axios
          .post("https://api.bland.ai/v1/calls", data, { headers })
          .then((response) => {
            console.log(response);
            if (response.data.status == "success") {
              Schedule.updateStatusById(scheduleDB.id, 1, response.data.call_id, (err, res) => {});
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });

    scheduleList.push({ job: job, id: scheduleDB.id });

  });
};
