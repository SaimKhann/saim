const MyModal = ({closemodal, remove}) => {
    return<>
    <div onClick={closemodal} className="modal-wrapper"></div>
    <div className="modal-container"><h1>delete</h1>
    <p>Do you want to delete all items</p>
    <div className="d-flex justify-content-between">
    <button className="btn btn-secondary" onClick={closemodal}>no</button>
    <button className="btn btn-outline-danger" onClick={remove} >delete</button>
    </div>
    </div>
    </>
}
export default MyModal;