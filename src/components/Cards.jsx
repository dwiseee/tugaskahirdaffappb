import namecards from "./data/namecards.json";
// import loc from "./data/loc.json";
import "./Cards.css";
import characters from "./data/characters.json";

const Cards = ({ nickname, signature, nameCardId, worldLevel, towerFloorIndex, avatarId, finishAchievementNum, towerLevelIndex, level, showNameCardIdList}) => {
  console.log(nameCardId)
  console.log(avatarId)
  console.log(showNameCardIdList)
  console.log(namecards[nameCardId])
  // console.log(characters[avatarId]['NameTextMapHash'])
  var pathcard = ""
  if (nameCardId === "") {
    pathcard = `https://enka.network/ui/UI_NameCardPic_0_P.png`
  } else {
    pathcard = `https://enka.network/ui/${namecards[nameCardId]['picPath'][1]}.png`
  }

  var profilePicture = ""
  if (avatarId === "") {
    profilePicture = `https://enka.network/ui/UI_AvatarIcon_Ayaka.png`
  } else {
    profilePicture = `https://enka.network/ui/${characters[avatarId]['ProfilePicture']}.png`
  }
  console.log(profilePicture)

  // var namecardList = ""
  // if (showNameCardIdList === "") {
  //   namecardList = `https://enka.network/ui/UI_NameCardIcon_0.png`
  // } else {
  //   namecardList = `https://enka.network/ui/${namecards['showNameCardIdList'][1]['icon']}.png`
  //   console.log(namecardList)
  // }

//   return (
//     <Card className="bg-dark text-white">
//       <Card.Img className='card-bg' src={pathcard} alt="Card image" />
//       <Card.ImgOverlay>
//         <Card.Img className='card-pp' src={profilePicture} />
//         <Card.Title>Player Name : {nickname}</Card.Title>
//         <Card.Text>Player Status : {signature}</Card.Text>
//         <Card.Text>Player Level : {level}</Card.Text>
//         <Card.Text>World Level : {worldLevel}</Card.Text>
//         <Card.Text>Achivemet Finished : {finishAchievementNum}</Card.Text>
//         <Card.Text>Spiral Abyss : Floor {towerFloorIndex} Chamber {towerLevelIndex} </Card.Text>
//       </Card.ImgOverlay>
//     </Card>
//   );
// }

return (
      
  <div className="profile-body">
    <img
      className="profileCard"
      src={pathcard}
      alt=""
    />
    <div className="profile-description">
    <img className="profilePicture"
    src={profilePicture}
    alt=""
    />
      <div className="p-name">Player Name : {nickname}</div>
      <div className="p-status">Player Status : {signature}</div>
      <p className="text-profile">World Level</p>
      <div className="p-level">{worldLevel}</div>
      <p className="text-profile">Achievements Unlocked</p>
      <div className="p-achievements">{finishAchievementNum}</div>
      <p className="text-profile">Spiral Abyss</p>
      <div className="p-abyss">Floor {towerFloorIndex} Chamber {towerLevelIndex}</div>
    </div>
  </div>
);
}

export default Cards;