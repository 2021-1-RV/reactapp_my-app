import './App.css'

function App() {
  return (
    <>
      <div className="userCard">
        <div className="userContainer">
          <div className="userImage"></div>
          <div className="userInfo">
            <div className="userFullName">Emma Watson</div>
            <div className="userEmail">@EmWatson</div>
          </div>
          <button className="btn"></button>
        </div>
        <div className="userStatContainer">
          <div class="userStat">
            <p class="letters">Tweets</p>
            <p class="numbers">1,337</p>
          </div>
          <div class="userStat">
            <p class="letters">Following</p>
            <p class="numbers">561</p>
          </div>
          <div class="userStat">
            <p class="letters">Followers</p>
            <p class="numbers">718</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
