import React from 'react';
import UserListContainer from '../containers/userlistcontainer';
import UserDetailContainer from '../containers/userdetailcontainer';
class MainComponent extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
                <div>userList:</div> 
                <UserListContainer> </UserListContainer>
                <hr></hr>
                <div>user Details(of the name clicked in list)</div>
                <UserDetailContainer> </UserDetailContainer>
             </div> 
             );
    }
}
 
export default MainComponent;