
import chefIcon from "../assets/chefIcon.png";



export default function Head() {
    return (
        <header className="head"> 
            <link href="https://fonts.googleapis.com/css2?family=Playball&display=swap" rel="stylesheet" />

            <img src={chefIcon} alt="chef Icon" />
            <h1>Aşçıbaşı</h1>

        </header>
    )
}