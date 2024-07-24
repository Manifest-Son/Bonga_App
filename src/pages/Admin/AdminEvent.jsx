// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddEvent from './AddEvent'
import AdminEvents from './AdminEvents'
import './Admin.css'

function AdminEvent() {
  return (
    <section>
        <div className="event_section">
            <div className="create_event">
            <AddEvent />
            </div>
            <div className="events">
                {/* Events where you can **update** and **delete** */}
                <AdminEvents />
                {/* The above component to bear the delete, update functionality. */}
            </div>
        </div>
    </section>
    
  )
}

export default AdminEvent