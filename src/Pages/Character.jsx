import Search from "../components/Search";
import Home from "./Home";
import './Landingpage.css';
import React, { useState, useEffect } from "react";
import axios from "axios";


const Character = () => {

    const [search, setSearch] = useState([]);
    const [name, setName] = useState([]);
    const [vision, setVision] = useState("");
    const [nation, setNation] = useState("");
    const [weapon, setWeapon] = useState("");
    const [rarity, setRarity] = useState("");
    const [description, setDesc] = useState("");

    const api_url = `https://api.genshin.dev/characters/${search}`
    async function getCharacter() {
        const response = await fetch(api_url)
        const data = await response.json();
        console.log(data);
        setName(data.name);
        setWeapon(data.weapon);
        setVision(data.vision);
        setNation(data.nation);
        setRarity(data.rarity);
        setDesc(data.description);
    }
    useEffect(() => {
        console.log(search);
        getCharacter();
    }, [search])

    getCharacter();
    var characterPic = ""
    if (search === "") {
        characterPic = `https://enka.network/ui/UI_AvatarIcon_Ayaka.png`
    } else {
        characterPic = `https://api.genshin.dev/characters/${search}/portrait`
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
                        <div className="p-name">Character Name : {name}</div>
                        <div className="p-tag">Character vision : {vision}</div>
                        <div className="p-tag">Character Rarity : {rarity} Star</div>
                        <p className="text-profile">Character Weapon</p>
                        <div className="p-level">{weapon}</div>
                        <p className="text-profile">Character Nation</p>
                        <div className="p-rr">{nation}</div>
                        <p className="text-profile">Character Description</p>
                        <div className="p-elo">{description}</div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Character;