import './Landingpage.css';
import React, { useState, useEffect } from "react";


const Weapon = () => {

    const [search, setSearch] = useState([]);
    const [name, setName] = useState([]);
    const [subStat, setSubStat] = useState("");
    const [passiveDesc, setPassiveDesc] = useState("");
    const [rarity, setRarity] = useState("");

    const api_url = `https://api.genshin.dev/weapons/${search}`
    async function getWeapon() {
        const response = await fetch(api_url)
        const data = await response.json();
        console.log(data);
        setName(data.name);
        setRarity(data.rarity);
        setPassiveDesc(data.passiveDesc);
        setSubStat(data.subStat);
    }
    useEffect(() => {
        console.log(search);
        getWeapon();
    }, [search])

    getWeapon();
    var characterPic = ""
    if (search === "") {
        characterPic = `https://enka.network/ui/UI_AvatarIcon_Ayaka.png`
    } else {
        characterPic = `https://api.genshin.dev/weapons/${search}/icon`
    }
    return (
        <div>
            <form className="d-flex justify-content-center">
                <input className="input"
                    defaultValue={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="please use undercase and replace space with -"
                    type="text"
                    size="40"
                />
            </form>
            <div className="d-flex justify-content-center" >
                <div className="profile-body">
                    <div className="profile-description">
                    <img
                        src={characterPic}
                        alt=""
                        class="center"
                    />
                        <div className="p-name">Weapon Name : {name}</div>
                        <div className="p-tag">Weapon Rarity : {rarity} Star</div>
                        <p className="text-profile">Weapon Subtitute Stat</p>
                        <div className="p-level">{subStat}</div>
                        <p className="text-profile">Weapon Effect</p>
                        <div className="p-rr">{passiveDesc}</div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Weapon;