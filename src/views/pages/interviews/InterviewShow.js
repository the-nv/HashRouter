import Utils from './../../../services/Utils.js'

let getInterview = async (id) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    try {
        const response = await fetch('http://localhost:3000/api/v1/interviews/' + id, options)

        const json = await response.json();
        console.log(json)
        return json["interview"]
    } catch (err) {
        console.log('Error Getting Interview Schedules', err)
    }
}

let InterviewShow = {
    render : async () => {
        let request = Utils.parseRequestURL()
        let interview = await getInterview(request.id)

        return /*html*/`
            <strong>Interviewer Details</strong>
            <p>Name: ${interview["interviewer"]["name"]}</p>
            <p>Email: ${interview["interviewer"]["email"]}</p>

            <strong>Candidate Details</strong>
            <p>Name: ${interview["candidate"]["name"]}</p>
            <p>Email: ${interview["candidate"]["email"]}</p>

            <strong>Interview Details</strong>
            <p>Date: ${interview["interview_date"]}</p>
            <p>Start Time: ${interview["start_time"]}</p>
            <p>End Time: ${interview["end_time"]}</p>
        `
    },
    after_render: async () => { }
}

export default InterviewShow;