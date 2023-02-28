export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name:'course',
            title:'Course',
            type:'string'
        },
        {
            name:'school',
            title:'School',
            type:'string'
        },
        {
            name:'programType',
            title:'Program Type',
            type:'string'
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
            name: 'languages',
            title: 'Languages',
           type:'array',
           of: [
             {
               name:'language',
               title:'Language',
               type:'string'
             }
           ]
        },
    ]
}