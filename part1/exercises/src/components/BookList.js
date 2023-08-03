import classes from './BookList.module.css'

export default function BookList() {
   let pageTitle = "My Latest Book Obsessions";
   let book1 = "https://m.media-amazon.com/images/I/61Ig5mEvIcL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fLwdk9whcIzSKyWDG4T_eXcw0rkgly75CNmhmqMqMl_AMxZJ";
   let book3 = "https://preview.redd.it/path-of-the-berserker-hits-in-gamelit-and-litrpg-v0-4edt6mv7l20b1.jpg?width=640&crop=smart&auto=webp&s=4aae403ffaa7b6d5465655a90a55da4578359835";

   return (
      <div className = {classes.bookDiv}>
         <h3>{pageTitle}</h3>
         <img className = {classes.bookImgs} src={book1} alt="He who fights with monsters by Shirtaloon and Travis Deverell" />
         <img className = {classes.bookImgs} src={book2} alt="Defiance of the fall by TheFirstDefier and JF Brink" />
         <img className = {classes.bookImgs} src={book3} alt="The path of the Berserker by Rick Scott " />
      </div>      
   );
}