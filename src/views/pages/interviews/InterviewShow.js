import Utils from './../../../services/Utils.js'

let getInterview = async (id) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    try {
        const response = await fetch('https://5bb634f6695f8d001496c082.mockapi.io/api/posts/' + id, options)

        const json = await response.json();
        return json
    } catch (err) {
        console.log('Error Getting Interview Schedules', err)
    }
}

let InterviewShow = {
    render : async () => {
        let request = Utils.parseRequestURL()
        let interview = await getInterview(request.id)

        retur /*html*/`
            <strong>Interview Details</strong>
            <p>Date: ${interview.interview_date}</p>
            <p>Start Time: ${interview.start_time}</p>
            <p>End Time: ${interview.end_time}</p>
        `
    },
    after_render: async () => { }
}

export default InterviewShow;