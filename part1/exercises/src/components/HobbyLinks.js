export default function HobbyLinks() {
    let hobbyLinks = ["https://www.alltrails.com/us/kansas", "https://boardgamegeek.com/browse/boardgame"]
    return <div>
        <p>My Favorite Hobbies</p>
        <a href = {hobbyLinks[0]}>Hiking trails of Kansas</a><br/>
        <a href = {hobbyLinks[1]}>Board games!</a>
        </div>
        
}