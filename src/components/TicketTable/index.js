import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TicketTable = ({ tickets = [] }) => {
  return (
    <Table bordered striped size='sm' responsive='sm'>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Date of Opening</th>
        </tr>
      </thead>

      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <Link to={`/tickets/${row.id}`}>{row.subject}</Link>
              </td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan='4' className='text-center'>
              No tickets found.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TicketTable;
