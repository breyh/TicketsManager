import React from "react";

const Event = (props) => {
    const handleEvent = (e) => {
        try {
            const event = e.target.value;
            console.log('the event is ' + event);
        } catch (err) {
            console.log('err');
        }
    }
    const eventDetail = props.eventData.map((data, idx) => (
        <tr onClick={handleEvent} key={idx + 1}>
            <td>{idx + 1}</td>
            <td>{data.motivo}</td>
            <td>{data.pais}</td>
            <td>{data.maquina}</td>
            <td>{data.description}</td>
            <td>{data.place}</td>
            <td>{data.area}</td>
            <td>{data.fecha}</td>
            <td>{data.status}</td>
            <td>{data.asign}</td>
            <td><i className="fas fa-ellipsis-v"></i></td>
        </tr>
    ));

    console.log(eventDetail);
    return (
        <tbody>
            {eventDetail}
        </tbody>
    )
}

export default Event;