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
            name:'programType',
            title:'Program Type',
            type: 'string',
            options: {
                list: [
                    'University',
                    'Bootcamp',
                    'Online Course'
                ]
            }
        },
        {
            name:'school',
            title:'School',
            type:'string'
        },
        {
            name:'schoolImg',
            title:'School Logo',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name:'degree',
            title:'Degree',
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