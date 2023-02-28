export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
        {
            name: 'jobTitle',
            title:'Job Title',
            type:'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'resp',
            title:'Responsibilites',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name:'startDate',
            title:'Start Date',
            type: 'date',
            options: {
                dateFormat: 'MMM-YYYY'
            }
        },
        {
            name:'endDate',
            title:'End Date',
            type: 'date',
            options: {
                dateFormat: 'MMM-YYYY'
            }
        },
        {
            name: 'currentJob',
            title: 'Currently Employed Here?',
            type: 'boolean'
        }
    ]
}