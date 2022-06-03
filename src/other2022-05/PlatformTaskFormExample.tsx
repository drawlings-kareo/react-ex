import React, { ChangeEvent, useState, useEffect } from "react";
import {
  Box,
  TextField,
  /*DatePicker,
  Autocomplete,
  theme,*/
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

export interface User {
  userId: number;
  // userGuid: string;
  // userName: string;
  firstName: string;
  lastName: string;
  // gender?: null | string;
  // email: string;
  // password?: null | string;
  // hidden: boolean;
  // createdAt: Date;
  // updatedAt?: null | Date;
  // phoneNumber?: null | string;
  // phoneExtension?: null | string;
  // fax?: null | string;
  // npi?: null | string;
  // dea?: null | string;
  // stateLicense?: null | string;
  // roles: Role[];
  // pmUserId: number;
  // stub: boolean;
}

export interface Patient {
  patientId: number;
  firstName: string;
  lastName: string;
}

const faker = require("@faker-js/faker");

export default function PlatformTaskForm() {
  function loadUserData(): User[] {
    return Array.from(Array(50)).map(() => {
      return {
        userId: faker.datatype.number(100000),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      };
    });
  }

  function loadPatientData(): Patient[] {
    return Array.from(Array(50)).map(() => {
      return {
        patientId: faker.datatype.number(100000),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      };
    });
  }

  const [users, setUsers] = useState<User[]>([]);
  const [assignee, setAssignee] = useState<User | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDateValue, setDueDateValue] = useState<Date | string>("");
  const [dueDateError, setDueDateError] = useState<boolean>(false);
  const [patients, setPatients] = React.useState<Patient[]>([]);
  const [patient, setPatient] = useState<Patient | null>(null);

  function assigneeOnChange(newValue: User | null) {
    setAssignee(newValue);
  }

  function titleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function descriptionOnChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  function dueDateOnChange(newValue: Date | string) {
    setDueDateValue(newValue);
  }

  function dueDateOnError(reason: any, v: any) {
    setDueDateError(true);
  }

  function patientOnChange(newValue: Patient | null) {
    setPatient(newValue);
  }

  useEffect(() => {
    setUsers(loadUserData());
    setPatients(loadPatientData());
  }, []);

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    console.log("title", title);
    console.log("submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Box display="grid">
            <TextField label="Title" value={title} onChange={titleOnChange} required />
            <TextField label="Description" value={description} onChange={descriptionOnChange} multiline required />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} variant="text" color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}
