import React, { useState, useEffect } from "react";


import axios from "axios";
import Cards from "../components/Cards";

const Home = () => {
    const [search, setSearch] = useState("");
    const [nickname, setNickname] = useState("");
    const [signature, setSignature] = useState("");
    const [nameCardId, setNameCardId] = useState("");
    const [level, setLevel] = useState("");
    const [towerFloorIndex, setTowerFloorIndex] = useState("");
    const [towerLevelIndex, setTowerLevelIndex] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [icon, setIcon] = useState("");
    const [avatarId, setAvatarId] = useState("");
    const [worldLevel, setWordlLevel] = useState("");
    const [finishAchievementNum, setFinishAchievementNum] = useState("");
    const [showNameCardIdList, setShowNameCardIdList] = useState("");

    const GetProfile = async () => {
        const config = {
            headers: {}
        };
        if (search.length === 9) {
            await axios
                .get(`https://enka.network/u/${search}/__data.json`,config)
                .then(function (response) {
                    console.log(response);
                    const data = response.data.playerInfo
                    setNickname(data.nickname);
                    setSignature(data.signature);
                    setNameCardId(data.nameCardId);
                    setTowerFloorIndex(data.towerFloorIndex);
                    setTowerLevelIndex(data.towerLevelIndex);
                    setProfilePicture(data.profilePicture);
                    setLevel(data.level);
                    setIcon(data.icon);
                    setWordlLevel(data.worldLevel);
                    setFinishAchievementNum(data.finishAchievementNum);
                    setAvatarId(data.profilePicture.avatarId);
                    setShowNameCardIdList(data.showNameCardIdList);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }
    
    useEffect(() => {
        console.log(search);
        GetProfile();
    },[search])

    return (
        <div >
            <form className="d-flex justify-content-center">
                <input className="input"
                    defaultValue={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search UID"
                    type="text"
                />
            </form>
            <div className="d-flex justify-content-center">
            <Cards
                nickname={nickname}
                signature={signature}
                nameCardId={nameCardId}
                towerFloorIndex={towerFloorIndex}
                towerLevelIndex={towerLevelIndex}
                level={level}
                profilePicture={profilePicture}
                icon={icon}
                worldLevel={worldLevel}
                finishAchievementNum={finishAchievementNum}
                avatarId={avatarId}
                showNameCardIdList={showNameCardIdList}
            />
            </div>
        </div>
    )
}

export default Home;
