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
        console.log(json["interviews"])
        return json["interviews"]
    } catch (err) {
        console.log('Error Getting Interview Schedules', err)
    }
}

let Interviews = {
    render : async () => {
        let interviews = await getInterviews()
        console.log("third")

        let view =  /*html*/`
            <table>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th colspan = "2">Interviewer Details</th>
                    <th colspan = "2">Candidate Details</th>
                    <th colspan="2"></th>
                </tr>

                ${interviews.map(interview => 
                    /*html*/`<tr>
                        <td>${interview["id"]}</td>
                        <td>${interview["interview_date"]}</td>
                        <td>${interview["start_time"]}</td>
                        <td>${interview["end_time"]}</td>
                        <td>${interview["interviewer"]["name"]}</td>
                        <td>${interview["interviewer"]["email"]}</td>
                        <td>${interview["candidate"]["name"]}</td>
                        <td>${interview["candidate"]["email"]}</td>
                        <td><a href = "#/interviews/${interview.id}">show</a></td>
                        <td><a href = "#/interviews/${interview.id}/edit">edit</a></td>
                    </tr>`
                    )}
            </table>
        `
        return view
    },

    after_render: async () => { }
}

export default Interviews;