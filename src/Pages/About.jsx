
function About (){
    return (
        <div className="d-flex justify-content-center">
            <div className="profile-body">
                {/* <img
                    className="profileCard"
                    src="gwkerenbgt.jpg"
                    alt=""
                /> */}
                <div className="profile-description">
                    <img className="profilePicture"
                        src="daffa.jpg"
                        alt=""
                    />
                    <div className="p-name">Player Name : Daffa Maulana Wisesa</div>
                    <div className="p-tag">Player NIM : 21120120140057</div>
                    <p className="text-profile">World Level</p>
                    <div className="p-level">19</div>
                    <p className="text-profile">Achievements Unlocked</p>
                    <div className="p-rr">Undergraduate at University of Diponegoro</div>
                    <p className="text-profile">This app is created to fulfill PPB's Final Assignment</p>
                    <div className="p-elo">5th Semester</div>
                </div>
            </div>
        </div>


    );
}

export default About;

