import Search from "../components/Search";
import Home from "./Home";
import './Landingpage.css';
import React, { useState, useEffect } from "react";
import axios from "axios";


const Landingpage = () => {
    
    const [search, setSearch] = useState([]);
    const [artiData, setArtiData] = useState([]);
    const [name, setName] = useState([]);
    const [twopceffect, setTwopceffect] = useState([]);
    const [fourpceffect, setFourpceffect] = useState([]);
    const [rarity, setRarity] = useState("");

    const api_url =`https://api.genshin.dev/artifacts/${search}`
    async function getArtifact() {
        const response = await fetch(api_url)
        const data = await response.json();
        console.log(data);
        setName(data.name);
        setRarity(data.max_rarity);
        setFourpceffect(data['4-piece_bonus']);
        setTwopceffect(data['2-piece_bonus']);
    }
    useEffect(() => {
        console.log(search);
        getArtifact();
    },[search])
    
    getArtifact();
    var characterPic = ""
    if (search === "") {
        characterPic = `https://enka.network/ui/UI_AvatarIcon_Ayaka.png`
    } else {
        characterPic = `https://api.genshin.dev/artifacts/${search}/flower-of-life`
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
                        <div className="p-name">Artifact Name : {name}</div>
                        <div className="p-tag">Artifact Rarity : {rarity}</div>
                        <p className="text-profile">Artifact Two Piece Effect</p>
                        <div className="p-level">{twopceffect}</div>
                        <p className="text-profile">Artifact Four Piece Effect</p>
                        <div className="p-rr">{fourpceffect}</div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Landingpage;