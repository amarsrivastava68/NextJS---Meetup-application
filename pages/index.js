import MeetupList from '../components/meetups/MeetupList'

const dummy = [

    {
        id : 'm1' , 
        title : 'first meetup ' , 
        image : 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Glimpses_of_the_new_Parliament_Building%2C_in_New_Delhi_%282%29.jpg' ,
        address : 'some address 23423 ' , 
        description : ' thistisdflsdfweor023840293'

    } , 
    {
        id : 'm2' , 
        title : 'first meetup ' , 
        image : 'https://picsum.photos/id/237/200/300' ,
        address : 'some address 23423 ' , 
        description : ' thistisdflsdfweor023840293'

    } , 
    {
        id : 'm3' , 
        title : 'first meetup ' , 
        img : 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Glimpses_of_the_new_Parliament_Building%2C_in_New_Delhi_%282%29.jpg' ,
        address : 'some address 23423 ' , 
        description : ' thistisdflsdfweor023840293'

    } 
    
]

const homepage = () =>
{


return <MeetupList meetups = {dummy} />

}

export default homepage