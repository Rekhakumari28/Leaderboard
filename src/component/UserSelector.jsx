import React from 'react'

function UserSelector({users, selectedUserId, setSelectedUserId, handleClaim}) {
    
  return (
    <div className='card p-2 mb-2'> 
      <h5>Select User</h5>
      <select className='form-select' onChange={(e)=>setSelectedUserId(e.target.value)}>
        <option value="">Select</option>
        {users.map(user=>( <option key={user._id} value={user._id}>{user.name}</option> ) )}
      </select>
      <button className='btn btn-primary mt-3' disabled={!selectedUserId} onClick={()=>handleClaim(selectedUserId)}>Claim Points</button>
    </div>
  )
}

export default UserSelector
