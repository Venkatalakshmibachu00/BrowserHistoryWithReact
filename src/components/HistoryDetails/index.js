import './index.css'

const HistoryDetails = props => {
  const {eachList, onDeleteList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachList

  const onClickDeleteBtn = () => {
    onDeleteList(id)
  }

  return (
    <li className="social-media-container">
      <div className="time-icon-container">
        <p className="para">{timeAccessed}</p>
        <div className="icon-container">
          <img className="image" src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p className="para">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        className="delete-btn"
        data-testid="delete"
        onClick={onClickDeleteBtn}
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryDetails
