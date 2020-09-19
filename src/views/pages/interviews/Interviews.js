import Utils from './../../../services/Utils.js'

let getInterviews = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    try {
        const response = await fetch('http://localhost:3000/api/v1/interviews', options)

        const json = await response.json();
        return json["data"]
    } catch (err) {
        console.log('Error Getting Interview Schedules', err)
    }
}

let Interviews = {
    render : async () => {
        let interviews = await getInterviews()

        let view =  /*html*/`
            <table>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th colspan="1"></th>
                </tr>

                ${interviews.map(interview => 
                    /*html*/`<tr>
                        <td>${interview["id"]}</td>
                        <td>${interview["interview_date"]}</td>
                        <td>${interview["start_time"]}</td>
                        <td>${interview["end_time"]}</td>
                        <td><a href = "#/interviews/${interview.id}">show</a></td>
                    </tr>`
                    )}
            </table>
        `
        return view
    },

    after_render: async () => { }
}

export default Interviews;