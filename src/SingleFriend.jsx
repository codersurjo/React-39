
const SingleFriend = ({friend}) => {

    const {id,name,email} = friend;
    // console.log(friend);
    return (
        <div>
            <h5>id:{id}</h5>
            <h5>Name:{name}</h5>
            <h5>Email:{email}</h5>
            <p>-------------------</p>
        </div>
    );
};

export default SingleFriend;