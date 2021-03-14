/* eslint-disable react/prop-types */
import React from 'react';
import Calendar from '../../components/Calendar/Calendar';
import LogInModal from '../../components/Login-modal';

function CalendarPage({ users }) {
  return (
    <>
      <LogInModal users={users} />
      <Calendar users={users} />
    </>
  );
}

export default CalendarPage;
