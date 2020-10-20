import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'food',
    note: '',
    amount : 35,
    createdAt: 0
},{
    id: '2',
    description: 'insurance',
    note: '',
    amount : 200,
    createdAt: moment(0).subtract(4,'days').valueOf()
},
{
    id: '3',
    description: 'gas',
    note: '',
    amount : 140,
    createdAt: moment(0).add(4,'days').valueOf()
}]

export default expenses;