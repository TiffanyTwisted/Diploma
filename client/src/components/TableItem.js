import React from 'react';

const TableItem = ({record}) => {
    console.log("Выводится рекорд",{record})
    return (
        <tr>
        <td></td>
        <td>1s</td>
        <td>Otto</td>
        <td>{record.is_actived}</td>
      </tr>
    );
};

export default TableItem;
